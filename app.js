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

/*
  Store the min/max hourly customers, and the average cookies per customer, in object properties. (DONE)

  Use a method of that object to generate a random number of customers per hour. Objects/Math/random{:target="_blank"} (DONE)

  Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated. (DONE)

  Store the results for each location in a separate array... perhaps as a property of the object representing that location. (DONE)

  Display the values of each array as unordered lists in the browser.
*/
