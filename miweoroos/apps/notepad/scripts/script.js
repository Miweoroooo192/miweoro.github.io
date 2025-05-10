// Note: The positons are changed to not overlap them
function setup() { 
  createCanvas(500, 300); 
  textSize(22); 
  
  text("Notepad ver 0.01", 20, 20); 
  
  // Create a textarea for the input of text 
  inputArea = createElement("textarea"); 
  inputArea.position(30, 150); 
  inputArea.size(400, 120); 
  
  // Create a button for saving text 
  saveBtn = createButton("Save text to file"); 
  saveBtn.position(30, 290); 
  saveBtn.mousePressed(saveFile); 
} 
  
function saveFile() { 
  // Get the value of the textarea 
  // Split according to nextline characters 
  stringList = inputArea.value().split("\n"); 
  
  // Save the strings to file 
  save(stringList, "TextFile.txt"); 
}