import UnityEngine.UI; // We need this to use the component in the TextBox

var TextBoxOnCheck : int = 0; // Checks if TextBox is on the screen
var MessageBox : GameObject; // Defines the message box as an object
var TextBox : GameObject; // Defines the text box as an object
var QuestBox : GameObject; // Defines the quest box
var QuestText : GameObject; // Defines the text in the Quest box




function OnMouseDown () {
			if (TextBoxOnCheck == 0) {

				TextBoxOnCheck = 1; //Sets the variable to turn the box off
				MessageBox.SetActive(true); //Re-enables the box
				TextBox.GetComponent.<Text>().text = "Villager: Thank you"; //changes the message
				QuestText.GetComponent.<Text>().text = "Active Quest: 'None'"; // input the quest name
			}
				
			else {
				TextBoxOnCheck = 0;
				MessageBox.SetActive(false);
				//TextMessage = "Sayonara";
			}
}

// This bit enables us to use Enter or Escape button to cycle through text boxes

function Update () {
	if (Input.GetButtonDown("Submit")) {
		if (TextBoxOnCheck == 1) {  //This needs to be set so as you need to be in a TextBox to do it
				MessageBox.SetActive(false);
				TextBoxOnCheck = 0;

			}
		}
		
	if (Input.GetButtonDown("Cancel")) {
		if (TextBoxOnCheck == 1) {
				MessageBox.SetActive(false);
				TextBoxOnCheck = 0;

			}
		}
}