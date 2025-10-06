// let a = []; // empty array  

// let arr = [33,20,33,44,55] ; // 5 numbers 

// let names = ["ram","shyam","ganshyam","ravan","laxman"];

// console.log(names);

// console.log(arr);


// console.log("arr lenght => "+arr.length); // total elements 


// console.log(arr[2]);

// console.log(arr.at(2));// index -> print 


// console.log(arr.indexOf(55)); // element index = 4 [ if present ] 
// console.log(arr.indexOf(550));// element index = -1 [ if not present ]

// console.log(arr.includes(55)); // true 
// console.log(arr.includes(550)); // false 

// console.log(arr.indexOf(33)); // 0  

// console.log(arr.lastIndexOf(33)); // 2 


// // arr.reverse()
// // console.log(arr);










let arr = [33,20,13,9,7,29,49,68,44,15] ; 
arr.sort(mySort)

function mySort(x,y){
    if(x > y){
        return 1;
    }else if(x < y) {
        return -1;
    }else{
        return 0; 
    }
}

console.log(arr);

// -------------------------------------------------------------


let myArray = [22,11,55,66,33,99,80,90,10,9,27]

// for(i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
// }

// myArray.forEach(x => console.log(x)); 
console.log(myArray);
myArray.forEach(x => console.log(x+10)); 


//array -> condition -> subarray -> filter 

//150 {apti} {8+} {A}

let oddArray = myArray.filter(x => x%2 !=0 )

console.log(oddArray);

// print all  numbers divisible by 3 
// print all  numbers divisible by 9 


// print all  numbers divisible by 3 & 9 







