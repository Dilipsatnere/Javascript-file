
// condition given

// ==> Write a if-else ladder to display following
//       marks < 40 => Failed
//       marks 40 - 60 => Pass grade
//       marks 60 - 70 => B grade
//       marks 70 - 90 => A grade
//       marks 90 - 100 => A+ grade


     let marks = 62
     if (marks < 40){
        console.log(marks,'is your marks and you are Failed')
     }else if (marks <= (60)) {
        console.log(marks,'is your marks and you got pass grade')
     }else if (marks <= (70)) {
        console.log(marks,'is your marks and you are pass with B grade')
     }else if (marks <= (90)) {
        console.log(marks,'is your marks and you are pass with A grade')
     }else if (marks <= (100)) {
        console.log(marks,'is your marks and you are pass with A+ grade')
     }