//////// simple array : this is old and long method not generally used
console.log("***********Simple array***********")
let marks = [100,20,301,45,60]

console.log (marks[0])
console.log (marks[1])
console.log (marks[2])
console.log (marks[3])
console.log (marks[4])
console.log (marks[5])


/////////  array using loop
///1. print using for loop 
console.log("***********For loop***********")

for(let a=0;a<marks.length;a++){
    console.log(marks[a])
}

///2. print using for each loop
console.log("***********For each loop***********")

marks.forEach(function(item){
    console.log(item)
})


///3. array of mix data type

     let x = [100,"welcome",3.142,true]

    ///////// 3 way to ascess this array
    console.log("***********For loop mix data tyoe***********")
    //////a. using simple (for) loop

    for(i=0;i<x.length;i++){
        console.log(x[i])
    }
    

    ////// b. using for each loop
    console.log("***********For each loop mix data type***********")

       x.forEach(function(i){
         console.log(i)
       })

    
    ////// c. using enhanced for loop
    console.log("***********enhanced For loop mix data type***********")
        
        /////// i
          for(index in x) {
            console.log(x[index])
          }
      

        ///////// ii
             for(item of x){
                console.log(item)
             }




  //////////////////////   Array methods ////////////////////////
  console.log("*******************Array methods**********************")
    
       let no = [101,25,330,65,150]


       no.push()
       console.log(no)



       

       no.reverse()
       console.log(no)

       no.pop()
       console.log(no)

       ////to sort no

       let y = no.sort(function(a,b){
             return a - b
       })





