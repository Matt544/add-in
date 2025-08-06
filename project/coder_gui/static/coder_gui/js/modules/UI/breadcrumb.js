"use strict";

import * as constants from "./constants.js";
import * as templates from "../../dom-templates/templates.js";
import * as utils from "./utils.js";
import {homeUI} from "./home.js";


export const breadcrumbUI = {
  init(pathKeys) {
    this._updateHtml(pathKeys);
    this._preparePage(pathKeys);
  },

  _updateHtml(pathKeys) {
    const html = templates.breadcrumb(pathKeys);
    utils.replaceInnerHtml(`#${constants.BREADCRUMB_HOLDER_ID}`, html);
  },

  _preparePage(pathKeys) {
    // Add an appropriate event listener for each link in the breadcrumb path (i.e. for
    // every segment but the last, which is the current UI and doesn't need a link)

    if (pathKeys.length > 1) {
      const linkedPathKeys = pathKeys.slice(0, -1);

      for (const key of linkedPathKeys) {
      document
        .getElementById(constants.PATH_MAP[key].id)
        .addEventListener("click", homeClickHandler);  
          // AHHHH! Handlers need to be in the map too? Or a separate map for here only?
      }  // need to map id and segment
    }

    // Only add if it exists. It will not if we're alread at the home UI.
    // document
    //   .getElementById(constants.HOME_BTN_ID)
    //   .addEventListener("click", homeClickHandler);
  }
}


function homeClickHandler() {
  homeUI.init();
}
