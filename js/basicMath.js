let adult = 42;
let children = 8;

function totalPrice(adult, children) {
  const adultTicketPrice = 12;
  const childrenTicketPrice = 6;
  const totalPrice = adult * adultTicketPrice + children * childrenTicketPrice;

  return totalPrice;
}

const price = totalPrice(adult, children);
console.log("price", price);
