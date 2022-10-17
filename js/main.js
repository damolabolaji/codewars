

//Create Phone Number

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    numbers.forEach(item => format = format.replace('x',item))
    
    console.log(format) ;
  }
  createPhoneNumber([5,7,8,9,0,7,4,8,9,0])


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

