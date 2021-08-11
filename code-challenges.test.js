// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//create describe function for function called codeWord
//pass in "converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0" to *it*
//use expect.toEqual with given inputs and outputs
describe("codeWord", () => {
    it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
      expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
  //Gives expected error => ReferenceError: codeWord is not defined


// b) Create the function that makes the test pass.

//create function called codeWord that takes in string argument
//create variable called newString that splits the string argument at each letter and then maps it
//map over each value
//use if statement to find if each value stricly equals a,e,i, or o
//return corresponding number for each vowel
//>else< return value
//return new string .join("")
const codeWord = (string) => {
    let newString = string.split("").map(value => {
        if(value.toLowerCase() === "a"){
            return "4"
        }else if(value.toLowerCase() === "e"){
            return "3"
        }else if(value.toLowerCase() === "i"){
            return "1"
        }else if(value.toLowerCase() === "o"){
            return "0"
        }else{return value}
    })
    return newString.join("")
}



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

//create describe function for function called fruits
//pass in "returns all the words that contain the letter a" to *it*
//use expect.toEqual with given inputs and outputs
describe("fruits", () => {
    it("returns all the words that contain the letter a", () => {
      expect(fruits(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
      expect(fruits(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
  })
//Gives expected error => ReferenceError: fruits is not defined


// b) Create the function that makes the test pass.

//create variable called fruits that takes in an array argument
//use .filter on array to filter through each value
//on each value, use .toLowerCase() and .includes("a")
const fruits = (array) => {
    return array.filter(value => {
        return value.toLowerCase().includes("a")
    })
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//create describe function for function called fullHouse
//pass in "determines whether or not the array is a 'full house" to *it*
//use expect.toEqual with given inputs and outputs
describe("fullHouse", () => {
    it("determines whether or not the array is a 'full house'", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })
//Gives expected error => ReferenceError: codeWord is not defined


// b) Create the function that makes the test pass.

//create new function called fullHouse which takes in an array argument
//create an array to hold the count of each value
//for loop through the array
//create variable to loop through values
//look for instances pairs and three of a kind
//return true if full house
//return false if not
const fullHouse = (array) => {
    let countArray = []
    for(let i of array){
        countArray[i] = (countArray[i] || 0) + 1
    }
    let vals = Object.values(countArray)
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
        return true
    } else {return false}
}