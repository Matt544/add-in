export async function addNewExpression(context, varName) {
  const range = context.document.getSelection();
  range.insertText(`{{ ${varName} }}`, Word.InsertLocation.replace);
  await context.sync();
}
