const numberOrders = document.getElementById("numberOrders");
let count = 0;

function insert_Line() {
  numberOrders.removeChild(numberOrders.firstChild)
  count += 1;
  updateOrders();
  const newLine = document.createElement('li');
  const destParent = document.getElementById('special');
  destParent.appendChild(newLine, destParent.lastChild).textContent = prompt('What would you like to request?'); 
}

function updateOrders() {
  let orderCount = document.createTextNode(`Number of special orders: ${count}`);
  numberOrders.appendChild(orderCount);
}