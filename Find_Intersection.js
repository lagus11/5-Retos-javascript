function FindIntersection(strArr) { 
    var a = strArr[0].split(",");
    var b = strArr[1].split(",");
    var r = "";
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<b.length;j++){
            if(a[i]==b[j]){
                r +=a[i]+",";
            }
        }
    }
    if(r.length>0){return r;}
    return false;
    
    // code goes here  
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));