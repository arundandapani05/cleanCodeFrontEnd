var example:string = "Testing example";
console.log(example);
//example=55;
declare var x:any
//document.write(x);

class Point{
    constructor(public x:string, public y:string) {

    }
    add(point:Point){
        return new Point(this.x+point.x, this.y+point.y);
    }
}
var p1=new Point("10", "20");
var p2 = new Point("20", "30");
var p3 = p1.add(p2);

console.log(p3);
