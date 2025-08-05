import { Request, Response } from "express";
import prisma from "../../prisma";

export const getUserIdService = async (req: Request, res: Response) => {
    const userId = req.params.id;
    
    if (!userId) {
        throw new Error("User ID is required");
    }
    
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    
    if (!user) {
        res.status(404).send({ message: `User with ID ${userId} not found` });
        return;
    }
    
    res.status(200).send({
        message: `User with ID ${userId} retrieved successfully`,
        user,
    });
}