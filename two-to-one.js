str1 = "abfgadecde"
str2 = "jklhjmimn"

function longest(s1, s2) {
    // your code
    
    if(typeof s1 === 'string' && typeof s2 === 'string'){
      joinedString = s1.concat(s2).split('').sort()
      filteredString = joinedString.filter((item, index, array) => index === array.indexOf(item) ) //indexOf a;ways stops at the first item it encounters that is true, that's why it can be used here
    }
    console.log(filteredString)
  }


  longest(str1,str2)
