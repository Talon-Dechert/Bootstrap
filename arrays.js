const myColor = ['Red', 'Green', 'White', 'Black'];
let loopStr = '';

for (i = 0; i < myColor.length; i++) {
  if  (i === (myColor.length - 1)) {
    loopStr += `${myColor[i]}`;
  }
  else{
    loopStr += `${myColor[i]},`;
  }
}

console.log(loopStr);

console.log(myColor.join());

console.log(myColor.join('+'));