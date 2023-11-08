import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {type: String, unique: true},
  age: Number,
  password: String,
  cart: {type: mongoose.Schema.Types.ObjectId, ref:"carts"},
  rol: {type: String, default: "user", enum: ["user", "admin", "premium"]},
  active: Boolean,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});


export const userModel = mongoose.model(userCollection, userSchema);
