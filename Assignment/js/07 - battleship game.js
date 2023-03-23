/// Battle ship assignment


function startgame(){
    const location = [0,1,1,0,1]

let guesscount = 0
let hitcount = 0

/// here we use while loop because we dont know how many time process is looping for hit count = 3
 
 while (hitcount != 3){
    let choose = Number (prompt("enter a number 1 - 5"))
       
    guesscount++;
    
    if (choose < 0 || choose > 5){
        alert ("invalid choice")
        continue
    }
    /// to check value from array 
    switch (location[choose - 1]){
        case 1 : alert ("you hit the battleship !!")
                 hitcount++;
                 location[choose - 1] = 2
                 break

        case 2 : alert ("you already hit the battleship")
                 break
                 
        default : alert ("you missed the battleship !!")
    }
 }
    alert ("Total guesscount ="+ guesscount)

   document.write("Total guesscount ="+ guesscount)

   
}
