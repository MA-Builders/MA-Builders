import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum:["Commercial","Residential"],
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema);
