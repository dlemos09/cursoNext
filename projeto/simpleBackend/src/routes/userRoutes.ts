import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

export const setUserRoutes = () => {
  router.post("/users", userController.createUser);
  router.get("/users/:id", userController.getUser);
  router.put("/users/:id", userController.updateUser);
  router.delete("/users/:id", userController.deleteUser);
  router.get("/users", userController.getAllUsers);

  return router;
};
