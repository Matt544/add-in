"use strict";

import * as constants from './constants.js';
import * as docx from '../docx/docx.js';
import * as utils from './utils.js';
import * as templates from '../../dom-templates/templates.js';
import {breadcrumbUI} from './breadcrumb.js';
import {editExpressionUI} from './edit-expression.js';


export const newVarUI = {
  // Note: If going between tabs, will work be lost? Not ideal.
  init() {
    this._updateHtml();
    this._preparePage();
  },

  _updateHtml() {
    utils.replaceInnerHtml(
      `#${constants.VAR_EDIT_SECTION_ID}`,
      templates.editVarHtml(),
    );
  },

  _preparePage() {
    utils.reveal(`#${constants.VAR_EDIT_SECTION_ID}`);
    utils.hide(`#${constants.VAR_CHOOSE_EXISTING_SECTION_ID}`);

    const insertExpressionBtn = document.querySelector(
      `#${constants.INSERT_EXPRESSION_BTN_ID}`
    );
    insertExpressionBtn.addEventListener('click', insertExpressionHandler);
  }
}


function insertExpressionHandler(e) {
  const [varName, varType] = getVarNameAndType(e);

  Word.run(async (context) => {
    docx.insertNewExpression(context, varName);
  })
  .then(() => {
    // Insertion succeeded; replace the current UI with the edit expression UI
    // editExpressionUI.init(varName, varType);
    editExpressionUI.init(varName, varType);
    // breadcrumbUI.init([constants.HOME_PATH_KEY, constants.EDIT_EXPRESSION_PATH_KEY]);
      // Should this be done in editExpressionUI?
  })
  .catch((error) => {
    console.error("Error inserting text:", error);
  });
}


function getVarNameAndType(e) {
  const [nameInputId, typeInputId] = utils.getVarNameAndTypeInputIds(
    constants.VAR1_ID_BASE
  );

  const varName = e.target.parentElement.querySelector(`[name="${nameInputId}"]`).value;
  const varType = e.target.parentElement.querySelector(`[name="${typeInputId}"]`).value;

  return [varName, varType];
}
