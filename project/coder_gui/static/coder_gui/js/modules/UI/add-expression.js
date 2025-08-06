"use strict";

import * as utils from "./utils.js";
import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import * as newVarUI from "./new-var-ui.js";

export function init() {
  utils.replaceInnerHtml(
    `#${constants.MAIN_OPERATION_SECTION_ID}`,
    templates.addExpressionHtml(),
  );

  // Attach event listeners to 'use new/existing' buttons
  document
    .getElementById(constants.CREATE_NEW_VAR_BTN_ID)
    .addEventListener("click", addNewVarChoiceHandler);
  document
    .getElementById(constants.USE_EXISTING_VAR_BTN_ID)
    .addEventListener("click", existingVarChoiceHandler);
}

function addNewVarChoiceHandler() {
  newVarUI.init();
}

function existingVarChoiceHandler() {
  console.log("there");
}
