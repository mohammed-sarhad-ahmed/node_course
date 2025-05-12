import { UserModel } from "../model/user.js";
import { handleError } from "../utils/handleError.js";

export const signup = handleError(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const newUser = await UserModel.create({
    email,
    password,
    name,
    confirmPassword,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
