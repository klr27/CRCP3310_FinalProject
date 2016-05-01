// Basic object structure for data parsing
function UserView (userName, totalCommits, janArray, febArray, marArray, aprArray, mayArray, junArray, julArray, augArray, sepArray, octArray, novArray, decArray) {
  this.userName = userName;
  this.totalCommits = totalCommits;
  this.janArray = janArray;  //each month is 10 element array all, 2008,...2016  insertions+deletions
  this.febArray = febArray;
  this.marArray = marArray;
  this.aprArray = aprArray;
  this.mayArray = mayArray;
  this.junArray = junArray;
  this.julArray = julArray;
  this.augArray = augArray;
  this.sepArray = sepArray;
  this.octArray = octArray;
  this.novArray = novArray;
  this.decArray = decArray; 
}
// Parse csv into arrays for use by d3
var allUsers = [];
var userCount = 1;
allUsers[0] = new UserView ('All Users', 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
d3.csv("data.csv", function(error, userData) {
var whichMonth;
var yearIndex;
var commitments;
var foundIt = false;
for (i = 0; i < userData.length; i ++) { // step through each line in csv
  foundIt = false;
  commitments = parseInt(userData[i].insertions) + parseInt(userData[i].deletions);
  yearIndex = userData[i].year - 2007; // set the correct array index
  whichMonth = userData[i].month;  
  for (j = 0; j < allUsers.length; j ++) { // check exesting user list for the name
    if (userData[i].name == allUsers[j].userName) {  // if the name is exists
      foundIt = true;  // set flag
      allUsers[j].totalCommits = parseInt(allUsers[j].totalCommits) + 1;  // increase commit counter for that user
      allUsers[0].totalCommits = parseInt(allUsers[0].totalCommits) + 1;  // increase commit counter for 'all users'
        switch (whichMonth) {
        case "Jan":
            allUsers[j].janArray[0] = parseInt(allUsers[j].janArray[0]) + commitments;
            allUsers[j].janArray[yearIndex] = parseInt(allUsers[j].janArray[yearIndex]) + commitments;
            allUsers[0].janArray[0] = parseInt(allUsers[0].janArray[0]) + commitments;
            allUsers[0].janArray[yearIndex] = parseInt(allUsers[0].janArray[yearIndex]) + commitments;
            break;
        case "Feb":
            allUsers[j].febArray[0] = allUsers[j].febArray[0] + parseInt(commitments);
            allUsers[j].febArray[yearIndex] = allUsers[j].febArray[yearIndex] + parseInt(commitments);
            allUsers[0].febArray[0] = parseInt(allUsers[0].febArray[0]) + commitments;
            allUsers[0].febArray[yearIndex] = parseInt(allUsers[0].febArray[yearIndex]) + commitments;
            break;
        case "Mar":
            allUsers[j].marArray[0] = parseInt(allUsers[j].marArray[0]) + commitments;
            allUsers[j].marArray[yearIndex] = parseInt(allUsers[j].marArray[yearIndex]) + commitments;
            allUsers[0].marArray[0] = parseInt(allUsers[0].marArray[0]) + commitments;
            allUsers[0].marArray[yearIndex] = parseInt(allUsers[0].marArray[yearIndex]) + commitments;
            break;
        case "Apr":
            allUsers[j].aprArray[0] = parseInt(allUsers[j].aprArray[0]) + commitments;
            allUsers[j].aprArray[yearIndex] = parseInt(allUsers[j].aprArray[yearIndex]) + commitments;
            allUsers[0].aprArray[0] = parseInt(allUsers[0].aprArray[0]) + commitments;
            allUsers[0].aprArray[yearIndex] = parseInt(allUsers[0].aprArray[yearIndex]) + commitments;
            break;
        case "May":
            allUsers[j].mayArray[0] = parseInt(allUsers[j].mayArray[0]) + commitments;
            allUsers[j].mayArray[yearIndex] = parseInt(allUsers[j].mayArray[yearIndex]) + commitments;
            allUsers[0].mayArray[0] = parseInt(allUsers[0].mayArray[0]) + commitments;
            allUsers[0].mayArray[yearIndex] = parseInt(allUsers[0].mayArray[yearIndex]) + commitments;
            break;
        case "Jun":
            allUsers[j].junArray[0] = parseInt(allUsers[j].junArray[0]) + commitments;
            allUsers[j].junArray[yearIndex] = parseInt(allUsers[j].junArray[yearIndex]) + commitments;
            allUsers[0].junArray[0] = parseInt(allUsers[0].junArray[0]) + commitments;
            allUsers[0].junArray[yearIndex] = parseInt(allUsers[0].junArray[yearIndex]) + commitments;
            break;
        case "Jul":
            allUsers[j].julArray[0] = parseInt(allUsers[j].julArray[0]) + commitments;
            allUsers[j].julArray[yearIndex] = parseInt(allUsers[j].julArray[yearIndex]) + commitments;
            allUsers[0].julArray[0] = parseInt(allUsers[0].julArray[0]) + commitments;
            allUsers[0].julArray[yearIndex] = parseInt(allUsers[0].julArray[yearIndex]) + commitments;
            break;
        case "Aug":
            allUsers[j].augArray[0] = parseInt(allUsers[j].augArray[0]) + commitments;
            allUsers[j].augArray[yearIndex] = parseInt(allUsers[j].augArray[yearIndex]) + commitments;
            allUsers[0].augArray[0] = parseInt(allUsers[0].augArray[0]) + commitments;
            allUsers[0].augArray[yearIndex] = parseInt(allUsers[0].augArray[yearIndex]) + commitments;
            break;
        case "Sep":
            allUsers[j].sepArray[0] = parseInt(allUsers[j].sepArray[0]) + commitments;
            allUsers[j].sepArray[yearIndex] = parseInt(allUsers[j].sepArray[yearIndex]) + commitments;
            allUsers[0].sepArray[0] = parseInt(allUsers[0].sepArray[0]) + commitments;
            allUsers[0].sepArray[yearIndex] = parseInt(allUsers[0].sepArray[yearIndex]) + commitments;
            break;
        case "Oct":
            allUsers[j].octArray[0] = parseInt(allUsers[j].octArray[0]) + commitments;
            allUsers[j].octArray[yearIndex] = parseInt(allUsers[j].octArray[yearIndex]) + commitments;
            allUsers[0].octArray[0] = parseInt(allUsers[0].octArray[0]) + commitments;
            allUsers[0].octArray[yearIndex] = parseInt(allUsers[0].octArray[yearIndex]) + commitments;
            break;
        case "Nov":
            allUsers[j].novArray[0] = parseInt(allUsers[j].novArray[0]) + commitments;
            allUsers[j].novArray[yearIndex] = parseInt(allUsers[j].novArray[yearIndex]) + commitments;
            allUsers[0].novArray[0] = parseInt(allUsers[0].novArray[0]) + commitments;
            allUsers[0].novArray[yearIndex] = parseInt(allUsers[0].novArray[yearIndex]) + commitments;
            break;
        case "Dec":
            allUsers[j].decArray[0] = parseInt(allUsers[j].decArray[0]) + commitments;
            allUsers[j].decArray[yearIndex] = parseInt(allUsers[j].decArray[yearIndex]) + commitments;
            allUsers[0].decArray[0] = parseInt(allUsers[0].decArray[0]) + commitments;
            allUsers[0].decArray[yearIndex] = parseInt(allUsers[0].decArray[yearIndex]) + commitments;
            break;
        }
    }
}
if (foundIt == false) {
    allUsers[userCount] = new UserView(userData[i].name, 1,  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    allUsers[0].totalCommits = parseInt(allUsers[0].totalCommits) + 1; 
            switch (whichMonth) {
            case "Jan":
                allUsers[userCount].janArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].janArray[0] = commitments;
                allUsers[userCount].janArray[yearIndex] = commitments;
                allUsers[0].janArray[yearIndex] = parseInt(allUsers[0].janArray[yearIndex]) + commitments;
                allUsers[0].janArray[0] = parseInt(allUsers[0].janArray[0]) + commitments;
                break;
            case "Feb":
                allUsers[userCount].febArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].febArray[0] = commitments;
                allUsers[userCount].febArray[yearIndex] = commitments;
                allUsers[0].febArray[yearIndex] = parseInt(allUsers[0].febArray[yearIndex]) + commitments;
                allUsers[0].febArray[0] = parseInt(allUsers[0].febArray[0]) + commitments;
                break;
            case "Mar":
                allUsers[userCount].marArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].marArray[0] = commitments;
                allUsers[userCount].marArray[yearIndex] = commitments;
                allUsers[0].marArray[yearIndex] = parseInt(allUsers[0].marArray[yearIndex]) + commitments;
                allUsers[0].marArray[0] = parseInt(allUsers[0].marArray[0]) + commitments;
                break;
            case "Apr":
                allUsers[userCount].aprArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].aprArray[0] = commitments;
                allUsers[userCount].aprArray[yearIndex] = commitments;
                allUsers[0].aprArray[yearIndex] = parseInt(allUsers[0].aprArray[yearIndex]) + commitments;
                allUsers[0].aprArray[0] = parseInt(allUsers[0].aprArray[0]) + commitments;
                break;
            case "May":
                allUsers[userCount].mayArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].mayArray[0] = commitments;
                allUsers[userCount].mayArray[yearIndex] = commitments;
                allUsers[0].mayArray[yearIndex] = parseInt(allUsers[0].mayArray[yearIndex]) + commitments;
                allUsers[0].mayArray[0] = parseInt(allUsers[0].mayArray[0]) + commitments;
                break;
            case "Jun":
                allUsers[userCount].junArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].junArray[0] = commitments;
                allUsers[userCount].junArray[yearIndex] = commitments;
                allUsers[0].junArray[yearIndex] = parseInt(allUsers[0].junArray[yearIndex]) + commitments;
                allUsers[0].junArray[0] = parseInt(allUsers[0].junArray[0]) + commitments;
                break;
            case "Jul":
                allUsers[userCount].julArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].julArray[0] = commitments;
                allUsers[userCount].julArray[yearIndex] = commitments;
                allUsers[0].julArray[yearIndex] = parseInt(allUsers[0].julArray[yearIndex]) + commitments;
                allUsers[0].julArray[0] = parseInt(allUsers[0].julArray[0]) + commitments;
                break;
            case "Aug":
                allUsers[userCount].augArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].augArray[0] = commitments;
                allUsers[userCount].augArray[yearIndex] = commitments;
                allUsers[0].augArray[yearIndex] = parseInt(allUsers[0].augArray[yearIndex]) + commitments;
                allUsers[0].augArray[0] = parseInt(allUsers[0].augArray[0]) + commitments;
                break;
            case "Sep":
                allUsers[userCount].sepArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].sepArray[0] = commitments;
                allUsers[userCount].sepArray[yearIndex] = commitments;
                allUsers[0].sepArray[yearIndex] = parseInt(allUsers[0].sepArray[yearIndex]) + commitments;
                allUsers[0].sepArray[0] = parseInt(allUsers[0].sepArray[0]) + commitments;
                break;
            case "Oct":
                allUsers[userCount].octArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].octArray[0] = commitments;
                allUsers[userCount].octArray[yearIndex] = commitments;
                allUsers[0].octArray[yearIndex] = parseInt(allUsers[0].octArray[yearIndex]) + commitments;
                allUsers[0].octArray[0] = parseInt(allUsers[0].octArray[0]) + commitments;
                break;
            case "Nov":
                allUsers[userCount].novArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].novArray[0] = commitments;
                allUsers[userCount].novArray[yearIndex] = commitments;
                allUsers[0].novArray[yearIndex] = parseInt(allUsers[0].novArray[yearIndex]) + commitments;
                allUsers[0].novArray[0] = parseInt(allUsers[0].novArray[0]) + commitments;
                break;
            case "Dec":
                allUsers[userCount].decArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].decArray[0] = commitments;
                allUsers[userCount].decArray[yearIndex] = commitments;
                allUsers[0].decArray[yearIndex] = parseInt(allUsers[0].decArray[yearIndex]) + commitments;
                allUsers[0].decArray[0] = parseInt(allUsers[0].decArray[0]) + commitments;
                break;
            }
        userCount = userCount + 1;
        }
    }
