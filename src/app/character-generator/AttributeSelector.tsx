"use client"

import React, { useEffect } from 'react';
import useStore from "../../lib/store"

export default function AttributesComponent() {
    const attributes = useStore(state => state.attributes);
    const generateAttributes = useStore(state => state.generateAttributes);
    const selectedClass = useStore(state => state.selectedClass);

    useEffect(() => {
        if (selectedClass) {
            generateAttributes(); // No need to pass attributes, generateAttributes will handle generating them
        }
    }, [selectedClass, generateAttributes]);

    return (
        <div>
            <h1>Character Attributes:</h1>
            <ul>
                {attributes.map((attr, index) => (
                    <li key={index}>Attribute {index + 1}: {attr}</li>
                ))}
            </ul>
        </div>
    );
}