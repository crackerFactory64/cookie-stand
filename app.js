/* 

My attempt 

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
  tokyo.hourlySales.push(Math.floor(tokyo.avgSale * tokyo.generateCustomers()) + 1);
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
  li.innerText = `${formatTime(time)}: ${tokyo.hourlySales[i]} cookies`;
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

//Code-along

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
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(customers * this.avgCookiesPerCust);
    }
  },
};

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
