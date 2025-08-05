import { Request, Response } from "express";
import { Prisma } from "../../../prisma/generated/client";
import prisma from "../../prisma";


export const getUserService = async (req: Request, res: Response) => {
    const search = req.query.search as string;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

  const filter: Prisma.UserWhereInput = {
      role: { not: "ADMIN" }, // Exclude ADMIN users
      isEmailVerified: true, // Only include verified users
    };

    if (search) {
      filter.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const countUser = await prisma.user.count({ where: filter });
    const total_page = Math.ceil(countUser / limit);

    const users = await prisma.user.findMany({
      where: filter,
      orderBy: { id: "asc" },
      take: limit,
      skip: limit * (page - 1),
    });

    return { total_page, page, limit, users };
}