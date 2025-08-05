"use strict";

import * as constants from './constants.js'
import * as docx from '../docx/docx.js';
import * as utils from './utils.js';
import * as elems from '../../dom-templates/elems.js';


// export function editVarHtml({varName, varType}) {
//   let html = `<h1>Edit expression</h1>`;
//   html += `<h2>Variable</h2>`  // kind of hard coding this structure
//   html += elems.button("", 'Edit variable');
//   html += elems.button("", 'Use a different variable');
//   html += elems.varNameDisplay(varName);
//   html += elems.varTypeDisplay(varType);

//   html += `<h2>Function</h2>`
//   html += `<p>Choose a function to do something with the variable</p>`

//   html += `<h2>Filters</h2>`
//   html += `<p>Add filters to modify the variable</p>`

//   return html;
// }


export function init(varName, varType) {
  utils.replaceContainerContent(
    constants.PARENT_CONTAINER_ID,
    elems.editVarHtml({ varName: varName, varType: varType }),
  );
}


// Better for html:
// base.js:
/**
 * 
 * <h1>${heading1}</h1>
 * ${use(some-template, {var1: VAR1, var2, VAR2})}
 * 
 */
// initial.js:
/**
 * 
 * <h1>Add new expression</h1>
 * <h2>Variable</h2>
 * <button id="${constants.CREATE_NEW_VAR_BTN_ID}">Create a new variable</button>
 * <button id="${constants.USE_EXISTING_VAR_BTN_ID}">Use an existing variable</button>
 *
 * <section class="" id="${constants.NEW_VAR_UI_CONTAINER_ID}"></section>
 * <section class="" id="${constants.EXISTING_VAR_UI_CONTAINER_ID}""></section>
 *
 */
// newvar.js:
/**
 * 
 * // innerHtml of #new-var-section
 * <label for="var1-name">Variable name</label>
 * <input type="text" name="var1-name" id="var1-name">
 * <label for="var1-type">Variable type</label>
 * <input type="text" name="var1-type" id="var1-type">
 * <button type="button" id="add-expression-btn">Insert expression</button>
 * 
 */
// editvar.js:
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