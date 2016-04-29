
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
    .value(function(d) { return d.number; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


d3.csv("fake.csv", type, function(error, data) {
  if (error) throw error;
  console.log(data);

// count the number column for each instance of a name
//var total = 0;
//for (i = 0; i < data.length; i ++) {
//    if (data[i].name == 'a') {total += data[i].number;}
//};


// count the number of instances of each new label
var names = [];
var quantity = [];
var insertions = [];
var deletions = [];
var foundIt = false;
for (i = 0; i < data.length; i ++) {
  foundIt = false;
  for (j = 0; j < names.length; j ++) {
    if (data[i].name == names[j]) {
        foundIt = true;
        names[j].number += 1;
        quantity[j] = quantity[j]+1;
        insertions[j] = insertions[j] + parseInt(data[i].insertions);
        deletions[j] = deletions[j] + parseInt(data[i].deletions);
    }
  }

  if (foundIt == false) {
    names.push(data[i].name);
    quantity.push(1);
    insertions.push(parseInt(data[i].insertions));
    deletions.push(parseInt(data[i].deletions));
  }
 
}

console.log(names);


document.getElementById("result").innerHTML = names;

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
  d.number = +d.number;
  return d;
}
