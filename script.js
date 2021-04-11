
function out(f){
  //get the number inside input a
  var aN = Number(a.value);
  //get the number inside input b
  var bN = Number(b.value);
  //call inputted function on a and b 
  var result = f(aN,bN);
  //set input c to the result
  c.value = result;
}

//calculator functions

function add(i,j){
  return i+j;
}
function subtract(i,j){
  return i-j;
}
function multiply(i,j){
  return i*j;
}
function divide(i,j){
  if (i==0) return "NaN";
  return i/j;
}
function mod(i,j){
  if (i==0) return "NaN";
  return i%j;
}