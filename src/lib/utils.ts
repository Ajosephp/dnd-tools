import { AbilityScoreImprovement, Race } from "@/app/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/*
--- Randomize Function ---
Potential use cases:
Pass in a list of Races and return one of the options.
 */
export function randomize<T>(items : T[]): T {
  return items[(Math.floor(Math.random() * items.length))];
}

/*
--- RaceASIParser Function ---
Potential use cases:
Parse the known text and retrieve the description after the ***
*/
export function raceASIParser(input: string | undefined): string {
  if (!input) {
      console.log("Input is undefined or empty inside raceASIParser.");
      return "No description available."; // Handle undefined or empty input
  }
  
  // Define opening and corresponding closing delimiters
  const delimiters = [
      { open: "***", close: "***" },
      { open: "**_", close: "_**" }
  ];

  // Find the first delimiter pair that occurs in the input
  let delimiter = delimiters.find(del => input.includes(del.open));

  if (!delimiter) {
      console.log("No delimiter found inside raceASIParser.. Input: ", input);
      return "Description format error."; // No delimiters found, so the format is unexpected
  }

  // Split the input based on the opening delimiter
  let start = input.indexOf(delimiter.open) + delimiter.open.length;
  let end = input.indexOf(delimiter.close, start);

  if (start < end) {
      // Extract the text after the first delimiter and before the second
      let description = input.substring(end + delimiter.close.length).trim();
      return description;
  }

  console.log("Not enough parts after split or improper delimiter usage inside raceASIParser.. Input:", input);
  return "Description format error.";
}


/*
--- Dice Roll Functions ---
 */
export function rollD6(numOfD6 : number) {
  
  var abilityScoreArray = [];

  for (let i = 0; i < numOfD6; i++) {
    abilityScoreArray[i] = Math.floor(Math.random() * 6) + 1;
  }

  return abilityScoreArray;
}

export function generateAttributeNumber() {
    var diceRolls = rollD6(4);
    // Sort the array and remove the lowest die roll
    diceRolls.sort();
    diceRolls.shift(); // Removes the first element, which is the lowest due to sort
    // Sum the remaining dice rolls
    return diceRolls.reduce((a, b) => a + b, 0);
}

export function generateAllAttributes(selectedRace: Race) {
  let attributes = [];
  const attributeNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

  // Initialize attribute scores with a random base value
  for (let i = 0; i < 6; i++) {
      let attribute = generateAttributeNumber();
      attribute = attribute < 8 ? 8 : attribute; // Ensure no attribute is below 8
      attributes.push(attribute);
  }
  console.log("Attributes before ASI:", attributes);

  // Apply ASI from selected race
  if (selectedRace && selectedRace.asi) {
    let usedIndices = new Set(); // Track indices to ensure no attribute is increased twice

    // First pass: Apply specific ASIs
    selectedRace.asi.forEach(asi => {
        if (!asi.attributes.includes("Other") && !asi.attributes.includes("Any")) {
            asi.attributes.forEach(attr => {
                const index = attributeNames.indexOf(attr);
                if (index !== -1) {
                    attributes[index] += asi.value;
                    usedIndices.add(index);
                }
            });
        }
    });

    // Second pass: Apply "Other" or "Any" ASIs
    selectedRace.asi.forEach(asi => {
        if (asi.attributes.includes("Other") || asi.attributes.includes("Any")) {
            for (let i = 0; i < asi.attributes.length; i++) {  // Handle multiple "Other" if needed
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * attributeNames.length);
                } while (usedIndices.has(randomIndex));

                attributes[randomIndex] += asi.value;
                usedIndices.add(randomIndex);
            }
        }
    });
}

console.log("Attributes after ASI:", attributes);
return attributes;
}