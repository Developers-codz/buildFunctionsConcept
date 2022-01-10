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

function indexOf2(arr,num){

    return arr.findIndex(i=>i===num)
}
const result = indexOf2([22,33,12,34],33)
console.log(result)







