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

function start(houseHoldMembers, houseSize) {
   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const carbonHouseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + carbonHouseSizePts;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, carbonHouseSizePts, total]);
    console.log(cfpData);
}

function displayOutput () {
    for (arr of cfpData) {
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `You have ${arr[0]} members in your household, your points will be ${arr[2]}. If your house size is ${arr[1]}, you will gain an additional ${arr[3]} points. Calculating your total points is: ${arr[4]}.`;
        output.appendChild(newP)
    }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apt");

displayOutput ()










