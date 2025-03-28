// Initializing CharacterClass if object not constructed.
class CharacterClass {
    primaryAbility = "";

    // hitDie will be a string in the following format: 1d12 so that it is compatible with my roller application
    hitDie = "";

    // I decided to make the below values objects instead of arrays because they will be easier to access and easier to understand in the code, rather than translating numbers every time.
    savingThrows = {};
    skillProficiencies = {};
    weaponProficiencies = {};
    armorTraining = {};

    // startingEquipment remains an Array because they're not just T/F like the above values, they will be individual strings
    startingEquipment = [];

    constructor({ primaryAbility, hitDie, savingThrows, skillProficiencies, weaponProficiencies, armorTraining, startingEquipment }){
        this.primaryAbility = primaryAbility;
        this.hitDie = hitDie;
        this.savingThrows = savingThrows;
        this.skillProficiencies = skillProficiencies;
        this.weaponProficiencies = weaponProficiencies;
        this.armorTraining = armorTraining;
        this.startingEquipment = startingEquipment;
    }

}

