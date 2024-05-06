import express from "express";

import { verifyToken } from "./../middleware/verifyToken.js";


const router = express.Router();

// router.get("/", getUsers);
// router.put("/:id", verifyToken, updateUser);
// router.delete("/:id", verifyToken, deleteUser);
// router.post("/save", verifyToken, savePost);
// router.get("/profilePosts", verifyToken, profilePosts);

export default router;
