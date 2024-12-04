import { FORM, submitError, skinConcern, isSensitive, TBL } from './global.js';
import { renderTable, updateTable } from './render.js';
import { skincareData, saveLS, loadLS } from './storage.js';
import SkincareDecision from './decision.js';

const decision = new SkincareDecision();

loadLS();

skincareData.forEach(data => {
  renderTable(data.skinConcern, data.isSensitive, data.routine);
});

updateTable();


FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!skinConcern.value || !isSensitive.value) {
    submitError.textContent = "Please select both your skin concern and sensitivity.";
    return;
  }
  submitError.textContent = ""; 
  const routine = decision.getRoutine(skinConcern.value, isSensitive.value);
  const existing = skincareData.find(data => data.skinConcern === skinConcern.value && data.isSensitive === isSensitive.value);
  if (existing) {
    existing.routine = routine; 
  } else {
    skincareData.push({ skinConcern: skinConcern.value, isSensitive: isSensitive.value, routine });
  }
  renderTable(skinConcern.value, isSensitive.value, routine);
  saveLS();
  FORM.reset(); 
});
