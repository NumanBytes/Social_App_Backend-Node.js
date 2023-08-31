import userModel from "../model/user";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const AuthController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      const checkPassword = await bcrypt.compare(hashedPassword, user.password);
      console.log(checkPassword, "CheckedPassword");
      if (checkPassword) {
        const newUser = {
          email: user.email,
          name: user.name,
          id: user.id,
          password: hashedPassword,
        };
        await newUser.save();
      
      // Generate a JWT TOken
      const token = jwt.sign(newUser, process.env.generatedSecretKey, {
        algorithm: "HS256",
        expression: "50m",
      });
    console.log(token);
    loginEmail();
    return res.status(200).json({message: "User logged in successfuly",newUser, token});
    }
  }
  catch (error) {
      res
        .status(400)
        .json({ message: "User creation failed", error: error.message });
    }
  },
};
export default AuthController;