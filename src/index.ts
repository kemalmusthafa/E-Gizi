import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { UserRouter } from "./routers/user.router";
// router lain seperti AuthRouter, UserRouter, dsb

dotenv.config();

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    methods: "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
  })
);

app.get("/api", (_req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

app.use("/api/public", express.static(path.join(__dirname, "../public")));

// Inisialisasi semua router
const userRouter = new UserRouter();
// lainnya...
// const authRouter = new AuthRouter(); dst...

// Pasang semua router
app.use("/api/users", userRouter.getRouter());
// lainnya...
// app.use("/api/auth", authRouter.getRouter()); dst...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});

export default app;
