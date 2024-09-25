import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbonpoints.js";


const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];



function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);

}

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
 


FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(houseMembers, houseSize, firstName,lastName);
    OUTPUT.innerHTML = "";
   // displayOutput();
    renderTbl(cfpData);
    FORM.reset();
});

// Coding Challenge for the body
// 1st step: I create a const for the body and create an element for it
// 2nd step: I create a const for the tr and create element for it also
// 3rd step: I create a const for the td as well
// 4th step: I attempt to create an array for the tr and append child to fit in the td
// 5th step: I forgot to do one for the buttons as well so i added them both into the array
// 6th step: The input doesn't work so I tried to add an append child for the table
// 7th step: I rewatched old videos and notice that I'm missing a for each element so I tried adding that as well to the function, for the array
// 8th step: I got stuck on this part so I tried asking chatGPT for some questions and it tells me that I should put const td = document.createElement('td'); inside the for each loop rather than above it.
// 9th step: after some tinkering around, it still doesn't manage to show up the output so I decided to stop before I mess it up too much and check out the solution video. 

// Why did we get the error when we append the td? We get the error because the td has already been called inside the forEach loop, calling it again could possibly make an error.

