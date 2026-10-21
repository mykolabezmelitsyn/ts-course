/*
* Debagging
* */
const lesson_1 = false

if(lesson_1) {
    type Options = {
        debug: boolean
        format: {
            tabs: boolean
            tabWidth: number
        }
    }

    function printNumber(num: number, options?: Options) {
        console.log(num)
    }

    printNumber(3)
}

/*
* Importing Types
* */
const lesson_2 = false

if(lesson_2) {
    type User = {
        id: string
        name: string
        age: number
    }

    export const me: User = {
        id: "1",
        name: "Mykola",
        age: 28
    }
}

/*
* Declaration Files
* */
const lesson_3 = false

if(lesson_3) {

}

/*
* Advanced TSConfig Options
* */
const lesson_4 = false

if(lesson_4) {

}