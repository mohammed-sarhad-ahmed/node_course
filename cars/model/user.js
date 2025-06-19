import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name"],
      minlength: 4,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "please provide a email"],
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, "please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
      minlength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "please provide a password"],
      minlength: 8,
      validate: {
        validator: function (confirmPassword) {
          return this.password === confirmPassword;
        },
        message: "confirm password does not match the password",
      },
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 13);
  this.confirmPassword = undefined;
  next();
});
export const UserModel = new mongoose.model("User", userSchema);
