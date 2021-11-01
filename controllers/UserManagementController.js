const _UserCluster = require('../models/UserManagementModel');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRegister = async (req, res) => {
    try {
        const _RegisterUserToSave = new _UserCluster({
            Name: req.body.name,
            UserName: req.body.username,
            Email: req.body.email,
            Mobile: req.body.mobile,
            Package: req.body.package,
            Password: req.body.password,
            Address: req.body.password,
            Referal: req.body.referal,
            AccountNumber: req.body.account,
            ImageUrl: `${req.body.name}/${req.file.filename}`,
            ImageName: req.file.originalname,
            ImageMimeType: req.file.mimetype,
        });
        const _UserData = await _RegisterUserToSave.save();
        res.json({ Message: 'User Register Successfully', Result: true, Data:_UserData });
    } catch (error) {
        fs.unlinkSync(`./assets/Users/${req.file.filename}`);
        res.json({ Message: error.message, Result: false });
    }
}

const UserLogin = async (req, res) => {
    try {
        _Email = req.body.email;
        _Password = req.body.password;
        const _UserToAuthenticate = await _UserCluster.findOne({ Email: _Email });

        if (_UserToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Data: null
            })
        }

        const _Result = await bcrypt.compare(_Password, _UserToAuthenticate.Password);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Data: 'Not Found ' + _Result,
                Result: null
            })
        }

        if (_UserToAuthenticate.Status === 0) {
            return res.json({
                Message: 'You Cannot Login Because You Are Suspended By Admin Please Contact Admin',
                Data: null
            })
        }

        const _Token = jwt.sign(
            {
                Email: _UserToAuthenticate.Email,
                UserId: _UserToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )

        return res.json({
            Message: 'Authentication SuccessFull',
            Data: _Result,
            Token: _Token
        })



    } catch (error) {
        console.log(error.message);
        res.json({
            Error: error.message,
            Data: null
        })
    }
}

const UpdateUserEarnings =  async (req, res) => {
    try {
        const _UserId = req.body._Id;
        const _UpdateEarnings = await _UserCluster.updateOne({_id:_UserId},{ $inc: { Earnings:4}});
        const _GetUpdatedUser = await _UserCluster.findById({_id:_UserId});
        res.json({
            Message:`Updated Successfully`,
            Data:true,
            Result:_GetUpdatedUser,
        })
    } catch (error) {
        res.json({
            Error:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetUsers = async (req,res) => {
    try {
        const _GetAllUsers = await _UserCluster.find();
        if (_GetAllUsers.length <= 0){
            return res.json({
                Message:`No Users Found in your Database`,
                Data:false,
                Result:null
            })
        }
        if(_GetAllUsers.length > 0){
            return res.json({
                Message:`Found All Users`,
                Data:true,
                Result:_GetAllUsers
            })
        }
    } catch (error) {
        res.json({
            Error:error.message,
            Data:false,
            Result:null
        })
    }
}


const GetUserById = async (req,res) => {
    try {
        const _GetId = req.params._Id;
        const _GetUserById = await _UserCluster.findById({_id:_GetId});
        if (_GetUserById === null){
            return res.json({
                Message:`No Users Found in your Database`,
                Data:false,
                Result:null
            })
        }
        if(_GetUserById !== null){
            return res.json({
                Message:`Found All Users`,
                Data:true,
                Result:_GetUserById
            })
        }
    } catch (error) {
        res.json({
            Error:error.message,
            Data:false,
            Result:null
        })
    }
}

const UpdateUserStatus = async (req,res) => {
    try {
        const _GetId = req.params._Id;
        const _UpdateUserStatus = await _UserCluster.updateOne({_id:_GetId},{ $set: { Status:1 }});
        res.json({
            Message:`User Status Updated`,
            Data:true,
            Result:_UpdateUserStatus,
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null,
        })
    }
}
module.exports = { UserLogin, UserRegister, UpdateUserEarnings, GetUsers, GetUserById, UpdateUserStatus };

