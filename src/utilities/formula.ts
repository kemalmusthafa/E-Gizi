export const calculateBMR = (gender: 'MALE'|'FEMALE', weightKg: number, heightCm: number, age: number) => {
  if (gender === 'MALE') {
    return 66 + (13.7 * weightKg) + (5 * heightCm) - (6.8 * age);
  } else {
    return 655 + (9.6 * weightKg) + (1.8 * heightCm) - (4.7 * age);
  }
};

export const activityMultiplier = {
  SEDENTARY: 1.2,
  LIGHT: 1.375,
  MODERATE: 1.55,
  HEAVY: 1.725,
  VERY_HEAVY: 1.9,
};

export const calculateTEE = (bmr: number, activityLevel: keyof typeof activityMultiplier, stressFactor = 1) => {
  const mult = activityMultiplier[activityLevel] ?? 1.2;
  return bmr * mult * stressFactor;
};

export const calculateMacrosFromTEE = (tee: number) => {
  const proteinG = (0.15 * tee) / 4;
  const carbG = (0.6 * tee) / 4;
  const fatG = (0.25 * tee) / 9;
  return { proteinG, carbG, fatG };
};