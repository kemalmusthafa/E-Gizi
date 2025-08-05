-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "public"."ActivityLevel" AS ENUM ('SEDENTARY', 'LIGHT', 'MODERATE', 'HEAVY', 'VERY_HEAVY');

-- CreateEnum
CREATE TYPE "public"."StressLevel" AS ENUM ('NONE', 'LOW', 'MODERATE', 'HEAVY', 'VERY_HEAVY');

-- CreateEnum
CREATE TYPE "public"."PhysiologicalStatus" AS ENUM ('NORMAL', 'TRIMESTER_1', 'TRIMESTER_2', 'TRIMESTER_3', 'LACTATING');

-- CreateEnum
CREATE TYPE "public"."DietGoal" AS ENUM ('LOSE_WEIGHT', 'MAINTAIN', 'GAIN_WEIGHT');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "activityLevel" "public"."ActivityLevel" NOT NULL,
    "stressLevel" "public"."StressLevel" NOT NULL,
    "physiologicalStatus" "public"."PhysiologicalStatus" NOT NULL,
    "dietGoal" "public"."DietGoal" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BmrCalculation" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "bmr" DOUBLE PRECISION NOT NULL,
    "tee" DOUBLE PRECISION NOT NULL,
    "tea" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BmrCalculation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NutritionRecord" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "bmrId" INTEGER,
    "proteinTarget" DOUBLE PRECISION NOT NULL,
    "carbTarget" DOUBLE PRECISION NOT NULL,
    "fatTarget" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "NutritionRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DailyMenu" (
    "id" SERIAL NOT NULL,
    "recordId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbohydrate" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RecipeIngredient" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbohydrate" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "category" TEXT,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Disease" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserDisease" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "diseaseId" INTEGER NOT NULL,

    CONSTRAINT "UserDisease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_MenuRecipes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MenuRecipes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ForbiddenFood" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ForbiddenFood_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "BmrCalculation_userId_key" ON "public"."BmrCalculation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NutritionRecord_userId_key" ON "public"."NutritionRecord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NutritionRecord_bmrId_key" ON "public"."NutritionRecord"("bmrId");

-- CreateIndex
CREATE UNIQUE INDEX "DailyMenu_recordId_key" ON "public"."DailyMenu"("recordId");

-- CreateIndex
CREATE INDEX "_MenuRecipes_B_index" ON "public"."_MenuRecipes"("B");

-- CreateIndex
CREATE INDEX "_ForbiddenFood_B_index" ON "public"."_ForbiddenFood"("B");

-- AddForeignKey
ALTER TABLE "public"."BmrCalculation" ADD CONSTRAINT "BmrCalculation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NutritionRecord" ADD CONSTRAINT "NutritionRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NutritionRecord" ADD CONSTRAINT "NutritionRecord_bmrId_fkey" FOREIGN KEY ("bmrId") REFERENCES "public"."BmrCalculation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyMenu" ADD CONSTRAINT "DailyMenu_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "public"."NutritionRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "public"."Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "public"."Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserDisease" ADD CONSTRAINT "UserDisease_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserDisease" ADD CONSTRAINT "UserDisease_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "public"."Disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MenuRecipes" ADD CONSTRAINT "_MenuRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."DailyMenu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MenuRecipes" ADD CONSTRAINT "_MenuRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ForbiddenFood" ADD CONSTRAINT "_ForbiddenFood_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ForbiddenFood" ADD CONSTRAINT "_ForbiddenFood_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
