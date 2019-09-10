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


function sum(arr) {
    let sm = 0;
    for(const  i of arr){
        sm +=i;
    }
    return sm;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

function multiply(arr) {
    let m = 1;
    for(let i in arr){
        m *= arr[i];
    }
    return m;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

// function to reverse string
function reverse(s) {
    const arr = s.split('');
    return arr.map(s=>arr[arr.length - arr.indexOf(s)-1]).reduce((t,s)=> t + '' + s,'');

}
console.log("Expected output of reverse('Fabrice') is ecirbaF  " + myFunctionTest('ecirbaF', function () {
    return reverse('Fabrice');
}));

function findLongestWords(arr,i) {
    let arr2 = [];
    let j = 0;
    for(let e of arr){
        if (e.length > i) {
            arr2[j++] = e;
        }
    }
    return arr2;

}
console.log("Expected output of findLongestWord(['Fabrice','Jado','Tina','Shivani']) is ['Fabrice','Shivani']  " + myFunctionTest(['Fabrice','Shivani'], function () {
    return findLongestWords(['Fabrice','Jado','Tina','Shivani'],5);
}));