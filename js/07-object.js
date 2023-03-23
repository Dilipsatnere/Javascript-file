
//// simple object

let employee = {
    //// this are properties
    name : "ramesh",
    place : "Bhusawal",
    dept : "civil",
    salary : 15000,

    ////// this is method
        ///// compulsary to assigne name to every function before start it.

        getdetails : function() {
              return this.name +"|"+this.place+"|"+this.dept+"|"+this.salary
        },

        getsalary :function(){
            return this.salary
        }

}

// console.log(employee)
// console.log('name = '+employee.name)
// console.log('dept = '+employee.dept)

// console.log(employee.getdetails())
// console.log(employee.getsalary())

/////  2. Adding/ Removing of proerties and method from object

   let book = {
    title : "wings of fire",
    author : "A.P.J Abdulkalam sir",
    publication : "Scholastic",

    getbrief : function(){
        return 'The book '+this.title+' published by '+this.publication+' written by '+this.author
    }

   }

//    console.log(book)
//    console.log(book.getbrief())

   //// adding of properties/ methods

    book.price = 599 
    book.year = 2012

    // console.log(book)

    // book.getdetails = function() {
    //     console.log( 'the book price '+ this.price + ' publish in year '+ this.year)
    // }

    // book.gethello = function() {
    //     return 'hello'
    // }
    // book.gethelloo = function() {
    //     console.log('helloo')
    // }

    // book.getdetails()
    // console.log(book.gethello())

    // book.gethelloo()


    //// removing of method/properties

    delete book.gethello
    delete book.year
    delete book.publication

    

   ////// 3. nesting of object

      let bike = {
        brand : "hero",
        model : "hf delux",
        price : 59000,
       }  

          let cycle = {
            brand : "atlas",
            model : "c2",
            price : 5000,
          

        getdetails : function(){
            return ' brand :'+ this.brand + 'model no :'+ this.model + 'having price :'+ this.price
        }
    }

    // console.log(bike)
    // console.log(cycle)
    // console.log(cycle.getdetails())


    ///// if want to make/create same object multiple time then we have to use constructor function

    //// 4. constructor function(constructor syntax)

         function books (title,author,price) {  
             this.title = title
             this.author = author
             this.price = price

             this.getdetails = function (){
                return 'this book :'+ this.title+' having author :'+ this.author +' of price :'+ this.price 
             }


         }

     ///// we make formate of object in the form of constructor function now we make no. of function we want

       let b1 = new books ('Let us c','y.kantikar',290)
       let b2 = new books ('State 2020','chetan bhagat',320)

    //    console.log(b1)
    //    console.log(b2)
    //    console.log(b1.getdetails())
    //    console.log(b2.getdetails())


    /////// 5. class 

       class car {
          constructor (brand,name,price){
            this.brand = brand
            this.name = name
            this.price = price
          }
       }

       let c1 = new car ('honda','jazz',1400000)
       let c2 = new car ('BMW','mc3',3600000)

       console.log(c1)
       console.log(c2)


       /////// in any object we can add or remove the properties or methods

        c1.fulecapactiy = 100+'liter'
        c2.fulecapacity = 150+'liter'

        console.log(c1)
        console.log(c2)

        delete c1.brand
        delete c1.name

        c2.getdetail= function(){
            return 'this car:'+ this.brand +'   model: '+this.name
        }
            
        console.log(c2.getdetail())
        console.log(c1)
        console.log(c2)



        


