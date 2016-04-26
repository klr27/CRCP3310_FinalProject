function circularHeatChart(name, width, height, ringHeight) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.ringHeight = ringHeight;
	var radius = Math.min(width, height) / 2;
	var numRings = 9;
	var numArcs = 12;
	var ringLabels = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
	var arcLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

//what this needs to create:
//9 rings for each year broken into 12 segments for each month
//Labels
//Color segments based on data from csv

