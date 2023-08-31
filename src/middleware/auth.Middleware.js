import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  try {
    let token = req.header.authorization;
    if (!token) {
      return res.status(401).json({ message: "Authorization required" });
    }
    token = token.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY, {});
    req.user = decodedValue;
    next();    
  } catch(error) {
    console.log(error.message);
    if(error.message === "jwt expired") {
        return res.status(401).json({ message: "JWT Expired"});
    }
  }
};

export default authenticateToken;
