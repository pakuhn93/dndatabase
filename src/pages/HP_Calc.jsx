import { useEffect, useState } from "react";
import characterClasses from "../utils/characterClasses/index";

export default function HP_Calc(){
  const [startingClass, setStartingClass] = useState(0);

  const [classHP, setClassHP] = useState(0);
  const [modifierCON, setModifierCON] = useState(0);
  const [levelTotal, setLevelTotal] = useState(0);
  const [totalHP, setTotalHP] = useState(0);  // FUTURE: Add multiclass calculation.
  const [isDraconicSorc, setIsDraconicSorc] = useState({isTrue: false, value: 1});
  const [isDwarf, setIsDwarf] = useState({isTrue: false, value: 1});
  const [isTough, setIsTough] = useState({isTrue: false, value: 2});
  const [isMulticlass, setIsMulticlass] = useState(false);

  const [displayCalc, setDisplayCalc] = useState("[ Calculation will be displayed here. ]");

  const hitDieAvg = (hitDie) => {
    switch(hitDie){
      case "1d6":
        return 4;
      case "1d8":
        return 5;
      case "1d10":
        return 6;
      case "1d12":
        return 7;
      default:
        return 0; 
    }
  }

  // FUTURE: Make this function more modular by returning the max value from the format '1d10'.
  const hitDieMax = (hitDie) => {

    // FUTURE: Make this function more modular when adding multiclass functionality by moving hitDieAvg to be its own thing.
    setClassHP(hitDieAvg(hitDie));
    
    switch(hitDie){
      case "1d6":
        return 6;
      case "1d8":
        return 8;
      case "1d10":
        return 10;
      case "1d12":
        return 12;
      default:
        return 0;
    }
  }

  const updateLevelTotal = (e) => {
    setLevelTotal(e.target.value);
  }

  // Keeps the HP updated on the client when changes are made to the selections.
  const updateStartingClass = (e) => {
    setStartingClass(hitDieMax(e.target.value));
  }

  const updateModifierCON = (e) => {
    setModifierCON(e.target.value);
  }

  const updateIsDraconicSorc = () => {
    setIsDraconicSorc(prevObj => ({...prevObj, isTrue: !prevObj.isTrue}));
  }

  const updateIsDwarf = () => {
    setIsDwarf(prevObj => ({...prevObj, isTrue: !prevObj.isTrue}));
  }

  const updateIsTough = () => {
    setIsTough(prevObj => ({...prevObj, isTrue: !prevObj.isTrue}));
  }
  
  const updateIsMulticlass = () => {
    setIsMulticlass(!isMulticlass);
  }

  useEffect(() => {
    if(levelTotal > 0){
      let baseHP = startingClass + (classHP*(levelTotal-1)) + (modifierCON*levelTotal);

      isDraconicSorc.isTrue ? baseHP += (isDraconicSorc.value*levelTotal) : null;
      isDwarf.isTrue ? baseHP += (isDwarf.value*levelTotal) : null;
      isTough.isTrue ? baseHP += (isTough.value*levelTotal) : null;
      // Had to convert levelTotal to Number with the + operator for some reason.
      setTotalHP(baseHP);

      isMulticlass ? 
        setDisplayCalc("Multiclass calculation.") :
        setDisplayCalc(
          "[ " + "(Starting class HP = " + startingClass + ") + (HP gained from class after 1st level = " + (classHP*(levelTotal-1) + ") + (HP gained from Constitution modifier = ") + (modifierCON*levelTotal) + ") ]"
        );

        // if(isTough && isDwarf && isDraconicSorc){
        //   // 1st Level + Class + CON + Tough + Dwarf + DracSorc
        //   setTotalHP(
        //     startingClass + (classHP*(levelTotal-1)) + (modifierCON*levelTotal) + (2*levelTotal) + (+levelTotal) + (+levelTotal)
        //   );
        // } 

    } else { 
      setDisplayCalc("[ Calculation will be displayed here. ]");
      setTotalHP(0);
    }
  }, [startingClass, classHP, modifierCON, levelTotal, isDraconicSorc, isDwarf, isTough, isMulticlass]);
  
  
  // FUTURE: Change the option elements to a React mapped list, where the class information is imported from the characterClasses folder or equivalent.
  return(
    <section>
      <div>
        <p>Total HP: { totalHP }</p>
        <p>{displayCalc}</p>
        <label htmlFor="isMulticlass">Is your character multiclassed?</label>
        <input id="isMulticlass" type="checkbox" onChange={updateIsMulticlass}></input>
      </div>
      <br></br>

      {
        isMulticlass ? 
        (
          <p>Yes, we are multiclassed!</p>
        ) :
        (
          <div>
            <label htmlFor="startingClass">Select your starting class.</label>
            <br></br>
            <select id="startingClass" onChange={updateStartingClass}>
              {/* Map out the character class options */}
              {
                characterClasses.map((characterClass, index) => {
                  return (
                    <option value={characterClass.data.hitDie}>{characterClass.data.name}</option>
                  );
                })
              }
            </select>

            <br></br>
            <br></br>

            <label htmlFor="levelTotal">What is your character's level?</label>
            <br></br>
            <input id="levelTotal" type="number" step="1" min="1" max="20" onChange={updateLevelTotal}></input>

            <br></br>
            <br></br>
            <label htmlFor="modifierCON">What is your Constitution modifier?</label>
            <br></br>
            <input id="modifierCON" type="number" step="1" min="-10" max="10" onChange={updateModifierCON}></input>
            
            <br></br>
            <br></br>
            <label htmlFor="isDraconicSorc">Subclass: Draconic Sorcerer </label>
            <input id="isDraconicSorc" type="checkbox" onChange={updateIsDraconicSorc}></input>

            <br></br>
            <br></br>
            <label htmlFor="isDwarf">Species: Dwarf </label>
            <input id="isDwarf" type="checkbox" onChange={updateIsDwarf}></input>

            <br></br>
            <br></br>
            <label htmlFor="isTough">Feat: Tough </label>
            <input id="isTough" type="checkbox" onChange={updateIsTough}></input>

          </div>
        )
      }
    </section>
  );
}