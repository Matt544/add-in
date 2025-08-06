"use strict";


Office.onReady(async () => {
  const initialChoiceUI = await import('../modules/UI/initial-view.js');
  initialChoiceUI.init();
});