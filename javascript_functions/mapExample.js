let pet1 = {
    "name": "fido",
    "age": 5,
    "owner": "calvin"
}
let pet2 = {
    "name": "rover",
    "age": 3,
    "owner": "mark"
}

let pet3 = {
    "name": "doggie",
    "age": 2,
    "owner": "sue"
}

let pets = [pet1, pet2, pet3]

// the call back of map has to return something to 
// transform the input element into
// somethign else it maps somethign to somethign else

let changeObjectToName = (pet) => {
    return pet.name;
}

let petNames = pets.map(changeObjectToName);

// console.log(petNames);

let changePetOwner = (pet) => {
    return pet.owner
}
