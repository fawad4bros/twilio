const mongoose = require("mongoose");

const schema = new mongoose.Schema({
accountSid: {
    type: String,
  },
  callSid: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  duration: {
    type: String,
  },
  sid: {
    type: String,
  },
  uri: {
    type: String,
  },
  mediaUrl: {
    type: String,
  },
});

const voice = mongoose.model("voice", schema);
module.exports.voice = voice;