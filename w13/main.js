const FORM = document.getElementById("form");

const startExcerise = (exerciseType, number, time) => {
    return new Promise((resolve) => {
    const output = document.getElementById("output");
    output.textContent = `Based on your ${exerciseType}, your ${number} numbers of Reps, this is the amount of ${time} time to complete`; 
    setTimeout(() => {
       output.textContent = "STOP! You've have done enough for your session"
       resolve();
      }, time * 5000);
});
}
FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const Repsnumber = FORM.Repsnumber.value;
    const Time = FORM.Time.value;
    startExcerise(exerciseType, Repsnumber, Time)
    .then(() => {
        console.log("Your excerise is completed.");
    })
    .catch(error => {
       console.log(`ERROR: ${error}`);
    });
    FORM.reset();
});