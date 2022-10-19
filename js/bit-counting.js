



//Bit Count 6kyu
  function toBinary(num){
    counter = 0

    if(!Number.isNaN(num) && num >= 0){
        
       numBinary = num.toString(2);
       for(let i = 0; i < numBinary.length; i++){
        if(numBinary[i] > 0){
            counter++
        }
       }
       console.log(numBinary)
        console.log(counter)
    }else{
        console.log('that was not a valid number')
    }
    
  }

toBinary(60)

