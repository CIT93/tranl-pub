import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./carbonpoints.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";


function start(houseHoldMembers, houseSize, firstname, lastname) {
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
}

renderTbl(cfpData);

// New validateField Event
function validateField (event) {
    const field = event.target.value;
    const fieldId = event.target.name;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};
FORM.firstname.addEventListener('blur', validateField);
FORM.lastname.addEventListener('blur', validateField);

// Updated the event listener
FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const firstNameIsValid = firstName.value !== '';
    const lastNameIsValid = lastName.value !== '';
    if (firstNameIsValid === true || lastNameIsValid === true) {
        const houseMembers = parseInt(FORM.housem.value);
        const houseSize = FORM.houses.value;
        start(houseMembers, houseSize, firstName, lastName);
        saveLS(cfpData);
        renderTbl(cfpData);
    } else {
        this.textContent("please fill out the form")
    }
    FORM.reset();
});




