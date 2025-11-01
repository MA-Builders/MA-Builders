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
    images: [
      {
        type: String,
      },
    ],
    location: {
      type: String,
    },
  },
  {
    collection: "projects",
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
