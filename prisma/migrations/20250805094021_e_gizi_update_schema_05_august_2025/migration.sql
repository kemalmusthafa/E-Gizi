-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'NUTRITIONIST', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "public"."Counseling" (
    "id" SERIAL NOT NULL,
    "patientId" TEXT NOT NULL,
    "nutritionistId" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Counseling_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Counseling" ADD CONSTRAINT "Counseling_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Counseling" ADD CONSTRAINT "Counseling_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
