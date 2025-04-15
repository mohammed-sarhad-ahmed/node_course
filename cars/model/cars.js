import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "the make of the car must be provided"],
    },
    model: {
      type: String,
      required: [true, "the model of the car must be provided"],
    },
    releaseYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
export const CarModel = mongoose.model("Car", carSchema);
