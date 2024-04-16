import { fetchDataFromOpen5e } from '../character-generator/api/open5eApi';

interface Class {
  name: string;
  slug: string;
  desc: string;
  hit_dice: string;
  hp_at_1st_level: string;
  hp_at_higher_levels: string;
  prof_armor: string;
  prof_weapons: string;
  prof_tools: string;
  prof_saving_throws: string;
  prof_skills: string;
  equipment: string;
  table: string;
  spellcasting_ability: string;
  subtypes_name: string;
  archetypes?: string; 
}

interface AbilityScoreImprovement {
  attributes: string[];  // An array of attributes that are improved
  value: number;         // The improvement value
}

interface Race {
  name: string;
  slug: string;
  asi_desc: string;
  asi?: AbilityScoreImprovement;
}

interface APIResponse {
    count: number;
    results: Class[];
}

export default async function CharacterGeneratorPage() {
    const classesResponse = await fetchDataFromOpen5e("classes"); // For fetching Classes
    const racesResponse = await fetchDataFromOpen5e("races"); // For fetching Races

    return (
        <div>
            <h1>Character Generator</h1>
            <br></br>

            <h2>Classes</h2>
            <ul>
                {classesResponse.results.map((item: Class) => (
                    <li key={item.slug}>
                        Class: {item.name} <br />
                        Health at 1st Level: {item.hp_at_1st_level} <br />
                        Weapon Proficiency: {item.prof_weapons} <br />
                        Armor Proficiency: {item.prof_armor} <br />
                        <br />
                    </li>
                ))}
            </ul>
            <h2>Races</h2>
            <ul>
                {racesResponse.results.map((race: Race) => (
                    <li key={race.slug}>
                        Race: {race.name} <br />
                        
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
