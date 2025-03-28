import { useState } from "react";

export default function HP_Calc(){
  const [totalHP, setTotalHP] = useState(0);
  const [class1, setClass1] = useState(0);
  const dropdownID = "class1";

  const updateHP = (characterClass) => {
    let calcHP = 0;
    console.log("PROCESSED", characterClass)
    return calcHP;
  }
  
  return(
    <div>
      <p>Hit Point Maximum: { totalHP }</p>
      <label htmlFor={dropdownID}>Select your starting class.</label>
      <br></br>
      <select id={dropdownID} onChange={() => updateHP(document.getElementById(dropdownID).value)}>
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
    </div>
  );
}


// <form id="calc-hp">
//         <label htmlFor="level-1">What class did you select for level 1?</label>
//         <br></br>
//         
//         <br></br>
//         <button type="submit">Submit</button>
//       </form>