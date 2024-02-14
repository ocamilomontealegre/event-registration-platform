import { create } from "zustand";

export const useStore = create((set) => ({
  eventData: {},
  setEventData: (newData) => set(state => ({ eventData: newData })) 
}));