import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  title: String,
  trainerName: String,
  rating: Number,
  specialStatus: String,
  totalRating: Number,
  actualPrice: Number,
  discountPrice: Number,
  imageUrl: String,
});

export const Course = mongoose.model("courses", CourseSchema);
