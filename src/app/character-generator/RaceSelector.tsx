"use client"

// Components
import React, { useState, useEffect } from 'react';

// Classes and Interfaces
import { Class, Race } from '../types';

// Utility Functions
import { randomize } from '@/lib/utils';

// Api Call
import { fetchDataFromOpen5e } from '../../lib/open5eApi.server';

interface APIResponse {
    count: number;
    results: Race[];
}
interface RaceSelectorProps {
    selectedClass: Class | null;  // Explicitly type selectedClass
}

export default function RaceSelector( {selectedClass}: RaceSelectorProps ) {
    const [races, setRaces] = useState<Race[]>([]);
    const [selectedRace, setSelectedRace] = useState<Race | null>(null);

    useEffect( () => {
        fetchDataFromOpen5e('races').then(data => {
            setRaces(data.results);
        }).catch(error => {
            console.error('Failed to fetch races from RaceSelector.tsx:', error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

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
