const expres = require('express');
const Router = expres.Router();

const { AddPackage, GetPackages } = require(`../controllers/PackageManagementCOntroller`);
//Embdedded Data Route
Router.post('/AddPackage',AddPackage);
Router.get(`/GetPackages`,GetPackages)

module.exports = Router;