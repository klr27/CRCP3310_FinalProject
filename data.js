const CSV = "data.csv";
const USER = 0;
const DATE = 1;
const INSERT = 2;
const DELETE = 3;

function User(name, insertions, deletions) {
	this.name = name;
	this.insertions = insertions;
	this.deletions = deletions;
}

var data = d3.csv.parseRows(CSV);

function 

