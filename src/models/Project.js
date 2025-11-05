import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["Construction", "Interior"],
      required: true,
    },
    subCategory: {
      type: String,
      enum: ["Residential", "Commercial"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  {
    collection: "projects",
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
