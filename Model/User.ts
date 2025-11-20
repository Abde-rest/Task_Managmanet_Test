import mongoose from "mongoose";

const UserSechema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tokenhash: String,

    expirationTime: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSechema);
