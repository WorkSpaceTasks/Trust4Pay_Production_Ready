const mongoose = require('mongoose');

//Start Block Schema Creating
const VideoSchema = mongoose.Schema({
    ImageUrl: { type: String },
    ImageName: { type: String },
    ImageMimeType: { type: String },
})
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('PackageCollection', PackageSchema);