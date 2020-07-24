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
        cell = row.insertCell(-1);
        var btnRemove = document.createElement("INPUT");
        btnRemove.type = "button";
        btnRemove.value = "Remove";
        btnRemove.setAttribute("onclick", "Remove(this);");
        cell.appendChild(btnRemove);
    }
}

function Remove(button) {
    
    var row = button.parentNode.parentNode;
    var tag = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Qui sera la victime:" + tag)) {

       
        var table = document.getElementById("myTable");

       
        table.deleteRow(row.rowIndex);
    }
}

let table = document.querySelector("table")
let tbody = document.querySelector("tbody")
let data = Object.keys(Slay[0]);
generateTableHead(table ,data);
generateTable(tbody ,Slay);
document.querySelector("#site-search").addEventListener("keyup",myFunction);