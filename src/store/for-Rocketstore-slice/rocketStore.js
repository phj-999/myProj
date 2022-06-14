import create from "zustand";

export const useRocket = create((set) => ({
  rocketState: { active: true, isactive: true },
  move: () => set({ rocketState: { active: true, isactive: true } }),
  back: () => set({ rocketState: { active: false, isactive: false } }),
 }))