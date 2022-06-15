const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const Category = require('./Models/Category');
const Drink = require('./Models/Drink');
const Food = require('./Models/Food');
const Promo = require('./Models/Promo');
const Review = require('./Models/Review');
const User = require('./Models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//This is the connection to the MySQL Database
config.authenticate().then(function () {
    console.log('Database is Running and Connected...');
}).catch(function (err) {
    console.log(err);
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/////////////////////////// REGISTER //////////////////////////////
app.post('/register', function (req, res) {

    let newPassword = req.body.password;

    bcrypt.hash(newPassword, saltRounds, function (err, hash) {
        let userData = {
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: hash
        };

        User.create(userData).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    });
});

///////////////////////////// LOGIN ///////////////////////////////
app.post('/login', function (req, res) {

    let username = req.body.username;
    let password = req.body.password;
    let userData = {
        where: { username }
    }

    //Find the user linked to the username
    User.findOne(userData).then((result) => {

        if (result) {
            console.log(result);
            bcrypt.compare(password, result.password, function (err, output) {
                console.log(output);
                if (output) {
                    res.status(200).send(result);
                } else {
                    res.status(400).send('Wrong Password');
                }
            });
        } else {
            res.status(404).send('User does not exist');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

///////////////////////// FOREIGN KEYS ////////////////////////////
// Food FK
Category.hasMany(Food, {
    foreignKey: 'category_id'
})
Food.belongsTo(Category, {
    foreignKey: 'category_id'
})

// Drinks FK
Category.hasMany(Food, {
    foreignKey: 'category_id'
})
Drink.belongsTo(Category, {
    foreignKey: 'category_id'
})

/////////////////////////// CATEGORY //////////////////////////////
// GET : This get the list of all category
app.get('/category', function (req, res) {
    Category.findAll().then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// POST : Add a new Category
app.post('/category', function (req, res) {
    Category.create(req.body).then(function (result) {
        res.redirect('/category');
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// DELETE : Delete a category
app.delete('/category/:category_id', function (req, res) {
    let categoryID = req.params.category_id;
    //Find the category by ID
    Category.findByPk(categoryID).then(function (result) {
        if (result) {
            //Delete category from database
            result.destroy().then(function () {
                res.redirect('/category');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Category not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

/////////////////////////// FOOD //////////////////////////////
// GET : This get the list of all food
app.get('/food', function (req, res) {
    let fooddata = {
        where: {},
        include: Category
    }
    Food.findAll(fooddata).then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});
// GET : Food by id

app.get('/food/:id/',
function(req, res){
    let id = req.params.id;
    Food.findByPk(id).then(function(result){        
      res.status(200).send(result);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });
  
  
// POST : Add a new food
app.post('/food', function (req, res) {
    Food.create(req.body).then(function (result) {
        res.redirect('/food');
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// DELETE : Delete a food
app.delete('/food/:food_id', function (req, res) {
    let foodID = req.params.food_id;
    //Find the food by ID
    Food.findByPk(foodID).then(function (result) {
        if (result) {
            //Delete food from database
            result.destroy().then(function () {
                res.redirect('/food');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Food not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// PATCH : Update food
app.patch('/food/:food_id', function (req, res) {
    let foodID = req.params.food_id;

    //Find the food 
    Food.findByPk(foodID).then(function (result) {

        //Check if food was found
        if (result) {

            //Update Food
            if (req.body.name === "") {
                result.name = result.name
            } else {
                result.name = req.body.name;
            }
            if (req.body.description === "") {
                result.description = result.description
            } else {
                result.description = req.body.description;
            }
            if (req.body.price === "") {
                result.price = Number(result.price)

            } else {
                result.price = req.body.price;
            }
            if (req.body.category_id === "") {
                result.category_id = Number(result.category_id)
            } else {
                result.category_id = req.body.category_id;
            }
            if (req.body.ingredients === "") {
                result.ingredients = result.ingredients
            } else {
                result.ingredients = req.body.ingredients;
            }
            //Save changes to DB
            result.save().then(function () {
                res.send(result)


            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Food not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

/////////////////////////// DRINK //////////////////////////////
// GET : This get the list of all drink
app.get('/drink', function (req, res) {
    let drinkdata = {
        where: {},
        include: Category
    }
    Drink.findAll(drinkdata).then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// POST : Add a new drink
app.post('/drink', function (req, res) {
    Drink.create(req.body).then(function (result) {
        res.redirect('/drink');
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// DELETE : Delete a drink
app.delete('/drink/:drink_id', function (req, res) {
    let drinkID = req.params.drink_id;
    //Find the drink by ID
    Drink.findByPk(drinkID).then(function (result) {
        if (result) {
            //Delete drink from database
            result.destroy().then(function () {
                res.redirect('/drink');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Drink not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// PATCH : Update drink
app.patch('/drink/:drink_id', function (req, res) {
    let drinkID = req.params.drink_id;

    //Find the drink 
    Drink.findByPk(drinkID).then(function (result) {
        //Check if drink was found
        if (result) {
            //Update drink
            if (req.body.name === undefined) {
                result.name = result.name
            } else {
                result.name = req.body.name;
            }
            if (req.body.description === undefined) {
                result.description = result.description
            } else {
                result.description = req.body.description;
            }
            if (req.body.price === undefined) {
                result.price = result.price
            } else {
                result.price = req.body.price;
            }
            if (req.body.category_id === undefined) {
                result.category_id = result.category_id
            } else {
                result.category_id = req.body.category_id;
            }
            //Save changes to DB
            result.save().then(function () {
                res.send(result)
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Drink not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});


/////////////////////////// PROMO //////////////////////////////
// GET : This get the list of all promo
app.get('/promo', function (req, res) {
    Promo.findAll().then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// POST : Add a new promo
app.post('/add-offer', function (req, res) {
    Promo.create(req.body).then(function (result) {
        res.redirect('/promo');
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// DELETE : Delete a promo
app.delete('/promo/:promo_id', function (req, res) {
    let promoID = req.params.promo_id;
    //Find the promo by ID
    Promo.findByPk(promoID).then(function (result) {
        if (result) {
            //Delete promo from database
            result.destroy().then(function () {
                res.redirect('/promo');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Promo not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// PATCH : Update promo
app.patch('/promo/:promo_id', function (req, res) {
    let promoID = req.params.promo_id;

    //Find the promo 
    Promo.findByPk(promoID).then(function (result) {
        //Check if promo was found
        if (result) {
            //Update promo
            if (req.body.name === undefined) {
                result.name = result.name
            } else {
                result.name = req.body.name;
            }
            if (req.body.description === undefined) {
                result.description = result.description
            } else {
                result.description = req.body.description;
            }
            if (req.body.price === undefined) {
                result.price = result.price
            } else {
                result.price = req.body.price;
            }
            if (req.body.start_date === undefined) {
                result.start_date = result.start_date
            } else {
                result.start_date = req.body.start_date;
            }
            if (req.body.end_date === undefined) {
                result.end_date = result.end_date
            } else {
                result.end_date = req.body.end_date;
            }
            if (req.body.date === undefined) {
                result.date = result.date
            } else {
                result.date = req.body.date;
            }
            //Save changes to DB
            result.save().then(function () {
                res.send(result)
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Promo not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

/////////////////////////// REVIEW //////////////////////////////
// GET : This get the list of all review
app.get('/review', function (req, res) {
    Review.findAll().then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// POST : Add a new review
app.post('/review', function (req, res) {
    Review.create(req.body).then(function (result) {
        res.redirect('/review');
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

// DELETE : Delete a review
app.delete('/review/:review_id', function (req, res) {
    let reviewID = req.params.review_id;
    //Find the review by ID
    Review.findByPk(reviewID).then(function (result) {
        if (result) {
            //Delete review from database
            result.destroy().then(function () {
                res.redirect('/review');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Review not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`KBRestaurant database is listening on port ${port}`);
});
