const CSV = "data.csv";
const USER = 0;
const DATE = 1;
const INSERT = 2;
const DELETE = 3;

//template for basic user
function User(name, insertions, deletions) {
	this.name = name;
	this.insertions = insertions;
	this.deletions = deletions;
	//insertion object array
	//deletion object array
}

//template for change object
//function Change(number, year, month)
//this is the same model for inserts and deletes
//we would just create two different object arrays for each user 

var data = d3.csv.parseRows(CSV);

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


