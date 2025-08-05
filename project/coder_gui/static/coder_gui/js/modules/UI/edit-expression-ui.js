"use strict";

import * as constants from '../constants.js'
import * as docx from '../docx/docx.js';
import * as utils from './utils.js';
import * as elems from '../../dom-templates/elems.js';


export function init(varName, varType) {
  utils.replaceContainerContent(
    constants.PARENT_CONTAINER_ID,
    elems.editExpressionHtml({ varName: varName, varType: varType }),
  );
}
