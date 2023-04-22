// # Clean Array
// `Dificultad baja`
// ### Consigna:
// Dado un array de números, crear un método que elimine los numeros repetidos.
// `plus`: Oneliner
// ## Input
// ```javascript
// let values = [1, 2, 3, 2, 4, 5, 3, 3, 3, 3, 6, 4, 7, 8, 9];
// ```
// ## Output:
// `Values: [1, 2, 3, 4, 5, 6, 7, 8, 9]`

//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------//
/*const clean = (arr) => {
  const newArr = [];
  const hashTable = {};
  for (let val of arr) {
    if (!hashTable[val]) {
      hashTable[val] = true;
      newArr.push(val);
    }
  }
  return newArr;
};

let values = [1, 2, 3, 2, 4, 5, 3, 3, 3, 3, 6, 4, 7, 8, 9];

values = clean(values);

console.log(values);

// OneLiner
[1, 2, 3, 2, 4, 5, 3, 3, 3, 3, 6, 4, 7, 8, 9].reduce((p, c) => {
  !p.includes(c) && p.push(c);
  return p;
}, []);* */
//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------//
/**### Consigna:
Dado un array de números, crear un método que devuelva un nuevo array con los números impares.
`plus`: Oneliner
## Input
```javascript
const arr = [2, 3, 4, 2, 13];
``
## Output:
`impares: [3, 13]` */

// const array = [2, 3, 4, 2, 13];

// const impares = () => {
// 	const newArray = [];

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];

// 		if ( !(element % 2 == 0)) {
// 			newArray.push(element);
// 		}
// 	}

// 	return newArray;
// };

// console.log(impares());

//--------------------------------------------------------------------------------------------------------//