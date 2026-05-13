import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: "blogPost",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = mongoose.model("authorInfo", userSchema);

export default User;
