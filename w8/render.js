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
    console.log('Hello from inside the delete button');
    console.log(e);
    // my attempt, reference: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
    // the output looks normal and functioning, but i'm not sure if that fits the requirements, so I'll commit and watch the solutions
    data.splice(index, 1);
    renderTbl(data);
  })
  buttonEdit.addEventListener('click', function(e){
    FORM[1].value = obj.fistname
    FORM[1].value = obj.houseM;
    FORM[1].value = obj.houseS;
    FORM[1].value = obj.cfpTotal;
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
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  // data.forEach(function (obj) {
  //   const tr = document.createElement("tr");
  //   for (const [key, value] of Object.entries(obj)) {
  //     if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
  //       const td = document.createElement("td");
  //       td.textContent = value;
  //       tr.appendChild(td);
  //     }
  //   }
  //   const td = document.createElement("td");
  //   const buttonEdit = document.createElement("button");
  //   const buttonDel = document.createElement("button");
  //   buttonEdit.textContent = "Edit";
  //   buttonDel.textContent = "Del";
  //   td.appendChild(buttonEdit);
  //   td.appendChild(buttonDel);
  //   tr.appendChild(td);
  //   tbody.appendChild(tr);
  // });
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };

