"use strict";

import * as constants from './constants.js'
import * as docx from '../docx/docx.js';
import * as utils from './utils.js';
import * as templates from '../../dom-templates/templates.js';
import {breadcrumbUI} from './breadcrumb.js';


export const editExpressionUI = {
  init(varName, varType) {
    this._updateHtml(varName, varType);
  },

  _updateHtml(varName, varType) {
    utils.replaceInnerHtml(
      `#${constants.MAIN_OPERATION_SECTION_ID}`,
      templates.editExpressionHtml({ varName: varName, varType: varType }),
    );
    breadcrumbUI.init([constants.HOME_PATH_KEY, constants.EDIT_EXPRESSION_PATH_KEY]);
  }
}
