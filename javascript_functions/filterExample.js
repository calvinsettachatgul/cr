// the filter call back has to return a boolean
// I think if the boolean is true then the object will be kept in the array

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

let isGrownPuppy = (pet) => {
    return pet.age > 2;
}

let fullGrown = pets.filter(isGrownPuppy)
// console.log(fullGrown)

let isOwnerMark = (pet) => {
    return pet.owner === "mark"
}

let owner = pets.filter(isOwnerMark)
console.log(owner)