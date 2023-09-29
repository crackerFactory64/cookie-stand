const locationForm = document.getElementById("location-form");
const salesTable = document.getElementById("sales");
const staffTable = document.getElementById("staff");

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

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Location(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
}

Location.prototype.calculateSales = function () {
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    const customers = randomNumber(this.minCust, this.maxCust);
    const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
    this.customersPerHour.push(customers);
    this.cookiesPerHour.push(cookiesSold);
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
  this.displaySalesData();
};

Location.prototype.displaySalesData = function () {
  const row = document.createElement("tr");

  const locationLabel = document.createElement("th");
  locationLabel.textContent = this.location;
  row.appendChild(locationLabel);

  //looping through cookiesPerHour to populate row with td elements
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const cell = document.createElement("td");
    cell.innerText = this.cookiesPerHour[i];
    row.appendChild(cell);
  }

  //add total sum to end of row
  const totalCell = document.createElement("td");
  totalCell.textContent = this.totalCookiesSold;
  row.appendChild(totalCell);

  //finally add full row element to document
  salesTable.appendChild(row);
};

const seattle = new Location("Seattle", 23, 65, 6.3);
const tokyo = new Location("Tokyo", 3, 24, 1.2);
const dubai = new Location("Dubai", 11, 38, 3.7);
const paris = new Location("Paris", 20, 38, 2.3);
const lima = new Location("Lima", 2, 16, 4.6);

const locations = [seattle, tokyo, dubai, paris, lima];

function createTableHeaders(table) {
  const row = document.createElement("tr");
  row.appendChild(document.createElement("td")); //adds a blank cell to the start of the header row

  for (let i = 0; i < hours.length; i++) {
    const header = document.createElement("th");
    header.textContent = hours[i];
    row.appendChild(header);
  }

  if (table === salesTable) {
    const totalHeader = document.createElement("th");
    totalHeader.textContent = "Total";
    row.appendChild(totalHeader);
  }

  table.appendChild(row);
}

function generateTotals() {
  const row = document.createElement("tr");
  row.id = "totals";

  const labelCell = document.createElement("th");
  labelCell.textContent = "Total";
  row.appendChild(labelCell);

  let finalTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    const cell = document.createElement("td");
    let total = 0;
    for (let j = 0; j < locations.length; j++) {
      total += locations[j].cookiesPerHour[i];
    }
    finalTotal += total;
    cell.textContent = total;
    row.appendChild(cell);
  }

  const finalTotalCell = document.createElement("td");
  finalTotalCell.textContent = finalTotal;
  row.appendChild(finalTotalCell);

  salesTable.appendChild(row);
}

function renderSalesTable() {
  createTableHeaders(salesTable);

  for (let i = 0; i < locations.length; i++) {
    locations[i].calculateSales();
  }

  generateTotals();
}

renderSalesTable();

Location.prototype.assignStaff = function () {
  const row = document.createElement("tr");

  const locationLabel = document.createElement("th");
  locationLabel.textContent = this.location;
  row.appendChild(locationLabel);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const cell = document.createElement("td");
    const staffNeeded = Math.floor(this.customersPerHour[i] / 20) + 1;
    cell.innerText = staffNeeded;
    row.appendChild(cell);
  }

  staffTable.appendChild(row);
};

function renderStaffTable() {
  createTableHeaders(staffTable);

  for (let i = 0; i < locations.length; i++) {
    locations[i].assignStaff();
  }
}

renderStaffTable();

function handleSubmit(e) {
  const form = e.target;
  createNewLocation(form);
  rerenderTables();
  //clears form after submit
  form.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

function createNewLocation(form) {
  const newLocation = new Location(
    form.locationName.value,
    parseInt(form.minCustomers.value),
    parseInt(form.maxCustomers.value),
    parseFloat(form.averageSale.value)
  );
  locations.push(newLocation);
  newLocation.calculateSales();
}

function rerenderTables() {
  //removes previous totals from table and recalculates totals
  salesTable.removeChild(document.getElementById("totals"));
  generateTotals();

  //empties the staff table HTML element
  while (staffTable.childNodes.length > 0) {
    //while staff table has children remove the last child in the array
    staffTable.removeChild(
      staffTable.childNodes[staffTable.childNodes.length - 1]
    );
  }
  //rerender staff table based on current locations array
  renderStaffTable();
}

locationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  handleSubmit(e);
});
