const appDiv = document.getElementById("app");
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const objA = {
  name: "Yura",
  age: 24,
};

const objB = {
  ...objA,
};
const objC = objA;
objB.name = "Anya";
objB.age = 22;

objC.name = "roman";

console.log(objC);
console.log(objB);

console.log(Object.entries(objC));

const fnA = (...params) => params.map((n) => n * n);

console.log(fnA(1, 2, 3, 4));

const sectionHeading = document.querySelector(".section__heading");

console.log(sectionHeading.innerHTML);

// sectionHeading.innerHTML = "<h1>WTF!!!!!</h2>";
let adults;
