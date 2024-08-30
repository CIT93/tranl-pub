function TestFunction(numberInHousehold) {
    console.log("Inside the function")
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    } 
    console.log('Based on the numer of member of household of ${numberInHousehold} the points would be ${carbonFootprintPoints).');
}



// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points

// Function for calculating household size
let CarbonHouseSizePts = 0;
function CalculateCarbonHouseSizePts(size) {
    if (size = "large house") {
        CarbonHouseSizePts = CarbonHouseSizePts + 12;
    }
    else if  (size = "medium house") {
        CarbonHouseSizePts = CarbonHouseSizePts + 7;
    }
    else if (size = "small house") {
        CarbonHouseSizePts = CarbonHouseSizePts + 4;
    }
    else if (size = "apartment") {
        CarbonHouseSizePts = CarbonHouseSizePts + 2;
    }
 console.log('I live in a ${size} and that makes my points total is: ${CarbonHouseSizePts}');

 TotalPoints = CarbonHouseSizePts + carbonFootprintPoints;
 console.log('My points total is: ${TotalPoints}')
}





