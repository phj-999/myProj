import create from "zustand";

export const useOrbit = create((set) => ({
  enabled: true,
  orbitmoving: () => set({ enabled: false }),
  orbitmoveout: () => set({ enabled: true }),
}));
