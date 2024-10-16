

const getLS = function() {
    const retrievedArry = localStorage.getItem('cfp');
    if(retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }
};
const cfpData = getLS();

const saveLS = function(cfpData) {
    const seralizedARR = JSON.stringify(cfpData);
    localStorage.setItem('cfp', seralizedARR);
}


export {cfpData, saveLS, getLS};