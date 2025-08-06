"use strict";


Office.onReady(async () => {
  const { initialUI } = await import('../modules/UI/initial.js');
  initialUI.init();
});
