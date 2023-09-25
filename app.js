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
/*const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};*/

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Code-along ends

const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const locations = [seattle, tokyo, dubai, paris, lima];

// displaying the data

function displaySalesData(location) {
  location.calculateSales();

  const salesEl = document.getElementById("sales");
  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = location.location;
  article.appendChild(h2);

  //looping through cookiesPerHour to populate ul with li elements
  const ul = document.createElement("ul");
  for (let i = 0; i < location.cookiesPerHour.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${hours[i]}: ${location.cookiesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  //add total sum to end of ul
  const li = document.createElement("li");
  li.textContent = `Total: ${location.totalCookiesSold} cookies`;
  ul.appendChild(li);
  article.appendChild(ul);

  //finally add full article element to document
  salesEl.appendChild(article);
}

for (let i = 0; i < locations.length; i++) {
  displaySalesData(locations[i]);
}
