import { useEffect, useState } from "react";

// Fields:
    // Character Name:
    // Initiative: 
    // + Add Character
        // This will be an Array of Objects that is updated with State management.
// Future Fields:
    // HP
        // Update HP
// Future Features:
    // Reset Button
    // Store state in localStorage()

export default function InitiativeTracker(){
    const [characterList, setCharacterList] = useState([]);
    const [initDisplay, setInitDisplay] = useState([]);

    const addToTracker = () => {
        setCharacterList(prevList => [
            ...prevList,
            { name: "John Doe", init: 0}
        ]);
    }

    const updateName = (e) => {
        e.stopPropagation();
        // ID Prefix "init_character_" is 15 characters but I want everything after that
        const indexToBeChanged = parseInt(e.target.id.slice(15));

        setCharacterList(prevList => 
            prevList.map((char, index) => 
                index === indexToBeChanged ? { ...char, name: e.target.value } : char
            )
        );
    }

    const updateInitOrder = () => {
        let newInitOrder = [...characterList];

        // Sort from lowest to highest.
        newInitOrder.sort((a, b) => {
            return b.init - a.init;
        });

        // Use the data from above to update the state of the display.
        setInitDisplay(prevList => [...newInitOrder]);
    }

    const updateInit = (e) => {
        e.stopPropagation();
        // ID Prefix "init_value_" is 11 characters and I want everything after that
        const indexToBeChanged = parseInt(e.target.id.slice(11));

        setCharacterList(prevList => 
            prevList.map((char, index) => 
                index === indexToBeChanged ? { ...char, init: parseInt(e.target.value) } : char
            )
        );
    }

    useEffect(() => {
        updateInitOrder();
        
    }, [characterList]);

    // IF clicked, THEN populate new elements.
    return(
        <div>
            <button type="button" onClick={addToTracker}>Add Character</button>
            <br></br>
            <hr></hr>

            <div className="init_inputs">
                {
                    characterList.map((character, index) => {
                        return(
                            <div key={"key_init_" + index} className="init_character">
                                <label htmlFor={"init_character_" + index}>Name: </label>
                                <input id={"init_character_" + index} type="text" onChange={updateName}></input>
                                <br></br>
                                <br></br>
                                <label htmlFor={"init_value_" + index}>Initiative: </label>
                                <input id={"init_value_" + index} type="number" step="1" onChange={updateInit}></input>
                                <br></br>
                                <hr></hr>
                            </div>
                        );
                    })
                }
            </div>
            <div className="init_display">
                {
                    initDisplay.map((character, index) => {
                        return(
                            <div key={"key_init_display_" + index}>
                                <p id={"init_display_name_" + index}>{character.name}</p>
                                <p id={"init_display_init_" + index}>{character.init}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}