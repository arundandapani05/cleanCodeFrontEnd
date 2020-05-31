class ClassPoint {


    constructor(private _x: number, private _y: number) {

    }

    draw() {
        console.log("X is " + this._x);
    }

    get X() {
        return this._x;
    }

    set X(x: number) {
        this._x = x;
    }
}

let x1: number = 10;
let y1: number = 10;


let point = new ClassPoint(x1, y1);

point.point.draw();