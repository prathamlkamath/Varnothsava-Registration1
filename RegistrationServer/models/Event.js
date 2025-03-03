const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, required: true },
  imgID: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
