
function getRandomElement(array) {
    if (!Array.isArray(array)) {
     return undefined;
    }

   return array[Math.floor((Math.random() * array.length))];
}

const module = {
    getRandomElement,
}

export default module;

console.log(getRandomElement([2,3,4]));
console.log(getRandomElement(2,5,4));