import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import config from "../../config";
import bcrypt  from "bcrypt";

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  needsPassword: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "student", "faculty"],
  },
  status: {
    type: String,
    required: true,
    enum: ["in-progress", "blocked"],
    default: "in-progress",
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

// *************** pre save document middleware  .will work create() and save () ************************

userSchema.pre("save", async function (next) {
  const user = this;
  //hassing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.BCRIPT_SALT_ROUNDS)
  );
  next();
});

// post save middleware
userSchema.post("save", function (doc, next) {
  doc.password = "";
  // console.log( "post hook:we save our  data");
  next();
});

export const UserModel = model<Tuser>("User", userSchema);
