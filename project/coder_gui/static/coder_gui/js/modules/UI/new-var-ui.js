"use strict";

import * as docx from '../docx/docx.js';
import * as editExpressionUI from './edit-expression-ui.js';
import * as utils from './utils.js';
import * as elems from '../../dom-templates/elems.js';


export function newVarHtml({idBase, addBtnId}) {  // change name
  let html = ``;
  html += elems.varNameInput(idBase);
  html += elems.varTypeInput(idBase);
  html += elems.button(addBtnId);

  return html;
}


export function init() {
  // Note: If going between tabs, work will be lost. Not ideal.
  utils.replaceContainerContent(  // why not just provide the content here?
    // newVarHtml, 'new-var-ui-container', { idBase: 'var1', addBtnId: 'add-expression' }
    newVarHtml({ idBase: 'var1', addBtnId: 'add-expression' }),
    'new-var-ui-container'
  );

  utils.reveal('#new-var-ui-container');
  utils.hide('#existing-var-ui-container');

  const addExpressionBtn = document.querySelector("#add-expression");
  utils.enable(addExpressionBtn);

  addExpressionBtn.addEventListener('click', addExpressionHandler);

}


function addExpressionHandler() {
  Word.run(async (context) => {
    docx.addNewExpression(context);
  })
  .then(() => {
    // Insertion succeeded; replace current UI with the edit expression UI
    console.log("Insertion successful");
    editExpressionUI.init();
  })
  .catch((error) => {
    console.error("ERROR inserting text:", error);
  });
}
