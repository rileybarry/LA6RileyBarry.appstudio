function mult(x, y) {
  let numOne = Number(x)
  let numTwo = Number(y)
  return numOne * numTwo
}

function add(x1, y1) {
  let num1 = Number(x1)
  let num2 = Number(y1)
  return num1 + num2
}

btnMult.onclick=function(){
  lblOut.value = mult(inpOne.value, inpTwo.value)
}

btnAdd.onclick=function(){
  lblOut.value = add(inpOne.value, inpTwo.value)
}
