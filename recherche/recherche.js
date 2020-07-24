let Slay = [
    { name: "Soldat", lastname: "de fer", contact: "Soldat@Defer.fr" },
    { name: "Silencieuse", lastname: "Chute", contact: "Silencieuse@Chute.fr" },
    { name: "Defectueux", lastname: "Beurk", contact: "Defectueux@Beurk.fr" },
    { name: "LaGardienne", lastname: "Ouhhh", contact: "LaGardienne@Ouh.fr" },
]

const generateTableHead = (table,data) => {
    
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

const generateTable = (table, data) => {
    
    for (let element of data){
        let row = table.insertRow()
        for (key in element){
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text);
        }
    }
}

function myFunction() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#site-search");
    filter = input.value.toUpperCase();
    table = document.querySelector("#myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textcontent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr [i].style.display = "none"
            }
        }
    }
}

let table = document.querySelector("table")
let tbody = document.querySelector("tbody")
let data = Object.keys(Slay[0]);
generateTableHead(table ,data);
generateTable(tbody ,Slay);
document.querySelector("#site-search").addEventListener("keyup",myFunction);