console.log(allUsers);

var which = 0;
var commitData = [];
function populate(which) {
var counter = 0;
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].janArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].febArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].marArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].aprArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].mayArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].junArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].julArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].augArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].sepArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].octArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].novArray[i];
      counter = counter + 1;
  }
  for (i = 1; i < 10; i ++) {
      commitData[counter] = allUsers[which].decArray[i];
      counter = counter + 1;
  }
  console.log(commitData);
}

var userNames = [];
var commits = [];
counter = 0;
for (i = 0; i < allUsers.length; i ++) {
    userNames[counter] = allUsers[i].userName;
    commits[counter] = allUsers[i].totalCommits;
    counter = counter + 1;
}

window.addEventListener('load', populate(0), false );

// chart 2
var chart = circularHeatChart()
    .segmentHeight(16)
    .innerRadius(50)
    .numSegments(12)
    .range(["white", "steelblue"])
    .radialLabels(["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"])
    .segmentLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    .margin({top: 20, right: 20, bottom: 20, left: 20});


d3.select('#chart2')
    .selectAll('svg')
    .data([commitData])
    .enter()
    .append('svg')
    .style('width', '500px')
    .style('height', '625px')
    .call(chart);

// chart 1:
var width = 700,
    height = 800,
    radius = 210;

var color = d3.scale.category10();

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(75);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(75);

var pie = d3.layout.pie()
    .sort(d3.ascending)
    .value(function(d) { return 10; });

var svg = d3.select("body").selectAll("#chart1").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var rVal = (360 / userNames.length);

var g = svg.selectAll(".arc")
    .data(pie(userNames))
    .enter().append("g")
    .attr("class", "arc");

g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color(d.data); })
    .style("stroke", "black");

g.append("text")
    .attr("transform", function(d, i) { return " rotate(" + ((i * (rVal)) + (rVal / 2.6)) + ")"+ " translate(" + 200 + ")"; }) 
    .attr("dy", ".35em")
    .style("text-anchor", "start")
    .text(function(d) { return d.data; });  
});
