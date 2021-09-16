import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
    },
    service: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
