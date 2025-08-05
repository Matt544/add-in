"use strict";

import * as utils from './utils.js';
import * as constants from '../constants.js'
import * as elems from '../../dom-templates/elems.js';  // change name if not just elems
import * as newVarUI from './new-var-ui.js';


export function init() {
  // add the initial container div
  const div = document.createElement('div');
  div.id = constants.PARENT_CONTAINER_ID;
  document.body.append(div);

  // Add the initail html
  utils.replaceContainerContent(constants.PARENT_CONTAINER_ID, elems.initialHtml());

  // Attach event listeners to 'use new/existing' buttons
  const newVarBtn = container.querySelector(`#${constants.CREATE_NEW_VAR_BTN_ID}`); 
  newVarBtn.addEventListener('click', addNewVarChoiceHandler);
  const existingVarBtn = container.querySelector(
    `#${constants.USE_EXISTING_VAR_BTN_ID}`
  );
  existingVarBtn.addEventListener('click', existingVarChoiceHandler);
}


function addNewVarChoiceHandler() {
  newVarUI.init();
}


function existingVarChoiceHandler() {
  console.log("there");
}
