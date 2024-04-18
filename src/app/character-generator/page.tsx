// Utility Functions
import { randomize } from '@/lib/utils';

import { fetchDataFromOpen5e } from '../../lib/open5eApi.server'

import ClassSelector from './ClassSelector'; // This is the client component


export default function CharacterGeneratorPage() {
    
    // const classes = fetchDataFromOpen5e('classes');

    // Dropdown for selecting Classes,
    // Call randomize Once the user selects the Class they want.

    return (
        <div>
            <h1>Character Generator</h1>
            <h2>Classes</h2>
            <ClassSelector />
        </div>
    );
}
