import mongoose, { Schema } from "mongoose";
import { passwordHasher } from "../utilities/password_hasher.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
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
    likes_posts: {
      type: [Schema.Types.ObjectId],
      ref: "blogPost",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

userSchema.pre("save", async (next) => {
  // Password tabhi hash karo jab password modify hua ho
  if (!this.isModified("password")) {
    return next();
  }
  // we will continue this thing again.
  try {
    this.password = passwordHasher(password);

  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("authorInfo", userSchema);

export default User;
