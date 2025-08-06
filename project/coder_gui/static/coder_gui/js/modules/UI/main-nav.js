"use strict";

import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import * as utils from "./utils.js";
import { initialUI } from "./initial.js";
import {homeUI} from "./home.js";


export const mainNavUI = {
  init() {
    this._updateHtml();
    this._preparePage();
  },

  _updateHtml() {
    const html = templates.mainNav();

    const primaryNav = document.getElementById(
      constants.MAKE_EXPRESSION_OR_LOGIC_BTNS_HOLDER_ID
    );  // change id
    utils.replaceInnerHtml(primaryNav, html);

  },

  _preparePage() {
    document
      .getElementById(constants.HOME_BTN_ID)
      .addEventListener("click", homeClickHandler);
  }
}


function homeClickHandler() {
  homeUI.init();
}