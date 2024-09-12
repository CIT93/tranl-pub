// const cfpData = [];

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
    const cfpObj = {
        houseM: houseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: carbonHouseSizePts,
        cfpTotal: total
    }
    
    // do work here, set up an object with key value pairs that would store all the data, write a different display function that would only display the object that you've created. 







    //cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, carbonHouseSizePts, total]);
    // console.log(cfpData);
}

/*
function displayOutput () {
    for (arr of cfpData) {
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${arr[4]}`;
        const  newH3 = document.createElement("h3");
        newH3.textContent = `Based on numer in and size of home`
        const newP = document.createElement("p");
        newP.textContent = `This numer is based on the number of people in the house of ${arr[0]} (score: ${arr[3]})`;
        newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]})`;
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);

    }
}
*/

start(2, "apt");
start(10, "large");
start(2, "small");
start(4, "medium");

