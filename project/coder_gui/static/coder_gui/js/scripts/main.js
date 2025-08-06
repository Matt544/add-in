"use strict";


Office.onReady(async () => {
  const { initialPage } = await import('../modules/UI/initial-view.js');
  initialPage.init();
});
