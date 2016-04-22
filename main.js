//javascript
var xArray = [100, 200, 300, 400, 500];
var yArray = [40, 70, 20, 80, 40];

var nameArray = [];

//var data = Papa.parse("foo.csv", {
//    complete: function(results) {
//        console.log("Finished", results.data);
//    }
//});

d3.text("foo2.csv", function(data) {

var parsedCSV = d3.csv.parseRows(data);

var container = d3.select("body")
                    .append("theTable")
                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")
                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });

var sampleSVG = d3.select("#example")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);    

    sampleSVG.append("circle")
        .style("stroke", "lightblue")
        .style("fill", "blue")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50);
        //.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        //.on("mouseout", function(){d3.select(this).style("fill", "white");});

function drawViz() {
   document.getElementById("example").innerHTML = xArray[0];
}

window.addEventListener('load', drawViz, false );
