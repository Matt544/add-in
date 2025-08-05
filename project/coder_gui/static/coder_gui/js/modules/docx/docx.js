export async function addNewExpression(context) {
  const range = context.document.getSelection();
  range.insertText("SOME_TEXT", Word.InsertLocation.replace);
  await context.sync();
}
