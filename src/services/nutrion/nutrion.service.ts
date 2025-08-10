import prisma from '../../prisma';
import { calculateBMR, calculateMacrosFromTEE, calculateTEE } from '../../utilities/formula';


export async function createBmrAndNutritionForUser(userId: string, params: {
  gender: 'MALE'|'FEMALE',
  weight: number,
  height: number,
  age: number,
  activityLevel: string,
  stressLevelFactor?: number
}) {
  // run in transaction (so either all saved or none)
  return prisma.$transaction(async (tx) => {
    const bmr = calculateBMR(params.gender, params.weight, params.height, params.age);
    const tee = calculateTEE(bmr, params.activityLevel as any, params.stressLevelFactor ?? 1);
    const tea = tee - bmr;
    const macros = calculateMacrosFromTEE(tee);

    const bmrCalc = await tx.bmrCalculation.create({
      data: { userId, bmr, tee, tea },
    });

    const nutritionRecord = await tx.nutritionRecord.create({
      data: {
        userId,
        bmrId: bmrCalc.id,
        energyTarget: tee,
        proteinTarget: macros.proteinG,
        carbTarget: macros.carbG,
        fatTarget: macros.fatG,
      },
    });

    return { bmrCalc, nutritionRecord };
  });
}