//function
function showDialog() {
    alert("Hello, World!");
}
showDialog();

function writeLog(message) {
    console.log(message);
}
writeLog("Test");


function writeLog(message, message2) {
    console.log(message);
    console.log(message2);
}
writeLog("Test", "Another message");

function writeLog() {
    var myString = "";
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog("Test", "Test1", "Test2");

//return trong ham
function sum(a, b) {
    return a + b;
}
var result = sum(5, 10);
console.log(result);

function showMessage() {
    console.log("Hello");
}

function showMessage() {
    console.log("Hello1");
}
showMessage();