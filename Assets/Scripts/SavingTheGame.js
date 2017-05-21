import System.IO;

var fileName = "savegame.data";

function OnTriggerEnter(col : Collider){
	var OurFile = File.CreateText(fileName);
	OurFile.WriteLine("savingthegame");
	OurFile.WriteLine("load10coins");
	OurFile.Close();
	}