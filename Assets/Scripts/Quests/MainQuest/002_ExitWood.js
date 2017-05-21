var TheTextBox : GameObject;
var PlayerText : GameObject;
var QuestStatus : GameObject;

function OnTriggerEnter(col : Collider){
	transform.position = Vector3(0,-1000,0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "Looks like a village over that bridge.";
	yield WaitForSeconds(3);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	yield WaitForSeconds(1);
	PlayerText.GetComponent.<Text>().text = "I had better get across the bridge.";
	yield WaitForSeconds(3);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	PlayerText.SetActive(false);
	QuestStatus.GetComponent.<Text>().text = "Active Quest: Reach the Village.";
	this.gameObject.SetActive(false);
	}
	