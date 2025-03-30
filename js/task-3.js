'use strict';

function getElementWidth(content, padding, border) {
  let contentWidth = Number.parseFloat(content);
  let paddingWidth = Number.parseFloat(padding);
  let borderWidth = Number.parseFloat(border);
  const result = contentWidth + paddingWidth * 2 + borderWidth * 2;
  return result;
}
