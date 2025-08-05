import { Request, Response } from "express";
import prisma from "../../prisma";

export const deleteUserService = async (req: Request, res: Response) => {
  const userId = req.params.id;

  await prisma.user.delete({
    where: { id: userId },
  });

  if (!userId) {
    throw new Error("User ID is required");
  }
  res
    .status(200)
    .send({ message: `User with ID ${userId} deleted successfully` });
};
