// // 1)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

// function repeatStringInArray(string, count) {
//     const resultArray = [];
    
//     for (let i = 0; i < count; i++) {
//       resultArray.push(string);
//     }
    
//     return resultArray;
//   }
  
//   const inputString = "dog";
//   const inputCount = 3;
//   const resultArray = repeatStringInArray(inputString, inputCount);
//   console.log(resultArray); 

// //   Написать функцию, которая получает в качестве аргумента массив с числами. Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве. 


//   function sumEvenNumbers(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         sum += arr[i];
//       }
//     }
    
//     return sum;
//   }
  
//   function sumOddNumbers(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         sum += arr[i];
//       }
//     }
    
//     return sum;
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const sumEven = sumEvenNumbers(numbers);
//   const sumOdd = sumOddNumbers(numbers);
  
//   console.log("Sum of even numbers:", sumEven); // Sum of even numbers: 30
//   console.log("Sum of odd numbers:", sumOdd);   // Sum of odd numbers: 25

// //   Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

// function findMaxSum(sum1, sum2) {
//     if (sum1 > sum2) {
//       return sum1;
//     } else {
//       return sum2;
//     }
//   }
  
//   const sumA = 50;
//   const sumB = 75;
//   const maxSum = findMaxSum(sumA, sumB);
  
//   console.log("Max sum:", maxSum); // Max sum: 75


// //   Написать функцию, которая будет находить максимальное число в массиве.

// function findMaxNumber(arr) {
//   if (arr.length === 0) {
//     return undefined; // Возвращаем undefined для пустого массива
//   }
  
//   let max = arr[0];
  
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
  
//   return max;
// }

// const numbers = [12, 5, 27, 9, 3, 18];
// const maxNumber = findMaxNumber(numbers);

// console.log("Max number:", maxNumber); // Max number: 27

// // написать функцию, которая будет находить минимальное число в массиве.

// function findMinNumber(arr) {
//     if (arr.length === 0) {
//       return undefined; // Возвращаем undefined для пустого массива
//     }
    
//     let min = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
    
//     return min;
//   }
  
//   const numbers = [12, 5, 27, 9, 3, 18];
//   const minNumber = findMinNumber(numbers);
  
//   console.log("Min number:", minNumber); // Min number: 3