const cfpData = [];

function saveLS() {
    const seralizedARR = JSON.stringify(cfpData);
    localStorage.setItem("cfp", seralizedARR);
}

function getLS(cfpData) {
    const retrievedArry = localStorage.getItem("cfp");
    if(retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }
}

export {cfpData, saveLS, getLS};