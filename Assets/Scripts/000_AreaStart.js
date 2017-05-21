var BlackScreen : GameObject;
var FadeScreen : GameObject;

function Start(){
	yield WaitForSeconds(1);
	FadeScreen.GetComponent("Animator").enabled=true;
	BlackScreen.SetActive(false);
	yield WaitForSeconds(0.99);
	FadeScreen.GetComponent("Animator").enabled=false;
	FadeScreen.SetActive(false);
	}