//Ejercicio no hecho por mi-- Falta realizar mi version.
function CodelandUsernameValidation(str) { 
    
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    if(str.legth<4 && str.legth>25){return false;}
    if(regex.test(str)==false){return false;}
    
    // code goes here  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("u__hello_world123"));


