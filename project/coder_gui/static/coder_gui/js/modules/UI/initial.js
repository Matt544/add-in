"use strict";

import * as utils from "./utils.js";
import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import {addExpressionUI} from "./add-expression.js";


export const initialUI = {
  init() {
    this._updateHtml();
    this._preparePage();
  },

  _updateHtml() {
    utils.appendHtml("body", templates.initialHtml());
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
  // The user's first action will necssarily be to either choose to create an expression
  // or a logic block. After that, the buttons for those actions should indicate that
  // clicking will refresh (i.e. navigate away from where the user is current at) and
  // create *another* express or block.
  // I.e. Add that indicator here. It should remain moving forward.
  const btnContentPrefixSpan = document.getElementById(
    constants.MAKE_EXPRESSION_OR_LOGIC_BTNS_PREFIX_ID,
  );

  if (!btnContentPrefixSpan.hasAttribute("data-refresh-indicator-added")) {
    // This is the first action. Add the refresh indicator to the button section.
    utils.replaceInnerHtml(btnContentPrefixSpan, "🔁 create another");
    btnContentPrefixSpan.setAttribute("data-refresh-indicator-added", "true");
  }
  addExpressionUI.init();
}


function makeLogicChoiceHandler() {
  console.log("logic");
}