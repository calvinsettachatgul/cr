// https://www.w3schools.com/js/js_function_closures.asp

// https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures

const makeCounter = () => {
  let count = 0; 
  
  const addOne = () => {
    count += 1;
  }
  
  const printCount = () => {
      console.log({count});
  }
  return { addOne, printCount };// we are returing a new object here
}

let newCounter = makeCounter();
newCounter.addOne();
newCounter.addOne();
newCounter.addOne();
newCounter.printCount();
let anotherCounter = makeCounter();
anotherCounter.addOne();
anotherCounter.printCount();
