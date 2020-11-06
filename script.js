var input1 = document.getElementById("score").value;
var input2 = document.getElementById("lines").value;
var single = document.getElementById("single");
var double = document.getElementById("double");
var triple = document.getElementById("triple");
var tetris = document.getElementById("tetris");
var start = document.getElementById("startButton");

var mvar = 0;
var score = parseInt(input1);
var lines = parseInt(input2);
var tempLines = parseInt(input2) + 60;
var level = Math.floor(tempLines / 10);
var tempLevel = level + 1;

var events = document.getElementById("events");

var eventLog = function(eventString) {
	events.innerHTML += "<p>" + eventString + "</p>";
};

var addSingle = function() {
	var atlines;
	var tempScore2;
	var tempLevel2 = level;
	lines++;
	tempLines++;
	level = Math.floor(tempLines / 10);
	tempLevel = level + 1;
	score += 40 * tempLevel;
	if (score > 999999 && mvar == 0) {
		mvar = 1;
		tempScore2 = score - 999999;
		tempLines2 = tempScore2 / (40 * tempLevel);
		atlines = lines - tempLines2;
		atlines *= 1000;
		atlines = Math.round(atlines);
		atlines /= 1000;
		eventLog("Maxout at " + atlines + " lines");
	}
	if (tempLevel2 == level) {
		eventLog("Single at level " + level + " - " + score + " points, " + lines + " lines");
	} else {
		eventLog("Single into level " + level + " - " + score + " points, " + lines + " lines");
	}
};

var addDouble = function() {
	var atlines;
	var tempScore2;
	var tempLevel2 = level;
	lines += 2;
	tempLines += 2;
	level = Math.floor(tempLines / 10);
	tempLevel = level + 1;
	score += 100 * tempLevel;
	if (score > 999999 && mvar == 0) {
		mvar = 1;
		tempScore2 = score - 999999;
		tempLines2 = tempScore2 / (100 * tempLevel);
		tempLines2 *= 2;
		atlines = lines - tempLines2;
		atlines *= 1000;
		atlines = Math.round(atlines);
		atlines /= 1000;
		eventLog("Maxout at " + atlines + " lines");
	}
	if (tempLevel2 == level) {
		eventLog("Double at level " + level + " - " + score + " points, " + lines + " lines");
	} else {
		eventLog("Double into level " + level + " - " + score + " points, " + lines + " lines");
	}
};

var addTriple = function() {
	var atlines;
	var tempScore2;
	var tempLevel2 = level;
	lines += 3;
	tempLines += 3;
	level = Math.floor(tempLines / 10);
	tempLevel = level + 1;
	score += 300 * tempLevel;
	if (score > 999999 && mvar == 0) {
		mvar = 1;
		tempScore2 = score - 999999;
		tempLines2 = tempScore2 / (300 * tempLevel);
		tempLines2 *= 3;
		atlines = lines - tempLines2;
		atlines *= 1000;
		atlines = Math.round(atlines);
		atlines /= 1000;
		eventLog("Maxout at " + atlines + " lines");
	}
	if (tempLevel2 == level) {
		eventLog("Triple at level " + level + " - " + score + " points, " + lines + " lines");
	} else {
		eventLog("Triple into level " + level + " - " + score + " points, " + lines + " lines");
	}
};

var addTetris = function() {
	var atlines;
	var tempScore2;
	var tempLevel2 = level;
	lines += 4;
	tempLines += 4;
	level = Math.floor(tempLines / 10);
	tempLevel = level + 1;
	score += 1200 * tempLevel;
	if (score > 999999 && mvar == 0) {
		mvar = 1;
		tempScore2 = score - 999999;
		tempLines2 = tempScore2 / (1200 * tempLevel);
		tempLines2 *= 4;
		atlines = lines - tempLines2;
		atlines *= 1000;
		atlines = Math.round(atlines);
		atlines /= 1000;
		eventLog("Maxout at " + atlines + " lines");
	}
	if (tempLevel2 == level) {
		eventLog("Tetris at level " + level + " - " + score + " points, " + lines + " lines");
	} else {
		eventLog("Tetris into level " + level + " - " + score + " points, " + lines + " lines");
	}
};

var startLoop = function() {
	events.innerHTML = "";
	input1 = document.getElementById("score").value;
	input2 = document.getElementById("lines").value;
	mvar = 0;
	score = parseInt(input1);
	lines = parseInt(input2);
	tempLines = parseInt(input2) + 60;
	level = Math.floor(tempLines / 10);
	tempLevel = level + 1;
	eventLog("Last known: Level " + level + ", " + lines + " lines, " + score + " points");
	single.addEventListener("click", addSingle);
	double.addEventListener("click", addDouble);
	triple.addEventListener("click", addTriple);
	tetris.addEventListener("click", addTetris);
	
}

start.addEventListener("click", startLoop);