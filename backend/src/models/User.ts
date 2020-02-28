import mongoose, { Schema, Document } from "mongoose";

enum ROLE {
  USER = "user",
  ADMIN = "admin"
}

export interface UserSchemaDb extends Document {
  uid: string;
  email: string;
  name: string;
  role: ROLE;
}

const UserSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String
    },
    name: {
      type: String
    },
    role: {
      type: String,
      enum: [ROLE.USER, ROLE.ADMIN],
      default: ROLE.USER,
      required: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model<UserSchemaDb>("User", UserSchema);

export default User;
