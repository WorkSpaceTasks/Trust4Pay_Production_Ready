const _PackageManagementAddNewPackageModel = require(`../models/PackageManagementModel`);


const AddPackage = async (req, res) => {
    try {

        const _AddNewPackage = new _PackageManagementAddNewPackageModel({
            PackageName: req.body.PackageName,
            PackagePrice: req.body.PackagePrice,
            AdsLimit: req.body.AdsLimit,
            MinimumWithdrawl: req.body.MinimumWithdrawl,
            ReferralClick: req.body.ReferralClick,
            ReferralLimit: req.body.ReferralLimit,
            Duration: req.body.Duration,
            DailyEarnings: req.body.DailyEarnings,
        });
        await _AddNewPackage.save();
        res.json({
            Message: `Package Added Successfully`,
            Data: true,
            Result: req.body
        })
    } catch (error) {
        res.json({
            Message: error.Message,
            Data: false,
            Result: false
        })
    }
}

const GetPackages = async (req,res) => {
    try {
        const _GetAllPackages = await _PackageManagementAddNewPackageModel.find();
        if(_GetAllPackages.length <= 0){
            return res.json({
                Message:`There is no Package in your Database`,
                Data:false,
                Result:null
            })
        }

        if(_GetAllPackages.length > 0){
            return res.json({
                Message:`Packages retrieved`,
                Data:true,
                Result:_GetAllPackages
            })
        }
    } catch (error) {
        res.json({
            Message:error.Message,
            Data:false,
            Result:null
        })
    }
}
module.exports = { AddPackage, GetPackages };