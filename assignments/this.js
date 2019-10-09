/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window binding, 'this' will be referring to the window / console object
* 2. Implicit binding, if you're using a method on an object, 'this' is bound to that object and method 
* 3. New binding, 'this' refers to the new object that is being created 
* 4. Explicit binding, overriding what 'this' would point to. Happens when call or apply mehtods are used in JS 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);

// Principle 2

const apple = {
    color : "crimson",
    freshness : "crisp",
    fall : function(){
        return(`The ${this.color} apple has fallen off the tree.`);
    }
}
console.log(apple.fall());

// Principle 3

function NewDog(dogName){
    this.bark = "WOOF";
    this.name = dogName;
    this.speak = function(){
        console.log(this.name + ` says `+ this.bark);
    };
}

const arnold = new NewDog("Arnold");
arnold.speak();

// Principle 4
//starting with the example above 
const terrence = new NewDog("Terrence the Terrier");
arnold.speak.call(terrence);
