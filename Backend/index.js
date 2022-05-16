const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const Category = require('./Models/Category');
const Drink = require('./Models/Drink');
const Food = require('./Models/Food');
const Promo = require('./Models/Promo');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* Food.belongsTo(Category, {
    foreignKey: "category_id"
});

Drink.belongsTo(Category, {
    foreignKey: "category_id"
});

Category.hasMany(Food, Drink, {
    foreignKey: "category_id"
}); */

//This is the connection to the MySQL Database
config.authenticate().then(function(){
    console.log('Database is Running and Connected...');
}).catch(function(err){
    console.log(err);
});

/////////////////////////// CATEGORY //////////////////////////////
// GET : This get the list of all category
app.get('/category', function(req, res){
    Category.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// POST : Add a new Category
app.post('/category', function(req, res){
    Category.create(req.body).then(function(result){
        res.redirect('/category');
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// DELETE : Delete a category
app.delete('/category/:category_id', function(req, res){
    let categoryID = req.params.category_id;
    //Find the category by ID
    Category.findByPk(categoryID).then(function(result){
        if(result){
            //Delete category from database
            result.destroy().then(function(){
                res.redirect('/category');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Category not found');
        }
    }).catch(function(err){
        res.status(500).send(err);
    });
});

/////////////////////////// FOOD //////////////////////////////
// GET : This get the list of all food
app.get('/food', function(req, res){
    Food.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// POST : Add a new food
app.post('/food', function(req, res){
    Food.create(req.body).then(function(result){
        res.redirect('/food');
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// DELETE : Delete a food
app.delete('/food/:food_id', function(req, res){
    let foodID = req.params.food_id;
    //Find the food by ID
    Food.findByPk(foodID).then(function(result){
        if(result){
            //Delete food from database
            result.destroy().then(function(){
                res.redirect('/food');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Food not found');
        }
    }).catch(function(err){
        res.status(500).send(err);
    });
});

/////////////////////////// DRINK //////////////////////////////
// GET : This get the list of all drink
app.get('/drink', function(req, res){
    Drink.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// POST : Add a new drink
app.post('/drink', function(req, res){
    Drink.create(req.body).then(function(result){
        res.redirect('/drink');
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// DELETE : Delete a drink
app.delete('/drink/:drink_id', function(req, res){
    let drinkID = req.params.drink_id;
    //Find the drink by ID
    Drink.findByPk(drinkID).then(function(result){
        if(result){
            //Delete drink from database
            result.destroy().then(function(){
                res.redirect('/drink');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Drink not found');
        }
    }).catch(function(err){
        res.status(500).send(err);
    });
});

/////////////////////////// PROMO //////////////////////////////
// GET : This get the list of all promo
app.get('/promo', function(req, res){
    Promo.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// POST : Add a new promo
app.post('/promo', function(req, res){
    Promo.create(req.body).then(function(result){
        res.redirect('/promo');
    }).catch(function(err){
        res.status(500).send(err);
    });
});

// DELETE : Delete a promo
app.delete('/promo/:promo_id', function(req, res){
    let promoID = req.params.promo_id;
    //Find the promo by ID
    Promo.findByPk(promoID).then(function(result){
        if(result){
            //Delete promo from database
            result.destroy().then(function(){
                res.redirect('/promo');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Promo not found');
        }
    }).catch(function(err){
        res.status(500).send(err);
    });
});












app.listen(3000, function(){
    console.log('KBRestaurant database is running on localhost:3000');
});