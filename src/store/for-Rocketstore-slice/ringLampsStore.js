import create from "zustand";

export const useRingLampsStore = create((set) => ({
  ringLampsState: {
    visiablevalue: true,
    isVisable: true,
  },
  closeLamps: () =>
    set({ ringLampsState: { visiablevalue: false, isVisable: false } }),
  openLamps: () =>
    set({ ringLampsState: { visiablevalue: true, isVisable: true } }),
}));
