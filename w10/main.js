
import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./carbonpoints.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";


const start = function (houseHoldMembers, houseSize, firstname, lastname) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const carbonHouseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + carbonHouseSizePts;
    cfpData.push({
        firstName: firstname,
        lastName: lastname,
        houseM: houseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: carbonHouseSizePts,
        cfpTotal: total
    });
    saveLS();
}

renderTbl(cfpData);

// New validateField Event
const validateField = function (event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};
// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', function(e){
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        // const houseMembers = parseInt(FORM.housem.value);
        // const houseSize = FORM.houses.value;
        start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
        saveLS(cfpData);
        renderTbl(cfpData);
    } else {
       SUBMIT.textContent = "Form requires first name and last name";
    }
    renderTbl(cfpData);
});


const add2 = function(...a) {
    return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

// spread argument

// IIFE

const a = 3;

(function(a) {
    console.log("inside IIFE")
    console.log(a);
})(a);
