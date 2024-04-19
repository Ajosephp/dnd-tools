import ClassSelector from './ClassSelector'; // This is the client component
import RaceSelector from './RaceSelector';
import AttributesComponent from './AttributeSelector';


export default function CharacterGeneratorPage() {

    return (
        <div>
            <h1>Character Generator</h1>
            <h2 className='mt-2 mb-2'>Classes</h2>
            <ClassSelector />
            <RaceSelector />
            <AttributesComponent />
        </div>
    );
}
