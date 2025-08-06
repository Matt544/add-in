"use strict";

import * as constants from './constants.js';


export function appendHtml(elemOrSelector, html) {
  // For future: make so it takes an insert location as an arg, and remane to insertHtml
  const elem = safeGetElem(elemOrSelector);
  elem.insertAdjacentHTML('beforeend', html);
}


export function replaceInnerHtml(containerIdOrElem, html) {
  safeGetElem(containerIdOrElem).innerHTML = html;
}


export function reveal(elemOrSelector) {
  safeGetElem(elemOrSelector).classList.remove('d-none');
}


export function hide(elemOrSelector) {
  safeGetElem(elemOrSelector).classList.add('d-none');
}


/**
 * Gets the id values that should be on *either* the variable and and type `input`s *or* 
 * the name and type display fields (which will not be `input`s)
 */
export function getVarNameAndTypeInputIds(id_base) {
  // e.g. var1-name-input
  const nameInputId = `${id_base}-${constants.NAME_INPUT_SUFFIX}`;
  // e.g. var1-type-input
  const typeInputId = `${id_base}-${constants.TYPE_INPUT_SUFFIX}`;
  
  return [nameInputId, typeInputId];
}

/**
 * Gets the ids that should be on *either* the variable and and type `label`s *or* the
 * name and type display fields (which will not be `label`s)
 */
export function getVarNameAndTypeLabelIds(id_base) {
  // e.g. var1-name-label
  const nameLabelId = `${id_base}-${constants.NAME_LEBEL_SUFFIX}`;
  // e.g. var1-type-label
  const typeLabelId = `${id_base}-${constants.TYPE_LEBEL_SUFFIX}`;
  
  return [nameLabelId, typeLabelId];
}


function safeGetElem(elemOrSelector) {
  if (typeof elemOrSelector === 'string') {
    return document.querySelector(elemOrSelector);
  } else if (elemOrSelector instanceof HTMLElement) {
    return elemOrSelector;
  } else {
    throw new Error(`safeGetElem: Invalid selector type: ${typeof elemOrSelector}`);
  }
}
