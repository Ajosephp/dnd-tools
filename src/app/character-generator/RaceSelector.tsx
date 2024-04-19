"use client"

// Components
import React, { useState, useEffect } from 'react';
import useStore from '@/lib/store';

// Classes and Interfaces
import { Class } from '../types';

// Utility Functions
import { randomize, raceASIParser } from '@/lib/utils';

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
                    <p>Race Selected: {selectedRace.name}</p>
                    {selectedRace.asi_desc && raceASIParser(selectedRace.asi_desc) ? (
                        <p>ASI Description: {raceASIParser(selectedRace.asi_desc)}</p>
                            ) : null}
                </div>
            ) : (
                <p>No race selected.</p>
            )}
        </div>
    );
}
