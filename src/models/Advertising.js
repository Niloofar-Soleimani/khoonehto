import { model, models, Schema } from "mongoose";
import User from "./User";

const advertisingSchema = new Schema(
  {
    title: { type: String, required: true },
    discriotion: { type: String, required: true },
    phone: { type: String, requiredd: true },
    price: { type: Number, required: true },
    constractionDate: { type: Date, required: true },
    category: {
      type: String,
      enum: ["villa", "apartment", "office", "store"],
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    location: { type: String, required: true },
    realSatet: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: User },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Advertising =
  models.Advertising || model("Advertising", advertisingSchema);
export default Advertising;
