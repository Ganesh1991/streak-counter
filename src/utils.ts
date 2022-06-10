export function formattedDate(date: Date): string {
  return date.toLocaleDateString("en-US");
}

export function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): "increment" | "reset" | "none" {
  const difference =
    currentDate.getDate() - parseInt(lastLoginDate.split("/")[1]);
  if (difference === 1) {
    return "increment";
  }
  if (difference === 0) return "none";
  return "reset";
}

export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };

  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}
