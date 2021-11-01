const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

const UserSchema = mongoose.Schema({
    Name: { type: String, required: true},
    UserName: { type: String, required: true,unique:true},
    Email: { type: String, required: true, unique:true},
    Mobile: { type: Number, required: true },
    Package: { type: String, required: true },
    Password: { type: String, required: true },
    Referal:{type:String},
    AccountNumber:{type:String, required: true},
    Earnings:{type:Number, default:0},
    ImageUrl: { type: String },
    ImageName: { type: String },
    ImageMimeType: { type: String },
    CreatedDate: { type: Date, default: Date.now },
    SaltString:{type:String},
    Status:{type:Number, default:0}
})

UserSchema.pre('save', function(next){
    bcrypt.genSalt(SaltRounds,(err,salt)=>{
        if(salt){
        this.SaltString=salt;
        bcrypt.hash(this.Password,salt,(err,hash)=>{
            this.Password=hash;
            next();
        })
    }
    else {
        res.json({
            Error:err.message
        })
    }
    })
});





module.exports = mongoose.model('UserCluster', UserSchema);