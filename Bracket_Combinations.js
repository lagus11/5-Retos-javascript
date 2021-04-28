
function BracketCombinations(num) { 

    return (1 / (num + 1)) * choose(2 * num, num);
}

function factorial(num) {
    let suma = 1;
    for (let i = 1; i <= num; i++) {
        suma *= i;
    }
    return suma;
}

function choose(num, k) {
    return factorial(num) / (factorial(k) * factorial(num - k));
}
   
  // keep this function call here 
  console.log(BracketCombinations(3));