import userModel from "../model/user.js";
import bcrypt from "bcrypt";

const userController = {
  createUser: async (req, res) => {
    try {
      const body = req.body;
      // check if a user with the same email already exitst
      // const existingUser = await userModel.findOne({ email });

      // if(existingUser) {
      //   return res.status(400).json({ message: "Email already registered" });
      // }
      // Hash the password using bcrypt
      const saltRounds = 10;
      const password = await bcrypt.hash(body.password, saltRounds);
      console.log(password, body.password, "Password");
      const newUser = await userModel.create({
        name: body.name,
        email: body.email,
        password: password,
        createdAt: new Date(),
      });

      return res.status(201).json({ message: "User created" }, newUser);
    } catch (error) {
      res
        .status(400)
        .json({ message: "User creation failed", error: error.message });
    }
  },

  gettAllUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await userModel.find({ username, email });
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "User can't get the users", error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "User not read", error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.name = body.name;
      user.email = body.email;

      await user.save();
      return res.json({ message: "User Updated", user });
    } catch (error) {
      console.error("Error updating user:", error);
      res
        .status(500)
        .json({ message: "User updation failed", error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not deleted" });
      }
      res.status(200).json(deletedUser);
    } catch (error) {
      res
        .status(500)
        .json({ message: "User deletion failed", error: error.message });
    }
  },

  // verifyEmail: async (req, res) => {
  //   const generateOTP = (length = 4) => {
  //     let otp = "";
  //     for (let i = 0; i < length; i++) {
  //       otp += Math.floor(Math.random() * 10);
  //     }
  //     return otp;
  //   };
  //   const {email, otp}  = req.body;
  //   const VerifiedUser = await validateUserSignUp(email, otp);
  //   res.send(VerifiedUser);

  //   if (VerifiedUser && VerifiedUser.otp !== otp) {
  //     return [false, 'Invalid OTP'];
  //   }
  // },
};

export default userController;
