/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor 
  functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

function GameObject(character){
  this.createdAt = character.createdAt;
  this.name = character.name;
  this.dimensions = character.dimensions;
  }

 GameObject.prototype.destroy = function(){
   return `${this.name} was removed from the game.`;
 }

function CharacterStats (character){
  GameObject.call(this, character);
  this.healthPoints = character.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}

function Humanoid(character){
  CharacterStats.call(this, character);
  this.team = character.team;
  this.weapons = character.weapons;
  this.language = character.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}

//STRECTH GOALS 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. DONE 
// * Give the Hero and Villains different methods that could be used to remove health points from objects 
// which could result in destruction if health gets to 0 or drops below 0; DONE
// * Create two new objects, one a villain and one a hero and fight it out with methods! DONE (console logs)

function Villain(character){
  Humanoid.call(this, character);
  this.damage = character.damage;
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.poison = function(human){
  if(human.healthPoints > this.damage){
    human.healthPoints -= this.damage;
    return `${human.name} was poisoned by ${this.name}! HP is now ${human.healthPoints} .`;
  }
  else{
    human.healthPoints -= this.damage;
    return `${human.name} was poisoned by ${this.name}! HP is now ${human.healthPoints} .` + human.destroy();
  }
}

function Hero(character){
  Humanoid.call(this, character);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.heal = function(human){
  if(human.healthPoints == 100){
    return `${human.name} has full health. Healing spell performed by ${this.name} was uneffective.`
  }
  else{
    human.healthPoints = 100;
    return `${human.name} has been healed by ${this.name}! They are back to full health (100HP).`
  }
}



//TEST CASES
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const tick = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 10,
      height: 2,
    },
    healthPoints: 100,
    name: 'Evil Tick',
    team: 'Wooded Lands',
    weapons: [
      'Disease Injection'
    ],
    language: 'Buglish',
    damage: 10
  });

  const angel = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 50,
      width: 10,
      height: 100,
    },
    healthPoints: 100,
    name: 'Venus the Angel',
    team: 'Heavenly Skies',
    weapons: [
      'Holy Book',
      'Spinning Halo',
      'Bliding Wand'
    ],
    language: 'Greek',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  //STRETCH TESTS 
console.log(tick.poison(archer)); //Lilith is poisoned by tick, loses 10 HP and is removed from the game.
console.log(angel.heal(swordsman)); //The swordsman is revived by an angel.

