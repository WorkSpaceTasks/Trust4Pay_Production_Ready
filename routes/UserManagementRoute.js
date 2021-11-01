const expres = require('express');
const Router = expres.Router();


const { UserLogin, UserRegister, UpdateUserEarnings, GetUsers, GetUserById, UpdateUserStatus } = require('../controllers/UserManagementController');
const {UploadUserImage} = require('../libraryfiles/UploadUserImage');


//Embdedded Data Route
Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UploadUserImage.single('UserImage'),UserRegister );
Router.put('/UpdateUserEarnings',UpdateUserEarnings);
Router.get('/GetUsers',GetUsers);
Router.get(`/GetUserById/:_Id`,GetUserById);
Router.put(`/UpdateUserStatus/:_Id`,UpdateUserStatus);
module.exports = Router;