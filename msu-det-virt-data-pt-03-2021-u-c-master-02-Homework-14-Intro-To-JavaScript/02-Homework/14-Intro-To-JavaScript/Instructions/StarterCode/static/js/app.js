// from data.js
var tableData = data;

// YOUR CODE HERE!

function populateTable(data){
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach((rowData) =>{
        var row = tbody.append("tr");
        Object.values(rowData).forEach((value)=>{
            var cellData = row.append("td");
            cellData.text(value);
        })
    })

}

populateTable(tableData);

function filterUFO(){
    var date = d3.select("#datetime").property("value");
    if (date) {
        var filterData = tableData.filter(row => row.datetime==date);

    }
    populateTable(filterData);
}

d3.selectAll("#filter-btn").on("click", filterUFO);
