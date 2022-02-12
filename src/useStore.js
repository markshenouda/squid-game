import create from "zustand";

const useStore = create((set) => ({
  start: false,
  move: true,
  startGame: () => set((state) => ({ start: true })),
  reset: () => set((state) => ({ start: false })),
}));

export default useStore;
