class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.total();
  }

  houseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }


  houseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }


  foodChoicePoints() {
    if (this.foodChoice === "dailyMeat") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "weeklyMeat") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "Vegeterian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "Vegan") {
      this.foodChoicePoints = 2;
    } else if (this.foodChoice === "Prepackaged") {
      this.foodChoicePoints = 12;
    } else if (this.foodChoice === "Organic") {
      this.foodChoicePoints = 2;
    } 
  }

  total() {
    this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints;
  }
}


export { FP }
