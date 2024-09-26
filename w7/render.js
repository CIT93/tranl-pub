const TBL = document.getElementById("tab-data");

function renderTblHeading () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold Members", "House Size", "Footprint Points", "Actions",];
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(tr);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");

  // My attempt at the new forEach data
  data.forEach(function(inputsObj) {
     const tr = document.createElement("tr");
     const values = [inputsObj.firstName,inputsObj.houseM, inputsObj.houseS, inputsObj.cfpTotal];
     values.forEach(function(text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
     });

     // Buttons
     const td = document.createElement("td");
     const buttonEdit = document.createElement("button");
     const buttonDel = document.createElement("button");
     buttonEdit.textContent = "Edit";
     buttonDel.textContent = "Del";
     td.appendChild(buttonEdit);
     td.appendChild(buttonDel);
     tr.appendChild(td);
     tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };

// I tried following the instructions, got lost for a good while and had to keep track of so many lines of codes, and a part of it is still confusing but hopefully I fulfill the requirements? The website manage to work so yay! However, if not there's anything wrong or missing, any feedback is appreciated! Thank you!