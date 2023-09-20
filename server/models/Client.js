const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    trim: true,
    maxlength: [50, "Email cannot be more than 50 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
    trim: true,
    maxlength: [20, "Phone number cannot be more than 20 characters"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);
