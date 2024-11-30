import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "First",
    "Last",
    "Footprint Total",
    "Actions",
  ];
  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
  saveLS(data);
  data.splice(index, 1);
  renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener('click', e => {
    onUpdate(index, data);
  })
  buttonEdit.addEventListener('click', e => {
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.houses.value = obj.houseMembers;
    FORM.housem.value = obj.houseSize;
    FORM.foodChoice.value = obj.foodChoice;
    FORM.foodSource.value = obj.foodSource;
    FORM.water.value = obj.waterConsumPoints.toString();
    onUpdate(index, data);
  })
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach ((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"];
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })  
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = data => {
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data)
  }
}

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id")
  let newTR = tableRef.insertRow(-1)
  let newTD = newTR.insertCell(0)
  let newTD_1 = newTR.insertCell(0)
  let newTD_2 = newTR.insertCell(0)
  let newLabl = document.createTextNode(`Average Footprint`)
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);

}

export { renderTbl, renderTblHeading };

