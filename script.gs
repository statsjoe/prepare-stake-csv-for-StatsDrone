/**
 * This function reverses the sign of all numeric values in columns C to K,
 * starting from the second row in the active sheet.
 */
function reverseSignInRange() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Define the range from column C to K starting from the second row
  var range = sheet.getRange("C2:K");  // Adjust the range as needed
  var values = range.getValues();
  
  // Iterate through each cell in the range
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      var cellValue = values[i][j];
      // Check if the cell contains a number and reverse its sign
      if (typeof cellValue === 'number') {
        values[i][j] = -cellValue;  // Reverse the sign
      }
    }
  }
  
  // Set the updated values back to the range
  range.setValues(values);
}

/**
 * This function adds a custom menu to the Google Sheets UI,
 * allowing users to run the reverseSignInRange function from the menu.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Create a custom menu with an item to run the reverseSignInRange function
  ui.createMenu('Custom Scripts')
    .addItem('Reverse Sign in Range', 'reverseSignInRange')
    .addToUi();
}
