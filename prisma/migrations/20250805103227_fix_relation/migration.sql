/*
  Warnings:

  - The values [NORMAL,TRIMESTER_1,TRIMESTER_2,TRIMESTER_3,LACTATING] on the enum `PhysiologicalStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [NONE,LOW,HEAVY,VERY_HEAVY] on the enum `StressLevel` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `bmrId` on the `NutritionRecord` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Counseling` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DailyMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeIngredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ForbiddenFood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MenuRecipes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[formulaResultId]` on the table `NutritionRecord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Disease` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `energyTarget` to the `NutritionRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PhysiologicalStatus_new" AS ENUM ('NONE', 'PREGNANT_TRIMESTER_1', 'PREGNANT_TRIMESTER_2', 'PREGNANT_TRIMESTER_3', 'LACTATING_0_6_MONTHS', 'LACTATING_7_12_MONTHS');
ALTER TABLE "public"."User" ALTER COLUMN "physiologicalStatus" TYPE "public"."PhysiologicalStatus_new" USING ("physiologicalStatus"::text::"public"."PhysiologicalStatus_new");
ALTER TYPE "public"."PhysiologicalStatus" RENAME TO "PhysiologicalStatus_old";
ALTER TYPE "public"."PhysiologicalStatus_new" RENAME TO "PhysiologicalStatus";
DROP TYPE "public"."PhysiologicalStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."StressLevel_new" AS ENUM ('NORMAL', 'MODERATE', 'HIGH');
ALTER TABLE "public"."User" ALTER COLUMN "stressLevel" TYPE "public"."StressLevel_new" USING ("stressLevel"::text::"public"."StressLevel_new");
ALTER TYPE "public"."StressLevel" RENAME TO "StressLevel_old";
ALTER TYPE "public"."StressLevel_new" RENAME TO "StressLevel";
DROP TYPE "public"."StressLevel_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Counseling" DROP CONSTRAINT "Counseling_nutritionistId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Counseling" DROP CONSTRAINT "Counseling_patientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DailyMenu" DROP CONSTRAINT "DailyMenu_recordId_fkey";

-- DropForeignKey
ALTER TABLE "public"."NutritionRecord" DROP CONSTRAINT "NutritionRecord_bmrId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_foodId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ForbiddenFood" DROP CONSTRAINT "_ForbiddenFood_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ForbiddenFood" DROP CONSTRAINT "_ForbiddenFood_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_MenuRecipes" DROP CONSTRAINT "_MenuRecipes_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_MenuRecipes" DROP CONSTRAINT "_MenuRecipes_B_fkey";

-- DropIndex
DROP INDEX "public"."BmrCalculation_userId_key";

-- DropIndex
DROP INDEX "public"."NutritionRecord_bmrId_key";

-- DropIndex
DROP INDEX "public"."NutritionRecord_userId_key";

-- AlterTable
ALTER TABLE "public"."Disease" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."NutritionRecord" DROP COLUMN "bmrId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "energyTarget" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "formulaResultId" INTEGER;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "age",
DROP COLUMN "role",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."UserDisease" ADD COLUMN     "notes" TEXT;

-- DropTable
DROP TABLE "public"."Counseling";

-- DropTable
DROP TABLE "public"."DailyMenu";

-- DropTable
DROP TABLE "public"."Food";

-- DropTable
DROP TABLE "public"."Recipe";

-- DropTable
DROP TABLE "public"."RecipeIngredient";

-- DropTable
DROP TABLE "public"."_ForbiddenFood";

-- DropTable
DROP TABLE "public"."_MenuRecipes";

-- DropEnum
DROP TYPE "public"."Gender";

-- DropEnum
DROP TYPE "public"."Role";

-- CreateTable
CREATE TABLE "public"."NutritionFormulaResult" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "bmr" DOUBLE PRECISION NOT NULL,
    "tee" DOUBLE PRECISION NOT NULL,
    "tea" DOUBLE PRECISION NOT NULL,
    "stressFactor" DOUBLE PRECISION NOT NULL,
    "activityFactor" DOUBLE PRECISION NOT NULL,
    "totalEnergyRequirement" DOUBLE PRECISION NOT NULL,
    "proteinRequirement" DOUBLE PRECISION NOT NULL,
    "carbRequirement" DOUBLE PRECISION NOT NULL,
    "fatRequirement" DOUBLE PRECISION NOT NULL,
    "fluidRequirement" DOUBLE PRECISION,
    "condition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NutritionFormulaResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NutritionRecord_formulaResultId_key" ON "public"."NutritionRecord"("formulaResultId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."NutritionRecord" ADD CONSTRAINT "NutritionRecord_formulaResultId_fkey" FOREIGN KEY ("formulaResultId") REFERENCES "public"."NutritionFormulaResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NutritionFormulaResult" ADD CONSTRAINT "NutritionFormulaResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
