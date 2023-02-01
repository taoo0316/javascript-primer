let name = "B. Eich";
let yearOfBirth = 1961;

name = "Brendan Eich";

console.log(name + " was born in " + yearOfBirth + ".");

// constant variable cannot be changed

//const name = "B. Eich";
//let yearOfBirth = 1961;

//name = "Brendan Eich";

//console.log(name + " was born in " + yearOfBirth + ".");

{
    const name = "B. Eich";
    console.log(name);
    {
      console.log(name);
    }
  }

const new_name = "Brendan Eich";
const new_yearOfBirth = 1961;
  
console.log(`${new_name} was born in ${new_yearOfBirth}.`);