"use client"

// Components
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import React, { useEffect } from 'react';
import useStore from '@/lib/store';

import RaceSelector from './RaceSelector';


export default function ClassSelector() {

    const { classes, selectedClass, setSelectedClass, fetchClasses } = useStore();

    useEffect(() => {
        // Fetch the data asynchronously and update the state
        fetchClasses();
        
    }, [fetchClasses]);

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
                    <p className='mt-2'>Health at First Level: {selectedClass.hp_at_1st_level}</p>
                </div>
            ) : (
                <p className='mt-2'>No class selected or class has no description.</p> // Debug no selection
            )}
            
            <RaceSelector selectedClass={selectedClass} />
        </div>
    );
};