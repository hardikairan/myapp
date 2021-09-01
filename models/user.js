const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName           :         { type: String, trim: true,                                                 },
  lastName            :         { type: String, trim: true,                                                 },
  dob                 :         { type: Object,                                                             },
  contactNo           :         { type: Number, default: "", required: true,                                 },
  email               :         { type: String, required: true, unique: true}
}, {timestamps :      true})

module.exports =  mongoose.model('User', UserSchema)