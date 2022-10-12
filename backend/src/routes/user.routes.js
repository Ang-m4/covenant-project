import { Router } from "express";
import { methods as userController } from "../controllers/user.controller";

const router = Router();

router.get("/list", userController.getUsers);
router.post("/add", userController.createUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

export default router;