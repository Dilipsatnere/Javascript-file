
///// Simple function
function demo(){
  console.log("welcome to js")
}

////// Alert function = to show alert message in popup

function showalert() {
    alert("Are you agree to terms and condition")
}

//////// confirm function = to get the conformation from user in yes or no

function showconfirm() {
    let choice = confirm("are you sure you want to delet ?")
    if (choice == true) {
        console.log("Records deleted")
    }else{
        console.log("Records are not deleted")
    }
}


////////// prompt function = to get some input from user

    function showprompt() {
        let age = prompt("enter your age",0)
        console.log(typeof age)

        age = Number(age)  ///// we converted age from string to number for because if and else are not applicale on string type
        console.log(typeof age)
               

        if (age >= 18) {
            console.log("you are allow to play games")
        }else {
            console.log("you are not allow to play games")

        }
    }
