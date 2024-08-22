// How to Calculate your Carbon Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 4;
// 2. Consider the size of your home.
const HouseSize = 7;
// 3. Evaluate your food choices.
const Food = 8;
// 4. Examine your water consumption.
const Water = 1;
// 5. Determine how many household purchases you make each year.
const Purchases = 6;
// 6. Consider how much waste you produce.
const Waste = 30;
// 7. Identify the amount of waste that you recycle.
const Recycle = 16;
// 8. Tally up your annual transportation scores.
const Transport = 6;

// 9. Add up your points.
const cfpTotal = myHouseMembers + HouseSize + Food + Water + Purchases + Waste - Recycle + Transport;

// 10. Write JS to update the rendered html (index.html) with total footprint

// JS codes for finding the h2 element in html
const MyPoints = document.querySelector("h2");

// Live updating the values in html
MyPoints.textContent = cfpTotal;
