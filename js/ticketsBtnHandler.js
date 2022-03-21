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

// for (let i = 1; i <= adults; i += 1) {
//   console.log("Ticket #" + i);
// }
const refs = {
  btn: document.querySelector(".btn"),
  adultsInputRef: document.querySelector("#adults"),
  childrenInputRef: document.querySelector("#children"),
};

refs.btn.addEventListener("click", ticketsBtnHandler);
function ticketsBtnHandler(e) {
  e.preventDefault();

  let adults = refs.adultsInputRef.value;
  let children = refs.childrenInputRef.value;
  let price = totalPrice(adults, children);

  alert("Total price: $" + price);
}
