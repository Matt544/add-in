"use strict";

import * as utils from "./utils.js";
import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import {newVarPage} from "./new-var.js";


export const addExpressionPage = {
  init() {
    this._updateHtml();
    this._preparePage();
  },

  _updateHtml() {
    utils.replaceInnerHtml(
      `#${constants.MAIN_OPERATION_SECTION_ID}`,
      templates.addExpressionHtml(),
    );
  },

  _preparePage() {
    document
      .getElementById(constants.CREATE_NEW_VAR_BTN_ID)
      .addEventListener("click", addNewVarChoiceHandler);
    document
      .getElementById(constants.USE_EXISTING_VAR_BTN_ID)
      .addEventListener("click", existingVarChoiceHandler);
  },
}


function addNewVarChoiceHandler() {
  newVarPage.init();
}


function existingVarChoiceHandler() {
  console.log("there");
}
