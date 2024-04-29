import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

// USER REGISTER

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // ⁡⁣⁢𝗛͟𝗔͟𝗦͟𝗛 𝗧͟𝗛͟𝗘 𝗣͟𝗔͟𝗦͟𝗦͟𝗪͟𝗢͟𝗥͟𝗗

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // 𝗖͟𝗥͟𝗘͟𝗔͟𝗧͟𝗘 ͟𝗔 𝗡͟𝗘͟𝗪 𝗨͟𝗦͟𝗘͟𝗥 𝗔͟𝗡͟𝗗 𝗦͟𝗔͟𝗩͟𝗘 𝗧͟𝗢 𝗗͟𝗕

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

// USER LOGIN

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 𝗖͟𝗛͟𝗘͟𝗖͟𝗞 𝗜͟𝗙 𝗧͟𝗛͟𝗘 𝗨͟𝗦͟𝗘͟𝗥 𝗘͟𝗫͟𝗜͟𝗧͟𝗦

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    // 𝗖͟𝗛͟𝗘͟𝗖͟𝗞 𝗜͟𝗙 𝗧͟𝗛͟𝗘 𝗣͟𝗔͟𝗦͟𝗦͟𝗪͟𝗢͟𝗥͟𝗗 𝗜͟𝗦 𝗖͟𝗢͟𝗥͟𝗥͟𝗘͟𝗖͟𝗧

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Password!" });

    // 𝗚͟𝗘͟𝗡͟𝗘͟𝗥͟𝗔͟𝗧͟𝗘 ͟𝗔 𝗖͟𝗢͟𝗢͟𝗞͟𝗜͟𝗘 𝗧͟𝗢͟𝗞͟𝗘͟𝗡 𝗔͟𝗡͟𝗗 𝗦͟𝗘͟𝗡͟𝗗 𝗜͟𝗧 𝗧͟𝗢 𝗧͟𝗛͟𝗘 𝗨͟𝗦͟𝗘͟𝗥

    const age = 1000 * 60 * 60 * 24 * 7; //= This Age is defind the cookie session time...

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure:true  (= It will be true when it is in production mode........)
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(object);
    res.status(500).json({ message: "Failed to login! " });
  }
};

// USER LOGOUT

export const logout = (req, res) => {
  res.clearCookie("test2").status(200).json({ message: "Logout Successfull." });
};