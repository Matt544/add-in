"use strict";

import * as utils from "./utils.js";
import * as templates from "../../dom-templates/templates.js";
import {homeUI} from "./home.js";


export const initialUI = {
  init() {
    this._updateHtml();
  },

  _updateHtml() {
    // Add the initial hmtl parent container and initialize the home page
    utils.appendHtml("body", templates.initialHtml());
    homeUI.init();
  },
}
