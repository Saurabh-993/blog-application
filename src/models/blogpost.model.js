import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author_ID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    likes_count: {
      type: Number,
      default: 0,
    },
    post_content: {
      type: String,
      required: [true, "Post can't be blank"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const blogPost = mongoose.model("blogInfo", postSchema);

export default blogPost;
