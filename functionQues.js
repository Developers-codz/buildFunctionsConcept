// level easy


// Given a and b, your function should return the value of a power b
// Example:
// Input: power(2,3) ––> Output: 8

// ES3

// function findPower(base,exponent){
//     return Math.pow(base,exponent)
// }
// console.log(findPower(2,3))
// console.log(findPower(5,10))

//  ES6

// const result = (b,e) => Math.pow(b,e)
// console.log(result(2,5))

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// ES3

// function areaOfHexagon(a){
//     return Math.floor(2.598*a*a)//to get exact number without decimals
// }

// console.log(areaOfHexagon(10))

// ES6
// const area = (a)=> 2.598*a*a
// console.log(area(8))

// function that will return no of words in a sentence

// ES3

// function noOfWords(str){
//     console.log(str.split(" ").length)
// }
// noOfWords("we are aspirant neograds awesome day")

// ES6

// const noOfWords2 = (str="i am neogrammer")=> str.split(" ").length
// console.log(noOfWords2("i can do this"))


// find smallest no in a given array

// ES3

// function findMin(...arr){
//     const arrangedArr = arr.sort(function(a,b){
    
//         return a-b})
//     return arrangedArr
// }
// console.log(findMin(22,11,33,44)[0])

// ES6

// const min = (...arr) => 
//     arr.sort((a,b)=> a-b)


// console.log(min(111,22,30)[0])

// find the type of triangle and whether its a triangle

// es3

// function typeOfTriangle(a,b,c){
//     if(!a || !b ||!c)
//         return "invalid"
//     else if(a===b && b===c)
//         return "Equilateral Triangle"
//     else if(a===b || b===c || c===a)
//         return "isoceles trinagle"
//     else
//         return "Scalene triangle"
    
// }

// console.log(typeOfTriangle(20,20,20))

// Medium
// given the array.Your function should return the length of the array
// function arrayLength(arr){

// }
// console.log(arrayLength([1,2,3,4,11,55]))

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// arr = [1,2,3,4]
// console.log(arr.findIndex(i => i===3))

// function indexOf2(arr,num){

//     return arr.findIndex(i=>i===num)
// }
// const result = indexOf2([22,33,12,34],33)
// console.log(result)

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// ES3
// function replace(arr,old,newer){
//     console.log(arr.toString().replaceAll(old,newer))

// }
// replace([1,2,3,2],2,10)

// ES6
// var replaced = (arr,old,newer)=> arr.toString().replaceAll(old,newer)

// console.log(replaced([2,3,4,5,6,5],5,6))

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// ES3

// function mergeArray(arr1,arr2){
//     console.log(arr1.concat(arr2))
// }
// mergeArray([2,3,5],[6,4,7])

// ES6

// const mergedArr = (arr1,arr2) => arr1.concat(arr2)
// console.log(mergedArr([2,3,4],[6,7,8]))




// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
// str = "kajal the upcoming neograd"

// console.log(str.charAt(6))

// function findCharAt(str,index){
//     console.log(str.charAt(index))
// }
// findIndex("kajal the upcoming neograd",13)

// ES6

// var indexedLetter = (str,index)=>str.charAt(index)
// console.log(indexedLetter("neog camp",8))

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// function minDate(date1,date2){
//     const d1 = date1.split("/")
//     const d2 = date2.split("/")
//     if(d1[0]===d2[0]&&d1[1]===d2[1]&&d1[2]===d2[2])
//         console.log("both are equal")
//     else {
//         if(d1[2]>d2[2]){
//             console.log(d1)
//         }
//         else if(d1[2]<d2[2]){
//             console.log(d2)
//         }
//         else{
//             if(d1[1]>d2[1])
//                 console.log(d1)
//             else if(d1[1]<d2[1])
//                 console.log(d2)
//                 else{
//                     if(d1[0]>d2[0])
//                         console.log(d1)
//                     else
//                         console.log(d2)
//                 }
//         }
//     }
    
// }

// minDate('02/06/2023','31/06/2023')

// Advanced

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.100]

// function encodeString(str,num){
//     var arr=str.replaceAll(' ','').split('')
//     // console.log(arr)
//     var newArr= arr.map(i=>
//         i.charCodeAt(0)+num //add ascii code of each character to the num
//     )
//     console.log(newArr)
    // console.log(newArr.join(",")) // converting in string
//     var str=""
//     newArr.map(i=>{

//         let code = String.fromCharCode(i)//pass ascii value as arguements here
//         str +=code
//     })
//     console.log(str)
    
    
// }
// encodeString("neog",1)

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

function toSentenceCase(str){
    var splittedArr = str.split(" ")
    for(i=0;i<splittedArr.length;i++){
        splittedArr[i] = splittedArr[i][0].toUpperCase() + splittedArr[i].substring(1)
        
    }
    return splittedArr.join(" ")
}
console.log(toSentenceCase("we are neogrammer"))

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

function sortArray(array){
    var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
    }
    return array
}
const sortedArr = sortArray([100,83,32,9,45,61])
console.log(sortedArr)

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// function reverseCharactersOfWord(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseCharactersOfWord("we are neoGrammers"))

// let i;
// for(i=0;i<=5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }

// for(let j=0;j<=5;j++){
//     setTimeout(() => {
//         console.log(j)
//     }, 0);
// }