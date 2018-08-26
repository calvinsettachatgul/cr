
// is there a lot of lag? in updating the file? 
// i dont think there is lag.
// ok cool you here? yup.
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

// forEach takes a call back and 
// executes it for each element of the array

let printName = (petObject) => {
   console.log(petObject.name) 
}

// pets.forEach(printName)

let printAge = (petObject) => {
    console.log(petObject.age + 1)
}

pets.forEach(printAge)