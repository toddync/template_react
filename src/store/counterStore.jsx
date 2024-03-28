import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increment: (x) => set(({ count }) => ({ count: count + (x | 1) })),
}));

export default useCounterStore;
