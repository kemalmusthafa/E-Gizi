import { Request, Response } from "express";
import { getUserService } from "../services/user/getUser.service";
import { getUserIdService } from "../services/user/getUserId.service";
import { createUserService } from "../services/user/createUser.service";
import { editUserService } from "../services/user/editUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const result = await getUserService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getUserId(req: Request, res: Response) {
    try {
      const result = await getUserIdService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const result = await createUserService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const result = await editUserService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await deleteUserService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
