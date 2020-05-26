interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue): { label: string } {
    console.log(labeledObj.label);
    return labeledObj;
}

let myObj = {size: 10, label: "Size 10 Object"};
let returnObj = printLabel({label: "arun"});
printLabel(myObj);