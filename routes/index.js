const express = require('express');
const router = express.Router();
const isloggedin = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');

router.get('/', function(req, res){
    let error = req.flash("error");
    res.render("index", {error, loggedin: false});
});

router.get("/shop", isloggedin,async function(req, res){
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", {products, success});
});

router.get("/cart", isloggedin, async function(req, res){
    let user = await userModel.findOne({email: req.user.email}).populate("cart");
    res.render("cart", {user});
});

router.get("/addtocart/:productid", isloggedin, async function (req, res){
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect("/shop");
})

router.get('/removefromcart/:id', isloggedin, async (req, res) => {
    try {
        // user le aao email se
        let user = await userModel.findOne({ email: req.user.email });

        const productId = req.params.id;

        // cart filter karo aur product remove kar do
        user.cart = user.cart.filter(item => item.toString() !== productId);

        await user.save();

        res.redirect('/cart'); // cart page reload
    } catch (err) {
        console.error(err);
        res.status(500).send("Error removing product from cart");
    }
});



router.get("/logout", isloggedin, function(req, res){
    res.render("shop");
});

module.exports = router;