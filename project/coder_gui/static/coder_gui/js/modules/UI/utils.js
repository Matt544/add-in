"use strict";


// export function replaceContainerContent(contentGetter, containerId, args = {}) {
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
