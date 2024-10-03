const TBL = document.getElementById("tab-data");

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

function renderTblBtn(index, data) {
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

// Code challenge: First I comment out everything that need to redo, don't want to delete it since in case i need it
// then I copy down some previously coded elements into the function such as the buttons and the appendchild
// the result shows some output but wasn't exactly correct so I'll watch the coding solutions
