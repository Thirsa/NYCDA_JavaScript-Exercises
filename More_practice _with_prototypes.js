// var PlaneInfo = 

function PlaneInfo(pilot, copilot, fuelllevel) {
	this.pilot = pilot;
	this.copilot = copilot;
	this.fuelllevel = fuelllevel;
};

PlaneInfo.prototype.isReady = function () {
	// console.log (this.pilot.length)
	if(this.pilot.length > 0 
		&& this.copilot.length > 0 
		&& this.pilot !== this.copilot 
		&& this.fuelllevel > 95 
		&& this.fuelllevel < 100)
	{
		return true
	}
	else{
		return false
	}
};

var firstPlane = new PlaneInfo ("Red Baron", "Snoopy", 97);
var secondPlane = new PlaneInfo ("Alfred", "Alfred", 98);
var thirdPlane = new PlaneInfo ("A", "B", 50);

console.log (firstPlane.isReady());
console.log (secondPlane.isReady());
console.log (thirdPlane.isReady());
