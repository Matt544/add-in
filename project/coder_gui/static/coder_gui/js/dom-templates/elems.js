"use strict";

import * as constants from '../modules/UI/constants.js';   // change location, not in modules


export function initialHtml() {
  return `
    <h1>Add new expression</h1>
    <section id="${ constants.VAR_SECTION_ID }">
      <h2>Variable</h2>
      <button id="${constants.CREATE_NEW_VAR_BTN_ID}">Create a new variable</button>
      <button id="${constants.USE_EXISTING_VAR_BTN_ID}">Use an existing variable</button>

      <section class="" id="${constants.VAR_EDIT_SECTION_ID}"></section>
      <section class="" id="${constants.VAR_CHOOSE_EXISTING_SECTION_ID}""></section>
    </section>
  `;
}


export function newVarHtml() {  // varEditSectionHtml
  // inner html of VAR_EDIT_SECTION_ID
  const idBase = constants.VAR1_ID_BASE;

  return `
    <label for="${idBase}-name">Variable name</label>
    <input type="text" name="${idBase}-name" id="${idBase}-name">
    <label for="${idBase}-type">Variable type</label>
    <input type="text" name="${idBase}-type" id="${idBase}-type"></input>
    
    ${button(constants.ADD_EXPRESSION_BTN_ID, 'Insert expression')}
  `;
}


export function editVarHtml({varName, varType}) {  // Edit expression?
  return `
    <h1>Edit expression</h1>
    <section id="${ constants.VAR_SECTION_ID }">
      <h2>Variable</h2>
      ${button("", 'Edit variable')}
      ${button("", 'Use a different variable')}
      
      <section class="" id="${ constants.VAR_DETAIL_SECTION_ID }">
        <div>Variable name</div>
        <div>${varName}</div>
        <div>Variable type</div>
        <div>${varType}</div>
      </section>

      <section class="" id="${ constants.VAR_EDIT_SECTION_ID }"></section>
      <section class="" id="${constants.VAR_CHOOSE_EXISTING_SECTION_ID}""></section>
    </section>

    <section class="" id="${ constants.FUNCTION_SECTION }">
      <h2>Function</h2>
      <p>Choose a function to do something with the variable</p>
    </section>

    <section class="" id="${ constants.FILTERS_SECTION }">
      <h2>Filters</h2>
      <p>Add filters to modify the variable</p>
    </section>
  `;

  // let html = `<h1>Edit expression</h1>`;
  // html += `<h2>Variable</h2>`  // kind of hard coding this structure
  // html += elems.button("", 'Edit variable');
  // html += elems.button("", 'Use a different variable');
  // html += elems.varNameDisplay(varName);
  // html += elems.varTypeDisplay(varType);

  // html += `<h2>Function</h2>`
  // html += `<p>Choose a function to do something with the variable</p>`

  // html += `<h2>Filters</h2>`
  // html += `<p>Add filters to modify the variable</p>`

  // return html;
}


/**
 * 
 * <h1>Edit expression</h1>
 * <h2>Variable</h2>
 * <button>Edit var</button>
 * <button>Use different var</button>
 * <section id="var-section">
 *  <div>Variable name</div>
 *  <div>${name}</div>
 *  <div>Variable type</div>
 *  <div>${type}</div>
 * </section>
 * 
 * <section class="d-none" id="function-section">
 * ...
 * </section>
 * <section class="d-none" id="filter-section">
 * ...
 * </section>
 * 
 */


export function varNameInput(idBase) {  // needed?
  return `
    <label for="${idBase}-name">Variable name</label>
    <input type="text" name="${idBase}-name" id="${idBase}-name">
  `
}


export function varTypeInput(idBase) {  // needed?
  return `
    <label for="${idBase}-type">Variable type</label>
    <input type="text" name="${idBase}-type" id="${idBase}-type"></input>
  `
}

export function varNameDisplay(varName) {  // needed?
  return `
    <div>Variable name</div>
    <div>${varName}</div>
  `
}


export function varTypeDisplay(varType) {  // needed?
  return `
    <div>Variable type</div>
    <div>${varType}</div>
  `
}


export function button(addBtnId, content) {
  return `<button type="button" id="${addBtnId}">${content}</button>`
}
