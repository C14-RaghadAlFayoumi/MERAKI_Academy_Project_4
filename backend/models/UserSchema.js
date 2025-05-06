const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { type } = require("@testing-library/user-event/dist/type");
const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role :{type:mongoose.Schema.Types.ObjectId, ref:"Role"  }
  
});

userSchema.pre("save", async function() {
    console.log(this);
    
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 2);
});

const model = mongoose.model("user", userSchema);
module.exports = model;

