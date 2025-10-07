let myStr = "royal education";

console.log(myStr);
console.log(myStr.length);
console.log(myStr[0]);//r 
console.log(myStr.at(0));//r
console.log(myStr.charAt(0));//r 


console.log(myStr.indexOf('r'));//0
console.log(myStr.lastIndexOf('r'));//0
console.log(myStr.includes("r"));//true 

//string is immutable -> 

// let a = "ram";
// let b = "shyam";
// let c = a+b; 

// console.log(c);
// console.log(a.concat(b));
// console.log(a);
// console.log(b);


let firstName = "RaM"; 

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

let lastName = "       patel         ";
console.log(lastName);
console.log(lastName.length);

console.log(">"+lastName.trim()+"<");


console.log(">"+lastName.trimStart()+"<");
console.log(">"+lastName.trimEnd()+"<");



//XXXXXX1234 

//9510XXXXX 

let creditCard = "1234";

console.log(creditCard.padStart(12,"X"));

console.log(creditCard.padEnd(12,"X"));

let myBigString = "jony jony yes papa";

console.log(myBigString.substr(14,4));//depricated 


//first index inclusive second index exclusive 
console.log(myBigString.substring(14,18));//start_index,end_index


console.log(myBigString.split(" "));




//1) count total digit from string 
//2) count total vowels from string 
//3) reverse your string , print original and reverse both string 
//4) string palindrome 
//5) count how many word you have in string 




