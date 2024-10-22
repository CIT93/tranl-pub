
const getLS = () => {
    const retrievedArry = localStorage.getItem('cfp');
    if(retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }
};
const cfpData = getLS();

const saveLS = cfpData => {
    const seralizedARR = JSON.stringify(cfpData);
    localStorage.setItem('cfp', seralizedARR);
}


export {cfpData, saveLS, getLS};