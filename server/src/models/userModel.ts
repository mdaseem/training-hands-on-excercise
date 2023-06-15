import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  userEmail: String,
  userPassword: String,
});

export const Users = mongoose.model("users", UserSchema);
