// can accept as many params as needed
// accepts params in #d# format
// # can be any valid whole number
const rollDice = (...dice) => {
    console.log('Dice to be rolled:', dice);
    
    // verify inputFormat
    const inputFormat = /\d+d\d+/;
    for(const die of dice){
      if(!inputFormat.test(die) || /^0/.test(die) || /d0/.test(die) || /\./.test(die)){
        // exit function if incorrect format
        console.log('Invalid input format.');
        console.log(`Input: ${die}`, `Expected Format: #d# (# must be a whole number)`);
        return `Invalid input format. \n Expected: #d# (# must be a whole number) \n Received: ${die}`;
      }
    }
    
    // function to roll individual sets of sand dice
    const rolling = ([ quantity, die ]) => {
      console.log(`Quantity: ${quantity}`, `Die: ${die}`);
      let rolls = [];
      let rollsTotal = 0;
      
      // roll count based on quantity received
      for(let i = 0; i < quantity; i++){
        // +1 for a number between 1 and die
        rolls[i] = Math.floor((Math.random() * die)+1);
        console.log(`Roll #${i+1} >> ${rolls[i]}`);
      }
      console.log('Roll Results:', rolls);
      rollsTotal = rolls.reduce((sum, indexValue) => {
        return sum + indexValue;
      })
      console.log(`Total = ${rollsTotal}`);
      console.log('=====================');
      return rollsTotal;
    }
    
    let result = [];
    
    // cycle through received params
    for (const die of dice){
      console.log(`Currently Rolling: ${die}`);
      // check if result array is empty
      if (result.length === 0) {
        result[0] = rolling(die.split('d'));
      } else {
        result.push(rolling(die.split('d')));
      }
    }
    console.log('Calculated Total:', result.reduce((sum, indexValue) => {
      return sum + indexValue;
    }));
    return result.reduce((sum, indexValue) => {
      return sum + indexValue;
    });
  }
  
  // console.log('Return Value:', rollDice('4d4', '10d6', '5d8'));

  export { rollDice };