
// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.



function generateHashtag (str) {
  
  if (typeof str === 'string' && str.trim().length === 0){ //takes out any space character before and after actual characters e.g "   Hello  Peeps" --> "Hello  Peeps"
    //trim() ensure that if there was a string "   ", .length value will always be zero.
    return false;
  }
  
  else{
    newStr = str.split(' ').filter(item => item != '').map((item, index) => item[0].toUpperCase() + item.slice(1)).join('')
    hashtagStr = '#' + newStr
    
  if(hashtagStr.length <= 140){
      return hashtagStr
  }
  else{
    return false
  }
  }
  
