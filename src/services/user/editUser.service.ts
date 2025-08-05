import { Request, Response } from "express";
import prisma from "../../prisma";

export const editUserService = async (req: Request, res: Response) => {
  const userId = req.params.id;

  if (!userId) {
    throw new Error("User ID is required");
  }
  const updateUserData = await prisma.user.update({
    data: req.body,
    where: { id: userId },
  });

  res.status(200).send({
    message: `User with ID ${userId} updated successfully`,
    user: updateUserData,
  });
};
