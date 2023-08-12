const {AdminController} = require('../Controllers/admin.controller');

const Router=require('express').Router();

Router.get("/",AdminController.adminIndex);

Router.post('/addAuthor',AdminController.postAddAuthor);

Router.post('/addBook',AdminController.postAddBook);

module.exports={
    AdminRouter:Router
};


