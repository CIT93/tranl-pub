const skincareData = [];

function saveLS() {
  const serializedData = JSON.stringify(skincareData);
  localStorage.setItem("skincare", serializedData);
}

function loadLS() {
  const retrievedData = localStorage.getItem("skincare");
  if (retrievedData !== null) {
    skincareData.push(...JSON.parse(retrievedData));
  }
}

export { skincareData, saveLS, loadLS };