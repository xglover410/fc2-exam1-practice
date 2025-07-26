// JavaScript Basics Practice Exam  
// Focus Areas:  Looping through arrays & objects, built-in loop methods,
//  string manipulation, array transformations  
// ---

// ### **Section 1: Looping Through Arrays**  

// 1. **Simple Array Loop**  
//    Write a `for` loop that logs each element of the array `[5, 10, 15, 20]` to the console.  

// const arr = [5, 10, 15, 20];
// for (i =0; i<arr.length; i++) {
//     console.log(arr[i]);
// }


// 2. **Summing Array Elements**  
//    Use a loop to calculate the sum of all numbers in `[1, 2, 3, 4, 5]` and log the result.  

// const arr2 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i<arr2.length; i++) {
//     sum += arr2[i];
// }

// console.log(sum)

// 3. **Filter Even Numbers**  
//    Loop through `[12, 7, 9, 24, 18]` and create a new array containing only even numbers.  

// const arr4 = [];
// const arr3 = [12, 7, 9, 24, 18];
// for (let i = 0; i < arr3.length; i++){
//     if (arr3[i] % 2 === 0){
//         arr4.push(arr3[i]);
//     }
// }
// console.log(arr4);

// ---

// ### **Section 2: Looping Through Arrays with Objects**  
// **Difficulty: Medium**  

// 4. **Access Object Properties**  
//    Given:  
 
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];

//    Loop through `users` and log each user’s name.  
// for (let i = 0; i < users.length; i++){
//     console.log(Object.values(users[i])[0]);
    
// }


// 5. **Find a Specific Object**  
//    Using the `users` array above, find and log the object where `name === "Bob"`.  

// for (let i = 0; i<users.length; i++) {
//     if (users[i].name === "Bob") {
//         console.log(users[i]);
//     }
// }


// 6. **Calculate Average Age**  
//    Loop through `users` and compute the average age.  

// let sum = 0;
// let averageAge = 0;
// for (i=0; i<users.length; i++) {
//     sum += users[i].age;
// }
// averageAge = sum/users.length;

// console.log(averageAge);



// 

// ### **Section 3: Built-in Loop Methods**  


// 7. **`forEach` Practice**  
//    Use `forEach` to log each element 
const myArray = ["apple", "banana", "cherry"]; 

// myArray.forEach((element)=> console.log(element));


// 8. **`map` Transformation**  

// const thisArray = [1, 2, 3];
// // use `map` to create a new array where each number is doubled. 

// // Try this first - might be easier
// const newArray = thisArray.map(num => num * 2);
// console.log(newArray);


// Second solution using a function
// const newArray = thisArray.map(doubleFunction)

// function doubleFunction(x) {
//     return x * 2;
// }
// console.log(newArray)

// 9. **`filter` with Condition**  
const grades =[15, 3, 25, 8, 10];

//use `filter` to keep numbers greater than 10.  
// const newGrades = grades.filter(grades => grades > 10);
// console.log(newGrades);


// 10. **`find` First Match**  
//     Use `find` to get the first number > 50 in 
// 
// const finder = [20, 45, 60, 70]; 

// const match = finder.find((element) => element>50);
// console.log(match);


// 11. **`reduce` for Aggregation**  
//     Use `reduce` to multiply all numbers in `[2, 3, 4]` (result: `24`).  

// Another (simpler) way to use reduce
// const numbers = [2, 3, 4];
// const finalDestination = numbers.reduce(
//     (multiplier, currentValue) => multiplier * currentValue, 
// )
// console.log(finalDestination);

// Base format for using reduce
// const numbers = [2, 3, 4];
// const startingPoint = 1; 
// const finalDestination = numbers.reduce(
//     (multiplier, currentValue) => multiplier * currentValue, 
//     startingPoint,
// )
// console.log(finalDestination);

// ---

// ### **Section 4: String Manipulation**  
// **Difficulty: Mixed**  

// 12. **Slice a String**  
    // Slice `"JavaScript"` to extract `"Script"`.  

//     const string1 = "JavaScript";
// console.log(string1.slice(4))

// 13. **Split and Join**  
//     Split `"hello-world"` into an array by `-`, then join back with `_`.
// intended output: "hello_world"

// const splitString = "hello-world";
// let newString = splitString.split("-");
// //console.log(newString); //For testing and seeing what it does
// let newerString = newString.join("_");
// console.log(newerString);

// 14. **Uppercase Transformation**  
//     Convert `"example"` to uppercase using a string method.  

// let transform = "example";
// console.log(transform.toUpperCase());

// 15. **Check Substring**  
//     Check if `"programming"` contains `"gram"` and log `true` or `false`.  

 let spellCheck = "programming"

// let spellCheckerGram = spellCheck.includes('gram');
// console.log(spellCheckerGram); 

// ### **Section 5: Array Transformations with Functions**  
// 

// 16. **Apply Function to Array**
//   Apply `addTwo` to each element in `[3, 6, 9]` using `map`.   

const addTwo = num => num + 2;

// let myNums = [3, 6, 9];

// const myNumsPlus2 = myNums.map(addTwo);
// console.log(myNumsPlus2);

// 17. **Custom Filter Function**  
//     Write a function `isLongWord(word)` that returns `true` if `word.length > 5`.  
//     Use it to filter myFruits 
const myFruit = ["apple", "banana", "kiwi"];  

// // pass isLongWord through myFruit to find which word is > 5
// function isLongWord(word) {
//     if (word.length >5) {
//         return true;
//     }
// }
// let newVarible = myFruit.filter(isLongWord)
// console.log(newVarible);

// 18. **Chaining Methods**  
//    Chain `map` (multiply by 3) and `filter` (keep even numbers).  

// let myNums2 = [1, 2, 3, 4];
// const numNum = myNums2.map((number) => number *3).filter((number) => number%2 === 0);

// console.log(numNum);


// ### **Section 6: Mixed Challenges**  

// 19. **Nested Object Access**  
//     Given:  
   
const data = [{id: 1, items: ["baseball", "soccer ball"]},   {id: 2, items: ["Game Boy"]}];

//     Log all `items` for each object.  

// for (let i = 0; i < data.length; i++){
//     console.log(Object.values(data[i].items));
// }

// 20. **Count String Occurrences**  
//     Loop through mixedLetters  and count how many times "a" appears.  
const mixedLetters = ["a", "b", "a", "c"];

// let sumA = 0
// for (let i = 0; i < mixedLetters.length; i++){
//     if (mixedLetters[i] === 'a'){
//         sumA += 1;
//     }
// }
// console.log(sumA)

// 21. **Flatten an Array**  
//     Use `reduce` or loops to flatten the array flat into `[1, 2, 3, 4]; 

const flat = [[1, 2], [3, 4]];

const newFlat = [];

// use a nested loop to combine all numbers in flat into a single array
for (let i =0; i<flat.length; i++) {
    for (let j = 0; j<flat[i].length; j++) {
        newFlat.push(flat[i][j]);
    }
   
}
console.log(newFlat);


// 22. **Sort and Reverse**  
//     Sort `ages` in ascending order, then reverse it.  
const ages = [10, 2, 5, 8];

// 23. **Extract Object Keys**  
//     Given `member1`, loop through its keys and log them.  
const member1 = {name: "Tom", age: 28};

// 24. **Merge Arrays**  
//     Merge `firstArray` and `secondArray` into one array using a loop or method.  
let firstArray = [1, 2];
let secondArray = [3, 4];



