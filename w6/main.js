const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(Housesize) {
    let carbonFootprintPoints = 0;
    if ( Housesize === "large") {
        carbonFootprintPoints = 10;
    } else if (Housesize === "medium") {
        carbonFootprintPoints = 7;
    } else if (Housesize === "small") {
        carbonFootprintPoints = 4;
    } else if (Housesize === "apartment") {
        carbonFootprintPoints = 2;
    }
    return carbonFootprintPoints;
}


function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints =4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    } 
    return houseHoldPoints
}

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
 

function displayOutput () {
    for (obj of cfpData) {
        console.log(obj)
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
        const  newH3 = document.createElement("h3");
        newH3.textContent = `Based on numer in and size of home of "${FORM.firstname.value} ${FORM.lastname.value}"`
        const newP = document.createElement("p");
        newP.textContent = `This numer is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}) with the size (${obj.houseS}). Total points would be (score:${obj.houseSPTS})`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(houseMembers, houseSize, firstName,lastName);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
});

// Coding challenge:
// First steps: I've added updates to the First and Last Names input for 20 maximum characters
// 2nd step: I've added more into the function start, specifically the cfpData.push: for first name and last name to fit like the rest.
// 3rd step: I've added console.log(obj) in function displayOutput
// 4th step: took me a bit to figure out, but I added both the first name and last name on the start function to actually make them work. Which actually help display the input.
// 5th step: I fixed the wrong input value for each house size type in index.html
// 6th step: I've added a FORM input to display the user's first and last name in DisplayOutput
// 8th step: I've fix the addEventListener to add the firstName, lastName in the start function and fix the const householdMembers by addding parseINt.
// At this point, I think i've fulfill most of the requirements? so I'll do the final commit and wait for classmates' input. 