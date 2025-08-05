"use strict";


// const initialChoiceUI = await import ('../modules/initial-choice-ui.js');

Office.onReady(async () => {
  const initialChoiceUI = await import('../modules/UI/initial-choice-ui.js');
  initialChoiceUI.init();
});