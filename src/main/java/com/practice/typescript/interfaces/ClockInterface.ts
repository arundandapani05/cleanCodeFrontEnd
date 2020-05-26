interface ClockInterface {
    currentDate: Date;

    setDate(d: Date): void;
}

class Clock implements ClockInterface {
    currentDate: Date = new Date();

    setDate(d: Date) {
        this.currentDate = d;
    }

    constructor(h: number, m: number) {
    }
}