//javascript
var xArray = [100, 200, 300, 400, 500];
var yArray = [40, 70, 20, 80, 40];

var sampleSVG = d3.select("#example")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);    

    sampleSVG.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        //.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        //.on("mouseout", function(){d3.select(this).style("fill", "white");});
    
function drawViz() {}

window.addEventListener('load', drawViz, false );
