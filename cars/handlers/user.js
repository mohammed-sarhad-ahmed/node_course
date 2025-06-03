import { UserModel } from "../model/user.js";
import { handleError } from "../utils/handleError.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

function generateJWT(id) {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: new Date().getTime() + 1000 * 60 * 60 * 24 * 10,
    }
  );
}
export const signup = handleError(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const newUser = await UserModel.create({
    email,
    password,
    name,
    confirmPassword,
  });

  const token = generateJWT(newUser._id);
  res.status(200).json({
    status: "success",
    data: {
      user: newUser,
      token,
    },
  });
});

export const login = handleError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserModel.find({
    email,
  }).select("+password");
  if (!user) {
    next(new Error("invalid credentials"));
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    next(new Error("invalid credentials"));
  }
  const token = generateJWT(newUser._id);
  res.status(200).send({
    data: {
      token,
    },
  });
});
