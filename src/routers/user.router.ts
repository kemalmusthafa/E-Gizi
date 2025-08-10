import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      "/",
      this.userController.getUsers.bind(this.userController)
    );
    this.router.get(
      "/:id",
      this.userController.getUserId.bind(this.userController)
    );
    this.router.post(
      "/",
      this.userController.createUser.bind(this.userController)
    );
    this.router.put(
      "/:id",
      this.userController.editUser.bind(this.userController)
    );
    //optional route to handle deletion without an ID
    this.router.put("/", (_req, res) => {
      return res.status(400).send({ message: "User ID is required" });
    });
    this.router.delete(
      "/:id",
      this.userController.deleteUser.bind(this.userController)
    );
    //optional route to handle deletion without an ID
    this.router.delete("/", (_req, res) => {
      return res.status(400).send({ message: "User ID is required" });
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
