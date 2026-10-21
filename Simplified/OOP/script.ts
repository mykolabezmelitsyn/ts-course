/*
* Defining Properties, Implements and Abstract Classes
* */
const lesson_1_and_2 = false

if(lesson_1_and_2) {
    interface Speaker {
        speak(): void
    }

    class Animal {
        // #name: string //Private variable
        protected name: string //Protected variable
        static global = "Global value"

        constructor(name: string) {
            this.name = name
        }
    }

    class Dog extends Animal implements Speaker {
        constructor(name: string) {
            super(name);
        }

        speak() {
            console.log('Bark')
        }
    }
    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }

        speak() {
            console.log('Meow')
        }
    }

    const animal = new Dog('Ellie')

    // Animal.global

    console.log(animal.speak())
}

/*
* Generic Classes
* */
const lesson_3 = false

if(lesson_3) {
    class Box<T> {
        value: T

        constructor(value: T) {
            this.value = value
        }

        combineValues(newValue: T) {
            console.log(this.value, newValue)
        }

        genericFn<T2>(arg: T2, arg2: T) {
            console.log(arg)
        }
    }

    const box1 = new Box(123)
    const box2 = new Box("fsdgfds")
    const box3 = new Box(true)

    box1.combineValues(123)
    box2.combineValues('123')
    box3.combineValues(true)

    box1.genericFn("ddasdas", 234)
}

/*
* InstanceType and ConstructorParameters
* */
const lesson_4 = false

if(lesson_4) {
    class Box {
        value: String

        constructor(value: string) {
            this.value = value
        }
    }

    type Test = ConstructorParameters<typeof Box>
}
