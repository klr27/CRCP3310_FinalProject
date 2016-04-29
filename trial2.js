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

var allUsers = [];
var userCount = 1;
allUsers[0] = new UserView ('All Users', 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
d3.csv("fake.csv", function(error, data) {
var whichMonth;
var yearIndex;
var commitments;
var foundIt = false;
for (i = 0; i < data.length; i ++) { // step through each line in csv
  foundIt = false;
  commitments = parseInt(data[i].insertions) + parseInt(data[i].deletions);
  yearIndex = data[i].year - 2007; // set the correct array index
  whichMonth = data[i].month;  
  for (j = 0; j < allUsers.length; j ++) { // check exesting user list for the name
    if (data[i].name == allUsers[j].userName) {  // if the name is exists
        foundIt = true;  // set flag
        allUsers[j].totalCommits = parseInt(allUsers[j].totalCommits) + 1;  // increase commit counter for that user
//        whichMonth = data[i].month;  
        switch (whichMonth) {
            case "Jan":
                allUsers[j].janArray[0] = parseInt(allUsers[j].janArray[0]) + commitments;
                allUsers[j].janArray[yearIndex] = parseInt(allUsers[j].janArray[yearIndex]) + commitments;
                break;
            case "Feb":
                allUsers[j].febArray[0] = allUsers[j].febArray[0] + parseInt(commitments);
                allUsers[j].febArray[yearIndex] = allUsers[j].febArray[yearIndex] + parseInt(commitments);
                break;
            case "Mar":
                allUsers[j].marArray[0] = parseInt(allUsers[j].marArray[0]) + commitments;
                allUsers[j].marArray[yearIndex] = parseInt(allUsers[j].marArray[yearIndex]) + commitments;
                break;
            case "Apr":
                allUsers[j].aprArray[0] = parseInt(allUsers[j].aprArray[0]) + commitments;
                allUsers[j].aprArray[yearIndex] = parseInt(allUsers[j].aprArray[yearIndex]) + commitments;
                break;
            case "May":
                allUsers[j].mayArray[0] = parseInt(allUsers[j].mayArray[0]) + commitments;
                allUsers[j].mayArray[yearIndex] = parseInt(allUsers[j].mayArray[yearIndex]) + commitments;
                break;
            case "Jun":
                allUsers[j].junArray[0] = parseInt(allUsers[j].junArray[0]) + commitments;
                allUsers[j].junArray[yearIndex] = parseInt(allUsers[j].junArray[yearIndex]) + commitments;
                break;
            case "Jul":
                allUsers[j].julArray[0] = parseInt(allUsers[j].julArray[0]) + commitments;
                allUsers[j].julArray[yearIndex] = parseInt(allUsers[j].julArray[yearIndex]) + commitments;
                break;
            case "Aug":
                allUsers[j].augArray[0] = parseInt(allUsers[j].augArray[0]) + commitments;
                allUsers[j].augArray[yearIndex] = parseInt(allUsers[j].augArray[yearIndex]) + commitments;
                break;
            case "Sep":
                allUsers[j].sepArray[0] = parseInt(allUsers[j].sepArray[0]) + commitments;
                allUsers[j].sepArray[yearIndex] = parseInt(allUsers[j].sepArray[yearIndex]) + commitments;
                break;
            case "Oct":
                allUsers[j].octArray[0] = parseInt(allUsers[j].octArray[0]) + commitments;
                allUsers[j].octArray[yearIndex] = parseInt(allUsers[j].octArray[yearIndex]) + commitments;
                break;
            case "Nov":
                allUsers[j].novArray[0] = parseInt(allUsers[j].novArray[0]) + commitments;
                allUsers[j].novArray[yearIndex] = parseInt(allUsers[j].novArray[yearIndex]) + commitments;
                break;
            case "Dec":
                allUsers[j].decArray[0] = parseInt(allUsers[j].decArray[0]) + commitments;
                allUsers[j].decArray[yearIndex] = parseInt(allUsers[j].decArray[yearIndex]) + commitments;
                break;
            }
        }
    }
if (foundIt == false) {
    console.log("New user - " + data[i].name)
    allUsers[userCount] = new UserView(data[i].name, 1,  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//  whichMonth = data[i].month;  // this works
        switch (whichMonth) {
            case "Jan":
                allUsers[userCount].janArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].janArray[0] = commitments;
                allUsers[userCount].janArray[yearIndex] = commitments;
                break;
            case "Feb":
                allUsers[userCount].febArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].febArray[0] = commitments;
                allUsers[userCount].febArray[yearIndex] = commitments;
                break;
            case "Mar":
                allUsers[userCount].marArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].marArray[0] = commitments;
                allUsers[userCount].marArray[yearIndex] = commitments;
                break;
            case "Apr":
                allUsers[userCount].aprArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].aprArray[0] = commitments;
                allUsers[userCount].aprArray[yearIndex] = commitments;
                break;
            case "May":
                allUsers[userCount].mayArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].mayArray[0] = commitments;
                allUsers[userCount].mayArray[yearIndex] = commitments;
                break;
            case "Jun":
                allUsers[userCount].junArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].junArray[0] = commitments;
                allUsers[userCount].junArray[yearIndex] = commitments;
                break;
            case "Jul":
                allUsers[userCount].julArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].julArray[0] = commitments;
                allUsers[userCount].julArray[yearIndex] = commitments;
                break;
            case "Aug":
                allUsers[userCount].augArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].augArray[0] = commitments;
                allUsers[userCount].augArray[yearIndex] = commitments;
                break;
            case "Sep":
                allUsers[userCount].sepArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].sepArray[0] = commitments;
                allUsers[userCount].sepArray[yearIndex] = commitments;
                break;
            case "Oct":
                allUsers[userCount].octArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].octArray[0] = commitments;
                allUsers[userCount].octArray[yearIndex] = commitments;
                break;
            case "Nov":
                allUsers[userCount].novArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].novArray[0] = commitments;
                allUsers[userCount].novArray[yearIndex] = commitments;
                break;
            case "Dec":
                allUsers[userCount].decArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                allUsers[userCount].decArray[0] = commitments;
                allUsers[userCount].decArray[yearIndex] = commitments;
                break;
            }
        userCount = userCount + 1;
        }
    }
console.log(allUsers);
document.getElementById("result").innerHTML = allUsers;

/* Label data */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
var years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
for(var i = 1980; i < 2011; i++)
    i % 10 === 0 ? years.push(i) : years.push('');

/* Create the chart */
var chart = circularHeatChart()
    .segmentHeight(15)
    .innerRadius(125)
    .numSegments(12)
    .domain([50, 200])
    .range(['white', 'blue'])
    .segmentLabels(months)
    .radialLabels(years);

d3.select('#result')
    .selectAll('svg')
    .data(allUsers[0])
    .enter()
    .append('svg')
    .call(chart);
});


