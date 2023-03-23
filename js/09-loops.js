////// various loops method

//// 1.  while loop (most common method)
// used when we do not know exact number of iteration
console.log("************ while loop *********");

let count = 1;
while (count <= 10) {
  console.log(count);
  count = count + 1;
}

//// 2. do while loop
///  used when we do not know exact number of iteration & but we want it to execute at least once

console.log("************ Do while loop *********");

let c = 11;
do {
  console.log("number is" + c);
  c++;
} while (c <= 10);

// this loop allow frst entry free ( with out checing condition)
// first it run the loop & when it check condition is false get out of loop

///// 3. for loop
/// used when we know exact no of iteration
// for ([initialExpression]; [conditionExpression]; [incrementExpression]) statement

console.log("************ For loop *********");

for (let cnt = 1; cnt <= 5; cnt++) {
  console.log("number (using for loop)" + cnt);
}

////// Addition of function in loop

//// a. if we want to take some value from user
console.log("************ user input loop *********");

function userinputdemo() {
  let nos = prompt("Enter a number", 0);

//    console.log(nos)
 
  console.log(typeof nos);

      nos=Number(nos);

  console.log(typeof nos);

  for (let cut = 1; cut <= nos; cut++) {
            console.log(cut); 
  }
}

userinputdemo()


/// b. if we want to break the loop in middle
console.log("************ Middle break loop *********");
  function breakdemo(){

      let arr = [10,23,200,36,-5,70,300]
       
       for ( let x=0;x<arr.length;x++){
        if (arr[x]<0){
            break
        }
        console.log(arr[x])
       }
       console.log("operation done")
}

// breakdemo()

//// c. continue statement
       /// it continue from break condition while skipping the break condition
       console.log("************ continue loop *********");
       function continuedemo(){
     
           let arr = [10,23,200,36,-5,70,300]
            
            for ( let x=0;x<arr.length;x++){
             if (arr[x]<0){
                 continue
             }
             console.log(arr[x])
            }
            console.log("operation done")
     }

     continuedemo()
        
      /// contnue mai jis value ke liye conditon di hai wo print nahi honga baki sab print honga