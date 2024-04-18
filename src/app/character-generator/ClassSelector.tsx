"use client"

// Components
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import React, { useState, useEffect } from 'react';

// Classes and Interfaces
import { Class, Race } from '../types';

// Api Call
import { fetchDataFromOpen5e } from '../../lib/open5eApi.server';

interface APIResponse {
    count: number;
    results: Class[];
}

export default function ClassSelector() {
    const [classes, setClasses] = useState<Class[]>([]); // State to hold the classes

    useEffect(() => {
        // Fetch the data asynchronously and update the state
        fetchDataFromOpen5e('classes').then(data => {
            console.log(data);
            setClasses(data.results);
        }).catch(error => {
            console.error('Failed to fetch classes:', error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick A Class" />
                </SelectTrigger>
                <SelectContent>
                    {classes.map((item) => (
                        <SelectItem key={item.slug} value={item.slug}>{item.name}</SelectItem>                    
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};