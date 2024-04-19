"use client"

// Components
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import React, { useState, useEffect } from 'react';

// Classes and Interfaces
import { Class } from '../types';

// Api Call
import { fetchDataFromOpen5e } from '../../lib/open5eApi.server';
import RaceSelector from './RaceSelector';

interface APIResponse {
    count: number;
    results: Class[];
}

export default function ClassSelector() {
    const [classes, setClasses] = useState<Class[]>([]); // State to hold the classes
    const [selectedClass, setSelectedClass] = useState<Class | null>(null);

    useEffect(() => {
        // Fetch the data asynchronously and update the state
        fetchDataFromOpen5e('classes').then(data => {
            setClasses(data.results);
        }).catch(error => {
            console.error('Failed to fetch classes from ClassSelector.tsx:', error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        console.log("Current selected class:", selectedClass); // Debug current selected class state
    }, [selectedClass]); // Add selectedClass as a dependency to log when it changes
    

    const handleValueChange = (slug: string) => {

        /**********
         * Debug Statement Below
         **********/
        console.log("Selected slug:", slug); // Debug selected slug

        const foundClass = classes.find(c => c.slug === slug);

        setSelectedClass(foundClass || null);
    };

    return (
        <div>
            <Select onValueChange={handleValueChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick A Class" />
                </SelectTrigger>
                <SelectContent>
                {classes.map((item) => {

                    return (
                        <SelectItem 
                            key={item.slug}
                            value={item.slug}>
                                {item.name}
                        </SelectItem>                    
                    );
                })}
                </SelectContent>
            </Select>
            {selectedClass ? (
                <div className="description">
                    <h3 className='mt-2'>Health at First Level:</h3>
                    <p className='mt-2'>{selectedClass.hp_at_1st_level}</p>
                </div>
            ) : (
                <p className='mt-2'>No class selected or class has no description.</p> // Debug no selection
            )}
            
            <RaceSelector selectedClass={selectedClass} />
        </div>
    );
};