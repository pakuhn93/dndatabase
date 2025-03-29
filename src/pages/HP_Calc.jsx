import { useEffect, useState } from "react";

export default function HP_Calc(){
  const [startingClass, setStartingClass] = useState(0);
  const [classHP, setClassHP] = useState(0);
  const [modifierCON, setModifierCON] = useState(0);
  const [levelTotal, setLevelTotal] = useState(0);
  const [totalHP, setTotalHP] = useState(0);  // FUTURE: Add multiclass calculation.

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

  useEffect(() => {
    console.log("PAGE UPDATED.");
    setTotalHP(startingClass + (classHP*(levelTotal-1)) + (modifierCON*levelTotal));
  }, [startingClass, classHP, modifierCON, levelTotal]);
  
  
  // FUTURE: Change the option elements to a React mapped list, where the class information is imported from elsewhere.
  return(
    <div>
      <p>Total Hit Points: { totalHP }</p>
      <label htmlFor="startingClass">Select your starting class.</label>
      <br></br>
      <select id="startingClass" onChange={updateStartingClass}>
        <option value="1d8">Artificer</option>
        <option value="1d12">Barbarian</option>
        <option value="1d8">Bard</option>
        <option value="1d8">Cleric</option>
        <option value="1d8">Druid</option>
        <option value="1d10">Fighter</option>
        <option value="1d8">Monk</option>
        <option value="1d10">Paladin</option>
        <option value="1d10">Ranger</option>
        <option value="1d8">Rogue</option>
        <option value="1d6">Sorcerer</option>
        <option value="1d8">Warlock</option>
        <option value="1d6">Wizard</option>
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
      <input id="modifierCON" type="number" step="1" min="0" max="10" onChange={updateModifierCON}></input>

    </div>
  );
}