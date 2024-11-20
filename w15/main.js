import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts,} from "./carbonpoints.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

// const start = function (houseHoldMembers, houseSize, firstname, lastname) {
//     const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//     const carbonHouseSizePts = determineHouseSizePts(houseSize);
//     const total = houseHoldPTS + carbonHouseSizePts;
//     cfpData.push({
//         firstName: firstname,
//         lastName: lastname,
//         houseM: houseHoldMembers,
//         houseS: houseSize,
//         houseMPTS: houseHoldPTS,
//         houseSPTS: carbonHouseSizePts,
//         cfpTotal: total
//     });
//     saveLS();
// }

const start = (...i) => {
const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + carbonHouseSizePts;
  cfpData.push({
    firstName: i[0], 
    lastName: i[1],  
    houseM: i[2],    
    houseS: i[3],    
    houseMPTS: houseHoldPTS, 
    houseSPTS: carbonHouseSizePts, 
    cfpTotal: total, 
  });
};

renderTbl(cfpData);

// New validateField Event
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};
// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    // start( FNAME.value,LNAME.value,parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value,LNAME.value,parseInt(FORM.housem.value), FORM.houses.value, FORM.foodChoice.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
  renderTbl(cfpData);
});

// // Async JS
// let pizza
// function orderPizza() {
//   console.log('Order pizza'
//     setTimeout(() => {
//       pizza = "🍕"
//       console.log(`${Pizza} is ready`)
//     }, 2000)
//     console.log('Pizza was ordered')
//   }

//   pizza = orderPizza()

// // function
//   function orderPizza(callback) {
//     setTimeout(() = > {
//       const pizza = `🍕`
//       callback(pizza)
//     }, 2000)
//   }

//   function pizzaReady(pizza) {
//     console.log(`Eat the ${pizza}`)
//   }

//   orderPizza(pizzaReady)
//   console.log(`call Qoli`)


// // Callback Hell
// function thing1() {
//   // Call pizza shop
//   callback()
// }

// function thing2() {
//   // Order the pizza
//   callback()
// }

// function thing3() {
//   // Eat pizza
//   callback()
// }

// // Simplify
// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })