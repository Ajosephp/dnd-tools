/*
DND Class from API
 */
export interface Class {
    name: string;
    slug: string;
    desc?: string;
    hit_dice?: string;
    hp_at_1st_level?: string;
    hp_at_higher_levels?: string;
    prof_armor?: string;
    prof_weapons?: string;
    prof_tools?: string;
    prof_saving_throws?: string;
    prof_skills?: string;
    equipment?: string;
    table?: string;
    spellcasting_ability?: string;
    subtypes_name?: string;
    archetypes?: string; 
  }

/*
DND Abilit Score Improvement number for certain Races
 */
export interface AbilityScoreImprovement {
    attributes: string[];  // An array of attributes
    value: number;         // The improvement value
  }

/*
DND Race from API
*/
export interface Race {
    name: string;
    slug: string;
    asi_desc?: string;
    asi?: AbilityScoreImprovement;
  }