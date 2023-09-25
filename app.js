/* My attempt 

const tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  generateCustomers: function () {
    const min = Math.ceil(this.minCustomers);
    const max = Math.floor(this.maxCustomers);

    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  hourlySales: [],
};

for (let i = 6; i <= 19; i++) {
  tokyo.hourlySales.push(Math.round(tokyo.avgSale * tokyo.generateCustomers()));
}

const salesEl = document.getElementById("sales");

const tokyoEl = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = "Tokyo";
tokyoEl.appendChild(h2);

const ul = document.createElement("ul");

function formatTime(num) {
  if (num < 1000) {
    return `0${num}`;
  } else {
    return num;
  }
}

for (let i = 0; i < tokyo.hourlySales.length; i++) {
  time = 600 + i * 100;
  const li = document.createElement("li");
  li.innerText = `${formatTime(time)}: ${tokyo.hourlySales[i]}`;
  ul.appendChild(li);
}

//add total sum
const li = document.createElement("li");
let total = 0;
for (let i = 0; i < tokyo.hourlySales.length; i++) {
  total += tokyo.hourlySales[i];
}
li.textContent = `Total: ${total}`;
ul.appendChild(li);

tokyoEl.appendChild(ul);

//finally add full article element to document
salesEl.appendChild(tokyoEl);

*/

//code along

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// create our first shop
const seattle = {
  location: "seattle",
  avgCookiesPerCust: 6.3,
  customersPerHour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  cookiesPerHour: [
    6.3, 12.6, 18.9, 25.2, 31.5, 37.8, 44.1, 50.4, 56.7, 63, 69.3, 75.6, 81.9,
    88.2,
  ],
  totalCookieSold: 661.5,
};

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
