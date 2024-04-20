import ClassSelector from './ClassSelector'; // This is the client component
import RaceSelector from './RaceSelector';
import AttributesComponent from './AttributeSelector';


export default function CharacterGeneratorPage() {
    

    return (
        <>
            <ClassSelector />
            <RaceSelector />
            <AttributesComponent />
        </>
    );
}
