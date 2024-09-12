const cfpData = [];

function determineHouseSizePts(size) {
    let carbonFootprintPoints = 0;
    if ( size === "large") {
        carbonFootprintPoints = 10;
    } else if (size === "medium") {
        carbonFootprintPoints = 7;
    } else if (size === "small") {
        carbonFootprintPoints = 4;
    } else if (size === "apartment") {
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

function start(houseHoldMembers, houseSize) {
   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const carbonHouseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + carbonHouseSizePts;
    cfpData.push({
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
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
        const  newH3 = document.createElement("h3");
        newH3.textContent = `Based on numer in and size of home`
        const newP = document.createElement("p");
        newP.textContent = `This numer is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}) with the size (${obj.houseS}). Your total data point would be updated to (score:${obj.houseSPTS})`;
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
    }
}


start(2, "apartment");
start(10, "large");
start(2, "small");
start(4, "medium");

displayOutput();