const {AdminController} = require('../Controllers/admin.controller');

const Router=require('express').Router();

Router.get("/",AdminController.adminIndex);

module.exports={
    Admin_Router:Router
};


