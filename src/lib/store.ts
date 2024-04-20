import { create } from 'zustand';
import { fetchDataFromOpen5e } from './open5eApi.server';

// Classes and Interfaces
import { Class, Race } from '../app/types';

interface StoreState {
    // CLASSES
    classes: Class[];
    selectedClass: Class | null;
    setClasses: (classes: Class[]) => void;
    setSelectedClass: (selectedClass: Class | null) => void;
    fetchClasses: () => Promise<void>;

    // RACES
    races: Race[];
    selectedRace: Race | null;
    setSelectedRace: (selectedRace: Race | null) => void;
    fetchRaces: () => Promise<void>;
    
    // ATTRIBUTES
    attributes: number[];
    setAttributes: (newAttributes: number[] | undefined) => void;
    generateAttributes: () => void;

    // TITLE
    title: string;
    setTitle: (title : string | undefined) => void;
}

const useStore = create<StoreState>((set) => ({
    classes: [],
    selectedClass: null,
    setClasses: (classes) => set({ classes }),
    setSelectedClass: (selectedClass) => set({ selectedClass }),
    fetchClasses: async () => {
        try {
            const data = await fetchDataFromOpen5e('classes');
            set({ classes: data.results });
        } catch (error) {
            console.error('Failed to fetch classes in Zustand Store', error);
        }
      },

    races: [],
    selectedRace: null,
    setSelectedRace: (selectedRace) => set({ selectedRace }),
    fetchRaces: async () => {
        try {
            const data = await fetchDataFromOpen5e('races');
            set({ races: data.results });
        } catch (error) {
            console.error('Failed to fetch races in Zustand Store', error);
        }
      },

    attributes: [],
    setAttributes: (newAttributes) => set({ attributes: newAttributes }),
    generateAttributes: () => {
        const { generateAllAttributes } = require('./utils'); // Delayed import to avoid circular dependencies
        const newAttributes = generateAllAttributes();
        set({ attributes: newAttributes });
    },

    title: 'Default Title',
    setTitle: (title) => set({ title }),
    
  }));

export default useStore;
