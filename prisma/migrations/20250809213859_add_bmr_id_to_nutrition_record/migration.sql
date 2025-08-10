-- DropForeignKey
ALTER TABLE "public"."BmrCalculation" DROP CONSTRAINT "BmrCalculation_userId_fkey";

-- AlterTable
ALTER TABLE "public"."NutritionRecord" ADD COLUMN     "bmrId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."BmrCalculation" ADD CONSTRAINT "BmrCalculation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
