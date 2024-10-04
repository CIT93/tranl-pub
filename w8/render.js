const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold Members",
    "House Size",
    "Footprint Points",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblBtn(obj, index, data) {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener('click', function(e) {
    data.splice(index, 1);
    renderTbl(data);
  })
  buttonEdit.addEventListener('click', function(e){
    FORM[1].value = obj.fistName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseS;
    data.splice(index, 1);
    renderTbl(data);
  })
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}


export { renderTbl, renderTblHeading };

