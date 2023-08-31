import mongoose from "mongoose";

// creating a post

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User", // reference to populate a field
      required: true,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
          default: 0,
        },
      },
    ],
    commnents: [
      {
        content: {
          type: String,
          required: true,
        },
        author: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// model
export const postModel = mongoose.model("Post", postSchema);
