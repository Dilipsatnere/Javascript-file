///////  Various method of console are

   let a=10  
   let b= 20

   ////// 1.  time = Starts a timer (can track how long an operation takes)
     console.log("***********Time console*********")

     console.time

   ////// 2.  assert = Writes an error message to the console if a assertion is false
     console.log("***********Assert console*********")

     console.assert( a > b )

   ////// 3.  error = Outputs an error message to the console
      console.log("***********Error console*********")
    
        console.error(a)

   ////// 4.  group = Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
     console.log("***********Group & groupend console*********") 
    
     console.log("This is the outer level");
     console.group();
     console.log("Level 2");
     console.group();
     console.log("Level 3");
     console.warn("More of level 3");
     console.groupEnd();
     console.log("Back to level 2");
     console.groupEnd();
     console.log("Back to the outer level");

   ////// 5. info = Outputs an informational message to the console
     console.log("***********info console*********") 

     console.info( a*b, a/b)

   ////// 6. log = For general output of logging information. You may use string substitution and additional arguments with this method.
     console.log("***********Log console*********")   

     console.log('your addition of two number is =',a+b )

   /////  7. table =  Displays tabular data as a table
     console.log("***********Table console*********")

     // an array of strings

     console.table(["apples", "oranges", "bananas"]);

     // an array of arrays

      const people = [
      ["John", "Smith"],
      ["Jane", "Doe"],
       ["Emily", "Jones"],
       ];
       console.table(people);

   ///////// 8. trace = Outputs a stack trace to the console
       console.log("***********Trace console*********") 

       function foo() {
        function bar() {
          console.trace();
        }
        bar();
      }
      
      foo();

   ///////// 9. warn = Outputs a warning message to the console
      console.log("***********Warn console*********")

       console.warn(a-b) 
       


 //////// 10. timeEnd = Stops a timer that was previously started by console.time()
      console.log("***********TimeEnd console*********")  

      console.time("answer time");
      ///////
      console.timeEnd("answer time");
      

  

