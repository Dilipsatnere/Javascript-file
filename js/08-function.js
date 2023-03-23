

//// Function are the set of instruction to perform specific task

//// 1. normal method

console.log("addition started..")
console.log(10+20)
console.log("Addition complited..")

console.log("addition started..")
console.log(60+50)
console.log("Addition complited..")

console.log("addition started..")
console.log(110-30)
console.log("Addition complited..")


///// 2. function method
console.log("*********** function method *************")

function add(x,y){
    console.log("addition started..")
    console.log(x+y)
    console.log("Addition complited..")
}

add(30,55)
add(80,55)
add(45,55)
add(300,125)

///// 3. return from function
console.log("*********** Return function method *************")

function add (u,v){
    return u+v
}

// console.log(add(20,30))

let result = add(80,40)
 
   console.log(result)



/////// 4. arrow function

    ///// i. simple arrow function no parameter no return

          let a1 = () => {
            console.log('Arrow function called!')
          }
         a1()


    /////  ii. one parameter no return

         let a2 = (x) => {
            console.log(x)
         }
         a2(90)

    /////  iii. one parameter one return

        let a3 = (x) =>{
            return x*x
        }

        console.log(a3(11))

    //// iv. one parameter one return short form

    let a4 = (x) => x*x

     console.log(a4(91))

     let a5 = (x,y) => x+y

      console.log(a5(20,65))

 ////////////// 5. call back function

  console.log('************ call back function *************')

     //// in call back function main function not call/initiate directly but it will call after an event or by any commond given by user or us

     //////  i . one function call by another function

          function f1(){
            console.log('hello call back function')
          }

          function f2(f){
            f()
          }
 
          f2(f1)

    //////// ii. function called bye setinterval non arrow function
            ///// in setinterval function get repeting after specified time interval
        function f3(){
            console.log('hello this is set interval')
        }

        // setInterval(f3,3000)

        ///// arrow function

            setInterval(()=>{
                console.log('setinterval using arrow ')
            },1000)


    ///////// iii. function called by set time out

             function f4(){
                console.log('this is function call by set timeout')
             }

             setTimeout(f4,5000)

             //// using arrow

             setTimeout(() => {
                console.log('set timeout using arrow')
             }, 7000);

          


       
