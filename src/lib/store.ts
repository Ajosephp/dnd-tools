import { create } from 'zustand';
import { fetchDataFromOpen5e } from './open5eApi.server';

// Classes and Interfaces
import { Class, Race } from '../app/types';

interface StoreState {
    classes: Class[];
    races: Race[];
    selectedClass: Class | null;
    selectedRace: Race | null;
    setClasses: (classes: Class[]) => void;
    setSelectedClass: (selectedClass: Class | null) => void;
    setSelectedRace: (selectedRace: Race | null) => void;
    fetchClasses: () => Promise<void>;
    fetchRaces: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
    classes: [],
    races: [],
    selectedClass: null,
    selectedRace: null,
    
    setClasses: (classes) => set({ classes }),
    setSelectedClass: (selectedClass) => set({ selectedClass }),
    setSelectedRace: (selectedRace) => set({ selectedRace }),
  
    fetchClasses: async () => {
      const data = await fetchDataFromOpen5e('classes');
      set({ classes: data.results });
    },
  
    fetchRaces: async () => {
      const data = await fetchDataFromOpen5e('races');
      set({ races: data.results });
    },
  }));

export default useStore;
