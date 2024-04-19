"use client"

// Components
import React, { useState, useEffect } from 'react';
import useStore from '@/lib/store';

// Classes and Interfaces
import { Class } from '../types';

// Utility Functions
import { randomize } from '@/lib/utils';

interface RaceSelectorProps {
    selectedClass: Class | null;  // Explicitly type selectedClass
}

export default function RaceSelector( {selectedClass}: RaceSelectorProps ) {
    

    const { races, selectedRace, setSelectedRace, fetchRaces } = useStore();


    useEffect(() => {
        // Fetch the data asynchronously and update the state
        fetchRaces();
        
    }, [fetchRaces]);

    useEffect( () => {
        if (selectedClass && races.length > 0) {
            setSelectedRace(randomize(races));
        }
    }, [selectedClass, races]);

    return (
        <div>
            {selectedRace ? (
                <div>
                    <h3>Race Selected:</h3>
                    <p>{selectedRace.name}</p>
                    <p>ASI Description: {selectedRace.asi_desc}</p>
                </div>
            ) : (
                <p>No race selected.</p>
            )}
        </div>
    );
}
