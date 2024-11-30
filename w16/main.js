import { renderTbl } from "./render.js";
import {
  determineHouseHoldPts,
  determineHouseSizePts,
} from "./carbonpoints.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";


const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
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
const validateField = (event) => {
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
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
      parseInt(e.target.water.value),
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
  renderTbl(cfpData);
});
