import { Request, Response } from "express";
import prisma from "../../prisma";

export const deleteUserService = async (req: Request, res: Response) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).send({ message: "User ID is required" });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    return res.status(200).send({ message: `User with ID ${userId} deleted successfully`, user: deletedUser });
  } catch (error: any) {
    if (error.code === "P2025") {
      // Prisma error for record not found
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(500).send({ message: "Internal server error", error });
  }
};