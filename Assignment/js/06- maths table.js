 
 function mathstable(){
    let no= prompt ("what number the table you want",0)

    console.log(typeof no)

    no = Number (no)

    console.log(typeof no)

      var table = no

      for(var i=1; i<=10;i++){
        console.log(table+ "X" + i + "=" + i*table)
      }
           

 }