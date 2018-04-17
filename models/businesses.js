const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BusinessSchema = new Schema({
  BusinessName: String,
  Location: [
    {
      Name: String,
      Coordinates: [Number],
      PhysicalAddress: {
        StreetAddress: String,
        SuiteApt: String,
        City: String,
        State: String,
        ZipCode: String
      },
      PhoneNumber: String
    }
  ],
  AlumName: String,
  Title: String,
  Class: Number,
  Degree: String,
  Field: String,
  Url: String,
  Description: String,
  Primary_Image_Url: String,
  Image2_Url: String,
  Logo_Url: String
})

const Business = mongoose.model('business', BusinessSchema)

module.exports = Business
