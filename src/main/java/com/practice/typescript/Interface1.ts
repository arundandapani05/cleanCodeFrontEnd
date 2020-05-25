interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let example1 = (labelObject: LabeledValue) => {
    labelObject.label;
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);