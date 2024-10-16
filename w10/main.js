import { renderTbl } from "./render.js";
import {
  determineHouseHoldPts,
  determineHouseSizePts,
} from "./carbonpoints.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

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
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const carbonHouseSizePts = determineHouseSizePts(i[3]);
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
    // const houseMembers = parseInt(FORM.housem.value);
    // const houseSize = FORM.houses.value;
    start(
    FNAME.value,
    LNAME.value,
    parseInt(FORM.housem.value),
    FORM.houses.value,
    );
    saveLS(cfpData);
    renderTbl(cfpData);
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
  renderTbl(cfpData);
});

const add2 = (a) => 2 + a;

const result = add2(100);

// spread argument

// IIFE

const a = 3;

(function (a) {
  console.log("inside IIFE");
  console.log(a);
})(a);
