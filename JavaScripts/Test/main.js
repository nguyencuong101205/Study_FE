//  Gọi 2 lần functionmtfunction để log ra value123 và valuehehehe

function myFunction(param, value) {
  if (typeof param === "function") {
    param(value);
  }

  console.log("Toi La Bear");
}

function myCallback(callback) {
  console.log("Value: ", callback);
}

myFunction(myCallback, "123");
myFunction(myCallback, "hehehe");
