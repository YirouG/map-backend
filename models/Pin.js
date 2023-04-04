const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    url:{
      type:String,
      requires:false,
    },
    tag:{
      type:String,
      requires:false,
    },
    researcher:{
      type:String,
      requires:false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);