import { TBL, FORM } from "./global.js";
import { skincareData, saveLS } from "./storage.js"; // Import necessary storage functions

const renderHeader = () => {
  if (TBL.querySelector("thead")) return; 
  let thead = TBL.querySelector("thead");
  if (!thead) {
    thead = document.createElement("thead");
    TBL.appendChild(thead);
  }
  thead.innerHTML = `
    <tr>
      <th>Skin Concern</th>
      <th>Sensitivity</th>
      <th>Routine</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Purchase Now</th>
    </tr>`;
};

const renderTable = (skinConcern, isSensitive, routine) => {
  let tbody = TBL.querySelector("tbody");
  if (!tbody) {
    tbody = document.createElement("tbody");
    TBL.appendChild(tbody);
  }
  if (!TBL.querySelector("thead")) renderHeader();

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${skinConcern}</td>
    <td>${isSensitive}</td>
    <td>${routine.join(", ")}</td>
  `;
  tbody.appendChild(row);

  const tdEdit = document.createElement("td");
  const tdDel = document.createElement("td");
  const tdShop = document.createElement("td"); 
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  const buttonShop = document.createElement("button"); 

  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  buttonShop.textContent = "Shop Here";

  tdEdit.appendChild(buttonEdit);
  tdDel.appendChild(buttonDel);
  tdShop.appendChild(buttonShop);
  row.appendChild(tdEdit);
  row.appendChild(tdDel);
  row.appendChild(tdShop);

  buttonShop.addEventListener("click", () => {
    window.open("https://www.yesstyle.com/en/home.html", "_blank");
  });

  buttonEdit.addEventListener("click", () => {
  document.getElementById("skinConcern").value = skinConcern;
  document.getElementById("sensitive").value = isSensitive;
  });

  buttonDel.addEventListener("click", () => {
    const index = skincareData.findIndex(
      (entry) =>
        entry.skinConcern === skinConcern && entry.isSensitive === isSensitive
    );
    if (index !== -1) {
      skincareData.splice(index, 1); 
      saveLS(); 
      updateTable(); 
    }
  });
};

const updateTable = () => {
  const tbody = TBL.querySelector("tbody");
  if (tbody) tbody.remove();
  skincareData.forEach((entry) =>
    renderTable(entry.skinConcern, entry.isSensitive, entry.routine)
  );
};

export { renderTable, renderHeader, updateTable };
