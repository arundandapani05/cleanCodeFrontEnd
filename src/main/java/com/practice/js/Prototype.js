function Foo() {
}

console.log(Foo.prototype); // {} i.e. it exists and is not undefined
console.log(Foo.prototype.constructor === Foo);


let numArray = [1, 2, -8, 3, -4, 7];
console.log(numArray);
let protoRabbit = {
    color: 'grey',
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
        console.log(`The ${this.type} rabbit says ${line}`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");