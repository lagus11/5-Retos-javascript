function BracketMatcher(str) { 
    var izq = der = 0
    for(var i=0;i<str.length;i++){
        if(str.charAt(i,0)=="("){
            izq++;
        }
        if(str.charAt(i,0)==")"){
            der++;
        }
    }

    if(izq==der){return 1;}else{return 0;}
    // code goes here   
  
  }
     
  // keep this function call here 
  console.log(BracketMatcher("(c(oder)) b(yte)"));