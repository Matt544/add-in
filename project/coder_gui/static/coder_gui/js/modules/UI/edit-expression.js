"use strict";

import * as constants from './constants.js'
import * as docx from '../docx/docx.js';
import * as utils from './utils.js';
import * as templates from '../../dom-templates/templates.js';


export const editExpressionUI = {
  init(varName, varType) {
    this._updateHtml(varName, varType);
  },

  _updateHtml(varName, varType) {
    utils.replaceInnerHtml(
      `#${constants.MAIN_OPERATION_SECTION_ID}`,
      templates.editExpressionHtml({ varName: varName, varType: varType }),
    );
  }
}
