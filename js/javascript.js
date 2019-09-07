
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}


function max(param, paramObj) {
    return (param > paramObj) ? param : paramObj;
}

console.log("Expected output of max() is 12  "
    + myFunctionTest(12, function () {
        return max(12, 10);
    }));

function maxOfThree(one, two, three){
    if(one > two && one > three)
        return one;
    else if(two > one && two > three)
        return two;
    else{
        return three;
    }
}

console.log("Expected output of maxOfThree() is 8  "
    + myFunctionTest(8, function () {
        return maxOfThree(4, 8, 6);
    }));

function isVowel(char) {
    switch (char) {
        case 'A':
        case 'a':
        case 'I':
        case 'i':
        case 'E':
        case 'e':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return true;
        default:
            return false;

    }
}

console.log("Expected output of isVowel() is TRUE  "
    + myFunctionTest(true, function () {
        return isVowel('A');
    }));


function sum( value) {
    let sum = 0;
    for(let i = 0; i < value.length; i++){
        sum += value[i];
    }
    return sum;
}

let a = [1,2,3,4];
console.log("Expected output of isVowel() is 10  "
    + myFunctionTest(10, function () {
        return sum(a);
    }));

//Question 5a:
function sum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s = s + numbers[i];
    }
    return s;
}
console.log(
    "Expected output of sum() is 10  " +
    myFunctionTest(10, function() {
        return sum([1,2,3,4]);
    })
);

//Questions 5b:
function multiply(numbers){
    let a = 1;
    for (let i = 0; i < numbers.length; i++) {
        a=a*numbers[i];
    }
    return a;
}
console.log(
    "Expected output of multiply() is 24  " +
    myFunctionTest(24, function() {
        return multiply([1,2,3,4]);
    })
);

//Question 6 :
function reverse(str){
    let arr = [];
    for(let i=str.length-1;i>=0;i--){
        arr.push(str.charAt(i));
    }
    return arr.join("");

}

console.log(
    "Expected output of reverse() is tset  " +
    myFunctionTest("tset", function() {
        return reverse("test");
    })
);

//Question 7 :
function findLongestWord(words){
    let longest = words[0];
    for(let i=0;i<words.length;i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest.length;
}

console.log(
    "Expected output of findLongestWord() is 4  " +
    myFunctionTest(4, function() {
        return findLongestWord(["ab","abc","abcd"]);
    })
);

//Question 8 :
function filterLongWords(words,i){
    let filtered = [];
    for(let j=0;j<words.length;j++){
        if(words[j].length>i){
            filtered.push(words[j]);
        }
    }
    return filtered;
}

console.log(
    "Expected output of filterLongWords() is abcd  " +
    myFunctionTest(["abcd"], function() {
        return filterLongWords(["ab","abc","abcd"],3);
    })
);


const c = [1,3,5,3,3];
const b = c.map(function(elem) {
    return elem *10
});

console.log(
    "Expected output by multiplying each element by 10 is [10, 30, 50, 30, 30]  " +
    myFunctionTest([10, 30, 50, 30, 30], function() {
        return b;
    })
);

const d = c.filter(function(elem){
    return elem === 3
});
console.log(
    "Expected output by returning an array with all elements equal to 3 is [3, 3, 3]  " +
    myFunctionTest([3, 3, 3], function() {
        return d;
    })
);

const e = c.reduce(function(prevValue, elem){
    return prevValue * elem;
});
console.log(
    "Expected output of the product of all elements is 135  " +
    myFunctionTest(135, function() {
        return e;
    })
);

