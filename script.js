//Task1
// const n = 10;
// n > 0 && n < 100 ? console.log('Yes') : console.log('No');

//Task2
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
//     }
// for(let engineer in engineers){
//     console.log(`Заработная плата ${engineer} составляет ${engineers[engineer]} рублей`)
// }

//Task3
// const arr = [0, 1, 2, 3, 4];
// for(let i = 1 ; i < arr.length ; i+=2) console.log(i);

//Task4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for(let key in numbers){
//     console.log(`Индексу ${key} соответствует число ${numbers[key]}`)
// }

//Task5
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// for(let question of questions){
//     question.userAnswer = null;
//     console.log(question)
// }

//Task6
//let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
//for (const element of numbers) console.log(element)
//for (let i = 0 ; i < numbers.length ; i++) console.log(numbers[i]);
//let sum = 0;
// for (const element of numbers) sum+=element;
// console.log(sum);
// for(let i = 0; i < numbers.length; i+=2) sum+= numbers[i];
// console.log(sum);
// let max = 0, index = 0;
// let maxInd = [];

// for (const element of numbers) {
//     if (element > max) {
//         max = element;
//         maxInd = [index];
//     } else if (element === max) {
//         maxInd.push(index);
//     }
//     index++;
// }
// console.log(max);
// console.log(maxInd)

//Task7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let posArr = [];
// for (const element of arr) if(element > 0) posArr.push(element);
// console.log(posArr)

//Task8
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let limnum = []
// for (const element of nums) if(element >= limit) limnum.push(element);
// console.log(limnum);

//Task9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// for (const element of users) if(element.age > 15) console.log(element)

//Task10
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// let keyArr = [];

// for (const element of vegetables) {
//      let tempObj = new Object();
//      tempObj.word = element;
//      tempObj.length = element.length;
//      keyArr.push(tempObj);
// }
// console.log(keyArr);
// for (const element of keyArr) console.log(`${element.word} - ${element.length}`);