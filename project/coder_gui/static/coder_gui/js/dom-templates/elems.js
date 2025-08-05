"use strict";


export function varNameInput(idBase) {
  return `
    <label for="${idBase}-name">Variable name</label>
    <input type="text" name="${idBase}-name" id="${idBase}-name">
  `
}


export function varTypeInput(idBase) {
  return `
    <label for="${idBase}-type">Variable type</label>
    <input type="text" name="${idBase}-type" id="${idBase}-type"></input>
  `
}


export function button(addBtnId) {
  return `<button id="${addBtnId}">Insert expression</button>`
}
