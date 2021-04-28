function LongestWord(sen) { 
    sen=sen.replace(/[^a-zA-Z ]/ig,'');
    
    letras = sen.split(" ");
    let letrasLarga = letras[0];

    for (i = 0; i<letras.length; i ++) {

        if (letras[i].length > letrasLarga.length) {
          letrasLarga = letras[i];
        }
    }
    return letrasLarga;
  }

  console.log(LongestWord("Me encantan los perros"));
  
