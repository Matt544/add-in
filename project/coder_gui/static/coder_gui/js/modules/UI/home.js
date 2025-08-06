"use strict";

import * as utils from "./utils.js";
import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import {breadcrumbUI} from "./breadcrumb.js";
import {addExpressionUI} from "./add-expression.js";


export const homeUI = {
  init() {
    this._updateHtml();
    this._preparePage();
  },

  _updateHtml() {
    utils.replaceInnerHtml(`#${constants.PARENT_CONTAINER_ID}`, templates.home());
    breadcrumbUI.init([constants.HOME_PATH_KEY]);
  },

  _preparePage() {
    // Attach event listeners to the 'add expression/logic' buttons
    document
      .getElementById(constants.MAKE_EXPRESSION_BTN_ID)
      .addEventListener("click", makeExpressionChoiceHandler);
    document
      .getElementById(constants.MAKE_LOGIC_BTN_ID)
      .addEventListener("click", makeLogicChoiceHandler);
  }
}


function makeExpressionChoiceHandler() {
  // breadcrumbUI.init([constants.HOME_PATH_KEY, constants.CREATE_EXPRESSION_PATH_KEY]);
  addExpressionUI.init();
}


function makeLogicChoiceHandler() {
  console.log("logic");
}
