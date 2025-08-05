"use strict";

import * as constants from '../constants.js';


export function replaceContainerContent(containerId, html) {
    const container = document.getElementById(containerId);
    container.innerHTML = html;
}


export function reveal(selector) {
  document.querySelector(selector).classList.remove('d-none');
}


export function hide(selector) {
  document.querySelector(selector).classList.add('d-none');
}


export function enable(selector) {  // change to handle more than one?
  if (typeof(selector) === 'string') {
    selector = document.querySelector(selector);
  }
  selector.removeAttribute('disabled');
}


export function getVarNameAndTypeInputIds(id_base) {
  // e.g. var1-name-input
  const nameInputId = `${id_base}-${constants.NAME_INPUT_SUFFIX}`;
  // e.g. var1-type-input
  const typeInputId = `${id_base}-${constants.TYPE_INPUT_SUFFIX}`;

  return [nameInputId, typeInputId];
}


export function getVarNameAndTypeLabelIds(id_base) {
  const nameLabelId = `${id_base}-${constants.NAME_LEBEL_SUFFIX}`;
  const typeLabelId = `${id_base}-${constants.TYPE_LEBEL_SUFFIX}`;

  return [nameLabelId, typeLabelId];
}
