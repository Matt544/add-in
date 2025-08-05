"use strict";

import * as constants from '../modules/constants.js';   // change location, not in modules
import * as utils from '../modules/UI/utils.js';   // change location, not in modules


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


export function editVarHtml() {
  // For inner html of VAR_EDIT_SECTION_ID
  const idBase = constants.VAR1_ID_BASE;
  // // e.g. var1-name-input
  // const nameInputId = `${constants.VAR1_ID_BASE}-${constants.NAME_INPUT_SUFFIX}`;
  // // e.g. var1-type-input
  // const typeInputId = `${constants.VAR1_ID_BASE}-${constants.NAME_INPUT_SUFFIX}`;
  // // helper for these? Used elsewhere

  const [nameInputId, typeInputId] = utils.getVarNameAndTypeInputIds(
    constants.VAR1_ID_BASE
  );
  const [nameLabelId, typeLabelId] = utils.getVarNameAndTypeLabelIds(
    constants.VAR1_ID_BASE
  )

  return `
    <label for="${nameInputId}" id="${nameLabelId}">Variable name</label>
    <input type="text" name="${nameInputId}" id="${nameInputId}">

    <label for="${typeInputId}" id="${typeLabelId}">Variable type</label>
    <input type="text" name="${typeInputId}" id="${typeInputId}"></input>
    
    ${button(constants.ADD_EXPRESSION_BTN_ID, 'Insert expression')}
  `;
}


export function editExpressionHtml({varName, varType}) {
  // For inner html of VAR_EDIT_SECTION_ID
  // const idBase = constants.VAR1_ID_BASE;
  // // e.g. var1-name-input
  // const nameInputId = `${constants.VAR1_ID_BASE}-${constants.NAME_INPUT_SUFFIX}`;
  // // e.g. var1-type-input
  // const typeInputId = `${constants.VAR1_ID_BASE}-${constants.NAME_INPUT_SUFFIX}`;
  // helper for these? Used elsewhere
  // doc that the value contains input but it may not be for an input elem. Could be the
  // div displaying the value that was previously inputted.

  const [nameInputId, typeInputId] = utils.getVarNameAndTypeInputIds(
    constants.VAR1_ID_BASE
  );

  // nameInputId -> Id ?? Not just used for name attr?

  // const nameLabelId = `${constants.VAR1_ID_BASE}-${constants.NAME_LEBEL_SUFFIX}`;
  // const typeLabelId = `${constants.VAR1_ID_BASE}-${constants.TYPE_LEBEL_SUFFIX}`;
  const [nameLabelId, typeLabelId] = utils.getVarNameAndTypeLabelIds(
    constants.VAR1_ID_BASE
  )

  return `
    <h1>Edit expression</h1>
    <section id="${ constants.VAR_SECTION_ID }">
      <h2>Variable</h2>
      ${button("", 'Edit variable')}
      ${button("", 'Use a different variable')}
      
      <section class="" id="${ constants.VAR_DETAIL_SECTION_ID }">
        <div id="${nameLabelId}">Variable name</div>
        <div id="${nameInputId}">${varName}</div>

        <div id="${typeLabelId}">Variable type</div>
        <div id="${typeInputId}">${varType}</div>
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
}


export function button(addBtnId, content) {
  return `<button type="button" id="${addBtnId}">${content}</button>`
}
