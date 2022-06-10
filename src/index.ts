import {
  formattedDate,
  shouldIncrementOrResetStreakCount,
  Streak,
} from "./utils";
const KEY = "streak";

export default function streakCounter(storage: Storage, date: Date): Streak {
  const streakInLocalStorage = storage.getItem(KEY);
  if (streakInLocalStorage) {
    try {
      const streak = JSON.parse(streakInLocalStorage);
      const state = shouldIncrementOrResetStreakCount(
        date,
        streak.lastLoginDate
      );
      const SHOULD_INCREMENT = state === "increment";
      const SHOULD_RESET = state === "reset";
      if (SHOULD_INCREMENT) {
        const updatedStreak = {
          ...streak,
          currentCount: streak.currentCount + 1,
          lastLoginDate: formattedDate(date),
        };
        storage.setItem(KEY, JSON.stringify(updatedStreak));
        return updatedStreak;
      }
      if (SHOULD_RESET) {
        const streak = {
          currentCount: 1,
          startDate: formattedDate(date),
          lastLoginDate: formattedDate(date),
        };
        storage.setItem(KEY, JSON.stringify(streak));
        return streak;
      }
      return streak;
    } catch (error) {
      console.error("Failed to parse streak from localStorage");
    }
  }
  const streak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };
  storage.setItem(KEY, JSON.stringify(streak));
  return streak;
}
