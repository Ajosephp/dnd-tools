"use client"

import React, { useEffect } from 'react';
import useStore from "../../lib/store"
import Title from '@/components/ui/title';

export default function AttributesComponent() {
    const attributes = useStore(state => state.attributes);
    const generateAttributes = useStore(state => state.generateAttributes);
    const selectedClass = useStore(state => state.selectedClass);

    const attributeTitles = ["Strength", "Dexterity", "Constitution", "Intelligence", "Widsom", "Charisma"];

    useEffect(() => {
        if (selectedClass) {
            generateAttributes(); // No need to pass attributes, generateAttributes will handle generating them
        }
    }, [selectedClass, generateAttributes]);

    return (
        <>
            <Title text="Character Attributes" level={2} size="text-xl" className="mt-4" alignment='text-center' />
            <ul>
                {attributes.map((attr, index) => (
                    <li key={index}>
                        {attributeTitles[index]}: {attr}
                    </li>
                ))}
            </ul>
        </>
    );
}