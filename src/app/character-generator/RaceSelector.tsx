"use client"

// Components
import React, { useState, useEffect } from 'react';
import useStore from '@/lib/store';

// Utility Functions
import { randomize, raceASIParser } from '@/lib/utils';

export default function RaceSelector() {
    const { races, selectedRace, setSelectedRace, fetchRaces, selectedClass } = useStore(); // Access selectedClass directly from the store

    useEffect(() => {
        // Fetch the data asynchronously and update the state
        fetchRaces();
    }, [fetchRaces]);

    useEffect(() => {
        // Automatically set a random race when selectedClass changes and races are available
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
