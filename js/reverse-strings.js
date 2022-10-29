//5kyu

function spinWords(string){
    //TODO Have fun :)
    
    splitString = string.split(' ').map(item => item.length < 5 ? item : item.split('').reverse().join('')).join(' ');

       console.log(splitString)
   
  }

  spinWords('i love grilling some chicken')
