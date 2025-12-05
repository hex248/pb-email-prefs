export enum EmailPreference {
  Newsletter = 1 << 0, // 1
  ProductUpdates = 1 << 1, // 2
  Marketing = 1 << 2, // 4
  Events = 1 << 3, // 8
}

export const addPreference = (
  prefs: number,
  flag: EmailPreference
): number => prefs | flag;

export const removePreference = (
  prefs: number,
  flag: EmailPreference
): number => prefs & ~flag;

export const hasPreference = (
  prefs: number,
  flag: EmailPreference
): boolean => (prefs & flag) === flag;

export const preferencesAsMap = (
  prefs: number
): Record<keyof typeof EmailPreference, boolean> => {
  const map = {} as Record<keyof typeof EmailPreference, boolean>;
  (Object.keys(EmailPreference) as Array<keyof typeof EmailPreference>).forEach(
    (key) => {
      const val = EmailPreference[key];
      if (typeof val === "number") {
        map[key] = hasPreference(prefs, val);
      }
    }
  );
  return map;
};
