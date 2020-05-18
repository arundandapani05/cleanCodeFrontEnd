function f() {
    var message:string = "Hello World"
    console.log(message)
    document.getElementById("demo").innerHTML=message;
    return "Hello This example is proof that this works";
}
function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }

    // Call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction("hello closure"); // logs hello closure!