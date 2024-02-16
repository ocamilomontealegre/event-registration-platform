// Importing the create function from Zustand
import { create } from "zustand";

// Defining the custom store hook with Zustand
export const useStore = create((set) => ({
  // Initial state with eventData set to an empty object
  eventData: {},
  // Setter function to update eventData
  setEventData: (newData) => set(state => ({ eventData: newData })) 
}));