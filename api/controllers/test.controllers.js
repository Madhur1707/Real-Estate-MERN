import jwt from "jsonwebtoken";

// 𝗧͟𝗘͟𝗦͟𝗧 𝗥͟𝗢͟𝗨͟𝗧͟𝗘 𝗨͟𝗦͟𝗘͟𝗥 𝗔͟𝗨͟𝗧͟𝗛͟𝗘͟𝗡͟𝗧͟𝗜͟𝗖͟𝗔͟𝗧͟𝗜͟𝗢͟𝗡 𝗜͟𝗙 𝗛͟𝗘 𝗛͟𝗔͟𝗦 ͟𝗔 𝗩͟𝗔͟𝗟͟𝗜͟𝗗 𝗧͟𝗢͟𝗞͟𝗘͟𝗡

export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You are Authenticated.." });
};

// 𝗧͟𝗘͟𝗦͟𝗧 𝗥͟𝗢͟𝗨͟𝗧͟𝗘 𝗔͟𝗗͟𝗠͟𝗜͟𝗡 𝗔͟𝗨͟𝗧͟𝗛͟𝗘͟𝗡͟𝗧͟𝗜͟𝗖͟𝗔͟𝗧͟𝗜͟𝗢͟𝗡 𝗜͟𝗙 𝗛͟𝗘  ͟𝗜͟𝗦 𝗔͟𝗡 𝗔͟𝗗͟𝗠͟𝗜͟𝗡 .....

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not valid." });
    if (!payload.isAdmin) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    res.status(200).json({ message: "You are Authenticated.." });
  });
};