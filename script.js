function createTable() {
    //Write your code here
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");
  rn = parseInt(rn);
  cn = parseInt(cn);
  let table = document.getElementById("myTable");
  table.innerHTML = "";
	for (let i = 0; i < rn; i++) {
	    let row = table.insertRow(); // creates a new row
	    for (let j = 0; j < cn; j++) {
	      let cell = row.insertCell(); // creates a new cell
	      cell.innerHTML = `Row-${i} Column-${j}`;
	    }
	  }
}
