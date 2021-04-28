function FirstReverse(str) { 
    var nuevaCadena = "";
    for(var i=0;i<str.length;i++){
        nuevaCadena+=str.charAt(str.length-i-1,0);
    }
    // code goes here  
    return nuevaCadena; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse("I Love Code"));