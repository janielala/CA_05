// Your Javascript practice exercise goes here

/**
 * JavaScript Practice Variables / typeof
 *
 */

console.log(typeof 123);
console.log(typeof 'String');
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);

/* 
JavaScript Practice Exercise
What is the output of these comparisons

x = 8
y = 3

x == y -> false
x && y < 10 -> true
x || y <= 8 -> true
y === '3' -> false
!(x == 5) -> true

*/

/**
 * JavaScript Practice Arrays
 *
 */

const myArray = [1, 'two', '3']
console.log(myArray.length);
console.log(typeof myArray.toString());
console.log(typeof myArray);
console.log(typeof myArray[0]);
console.log(myArray.join('**'));

/**
 * JavaScript Practice Objects
 *
 */

const myObj = {
    name: 'Janie',
    age: 31,
    hobbies: ['designing', 'coding', 'watching film']
}
/**
 * JavaScript Array & Object Destructuring
 *
 */

myArray.pop();
myArray.push(3);
myArray.shift();
myArray.unshift('1');
myArray[myArray.length] = 'Four';
delete myArray[3];
console.log(myArray);

const myScore = [10, 20, 35, 1, 100]
console.log(myArray.sort());
myScore.sort()
console.log(myScore);

console.log(myScore.sort(function(a, b){return b-a}));
/* for example: 
because 
10-10= 0
20-10 = 10(return =10)
35-10 = 25(return =25)
1-10 = -9
100-10 = 90
myScore = [100, 35, 20, 10, 1]

*/
console.log(myScore.sort(function(a, b){return a-b}));

//array.map(function(currentValue, index, arr), thisValue)
console.log(myScore.map(function(a){return a+5}));

//array.filter(function())
console.log(myScore.filter(function (a){if (a>10) return a}));

console.log(myScore.reduce(function(total,num){return total+num}));
console.log(myScore.reduce(function(total,num){return total-num}));