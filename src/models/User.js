

import { Schema ,model , models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type :String,
    default: "USER"
  },
  createDate: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const User = models.User || model("User", UserSchema);
export default User