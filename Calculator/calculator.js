
function clearScreen() {
    document.getElementById("input").value = "";
}
 

function display(value) {
    document.getElementById("input").value += value;
}

function calculate() {
    let result = document.getElementById("input").value;
    try {
        let q = eval(result);
        document.getElementById("input").value = q;
    
    } catch (error) {
        console.log(error);
        document.getElementById("input").value = alert("sdfgsdfg");
    }
}
function backSpace() {
    let value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
}
function brackets() {
    document.getElementById("input").value+="(";
}
function rebrackets() {
    document.getElementById("input").value+=")";
}

