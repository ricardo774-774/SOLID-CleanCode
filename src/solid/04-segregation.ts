interface Bird {
    eat(): void;
    walk(): void;
}

interface FlyingBird extends Bird {
    fly(): void;
}

interface RunningBird extends Bird {
    run(): void;
}

interface SwimingBird extends Bird {
    swim(): void;
}

class Tucan implements FlyingBird {

    public fly() {}
    public eat() {}
    public walk() {}

}

class Humminbird implements FlyingBird {

    public fly() {}
    public eat() {}
    public walk() {}

} 

class Ostrich implements RunningBird, SwimingBird {

    public eat() {}
    public walk() {}
    public run() {}
    public swim() {}

}

class Penguin implements SwimingBird {

    public eat() {}
    public walk() {}
    public swim() {}

}