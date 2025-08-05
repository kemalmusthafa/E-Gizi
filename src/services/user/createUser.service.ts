import { Request, Response } from "express";
import prisma from "../../prisma";

export const createUserService = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required");
  }

  const newUser = await prisma.user.create({
    data: { name, email, password },
  });

  res.status(201).send({ message: "User created successfully", user: newUser });
  return newUser;
};
