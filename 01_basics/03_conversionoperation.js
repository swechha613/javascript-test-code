//let score=33
//let score="33ABCD
//let score= null// output is 0 
//let score=undefined//output is NaN
//let score=true// output is 1

// console.log(typeof score);
// console.log(typeof (score));// you can use as a function

// let valueInNumber= Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// output is NaN


//"33"=>33
//"33abcd"=>NaN(NOT A Number) nan ka type number hai
//true convert 1, false=>0


//let isLoggedIn=1//output is true
let isLoggedIn=""//output-false
let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1=>true; 0=>flase
//""=>false
//"swechha"=>true

let somenumber=33;
let StringNumber= String(somenumber);
// console.log(StringNumber);// output=>33
// how to check this number is string or not
// console.log(typeof StringNumber);// output=>string, so this number convert in a string

//mostly browser gives string value

//****************operation*******************/
 let value=3
 let negvalue=-value
 console.log(negvalue);//output=>-3

 /*
 console.log(2+2)
 console.log(2-2)
 console.log(2*2)
 console.log(2**2)
 console.log(2/2)
 console.log(2%2)
 */

 let str1="hi"
 let str2=" swechha"
 let s3= str1+str2
 console.log(s3);
//  console.log("1"+2); ->12
//  console.log(1+"2"); ->12
//  console.log("1"+2+2);->122
// console.log(1 + 1 +"2");->22

// console.log(true); -> true
// console.log(+true);->1 it's a preincrement but (true+) not allowed

// ************************prefix and postfix*****************************************
let gamecounter=100
gamecounter++;// output 101 ++gamecounter(output->101)
console.log(gamecounter);