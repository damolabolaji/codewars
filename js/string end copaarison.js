function solution(str, ending){
  // TODO: complete
  
  if( ending != ''){
     newStr = str.slice(-(ending.length)).split("").join('')
  if(newStr == ending){
     return true;
  }else{
    return false;
  }
    
  }else{
    return true;
  }
 
 
}
