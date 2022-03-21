let adults = 42;
let children = 8;

function totalPrice(adults, children) {
  if (adults < 0) {
    adults = 0;
  }

  if (children < 0) {
    children = 0;
  }

  const adultTicketPrice = 12;
  const childrenTicketPrice = 6;
  const totalPrice = adults * adultTicketPrice + children * childrenTicketPrice;

  return totalPrice;
}

const price = totalPrice(adults, children);
console.log("price", price);

for (let i = 1; i <= adults; i += 1) {
  console.log("Ticket #" + i);
}
