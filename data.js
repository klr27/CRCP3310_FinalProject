const CSV = "data.csv";
const USER = 0;
const DATE = 1;
const INSERT = 2;
const DELETE = 3;

//template for basic user
//function User(name, insertions, deletions) {
//	this.name = name;
//	this.insertions = insertions;
//	this.deletions = deletions;
//	//insertion object array
//	//deletion object array
//}

//template for change object
//function Change(number, year, month)
//this is the same model for inserts and deletes
//we would just create two different object arrays for each user 

//var data = d3.csv.parseRows(CSV);

var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.insertions; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


d3.csv("data.csv", type, function(error, data) {
  if (error) throw error;

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.name); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.name; });
});

function type(d) {
  d.insertions = +d.insertions;
  return d;
}

//var parsedCSV = d3.csv.parseRows(data);

//var container = d3.select("body")
//                    .append("theTable")
//                    .selectAll("tr")
//                        .data(parsedCSV).enter()
//                        .append("tr")
//                    .selectAll("td")
//                        .data(function(d) { return d; }).enter()
 //                       .append("td")
 //                       .text(function(d) { return d; });
 //           });

//function drawViz() {
//   document.getElementById("example").innerHTML = data;
//}

//window.addEventListener('load', drawViz, false );


//want to traverse data and get all the users and create new User
//with name and default values for insertions and deletions as 0
//ideally each new user would be added to an array of User objects


//then with each user we want to traverse data and add
//insertions and deletions to User object
//with these we can find total changes for each user easily 
//to help create inner ring for vis

//We also want to traverse each user and get the date of
//changes so we can use that for our vis showing the percentage
//of insertions and deletions based on year and month
//perhaps this all gets encapsulated into insertion and deletion 
//object arrays within a User object????

//Example/Idea
//for (var i=0; i<data.length, i++){
	//for (var j=0; j<users.length, j++){
		//if (users[j].name === data[i,USER]) {

			//get inserts and convert from string to number
			//add to users[j].insertions (should probably rethink some var names)
			//get delets and convert from string to number
			//add to users[j].deletions
			//get insert/delete year and month (can later add in day/time if we want)
			//create new insert and delete objects in 
			//users[j].inserts and user[j].deletes
			

		//}
	//}
//}


