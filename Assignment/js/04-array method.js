// ==> Explore the following Array methods
// - map()
// - reduce()
// - slice()
// - splice()
// - shift()


///// 1. map array = The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
                      /// jo bhi function call kiya hai wo sab index pe apply honga and result show honga
      console.log("********** Map array mathod *************")
      const array1 = [2,6,8,13,19]

      const map1 = array1.map(x => x * 2)

      console.log(map1)


////// 2. reduce array = Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
                          //// array mai jitne bhi number honge un sab ka left to right total hoke combined no form honga

     console.log("********** Reduce array mathod *************")
     
     const array2 = [10, 2, 13, 5];
       const initialValue = 0;
       const sumWithInitial = array2.reduce(
         (previousValue, currentValue) => previousValue + currentValue,
         initialValue
       );

       console.log(sumWithInitial);

////// 3. slice array = Extracts a section of the calling array and returns a new array
                          /// slice method mai complete array mai se jitna portion call kiya hai utna slice hojayenga and remaining new array mai show ajayenga
                          /// if two value are given then then (1 value ke pahle wale ko cut karenga)&(2 value ke baad wale ko cut karenga)
         
          console.log("********** Slice array mathod *************")

         const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
          
          console.log(animals);
          console.log(animals.slice(1))
          console.log(animals.slice(2));
          console.log(animals.slice(2, 4));
          console.log(animals.slice(1, 5));
          console.log(animals.slice(-2));
          console.log(animals.slice(2, -1));

////// 4. splice array = The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
                         // (first no is index location)&(second no is for 'n' no romoval of index)
          console.log("********** Splice array mathod *************")

          const months = ['Jan', 'March', 'April', 'June'];
          months.splice(1, 0, 'Feb');
          console.log(months);
          months.splice(4, 1, 'May');
          console.log(months);
          months.splice(5,0,'july')
          console.log(months);
          months.splice(5,1,'june')
          console.log(months);
          months.splice(6,0,'july')
          console.log(months);

          
////// 5.shift array = The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
                       // isme first element remove ho jata hai and use alag se call karke new array mai la sakte hai

          console.log("********** Shift array mathod *************")    
          
          const array3 = [1, 2, 3, 5, 7, 9];
          const firstElement = array3.shift();
          console.log(array3);
          console.log(firstElement);