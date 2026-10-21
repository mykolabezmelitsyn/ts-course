// type Person = {
//     name: string;
//     age: number;
//     isProgrammer?: boolean
// }

interface Animal {
    name: string;
    breed: string;
    age: number
}

// const person: Person = {
//     name: "Mykola",
//     age: 33,
//     isProgrammer: true
// }

// const person2: Person = {
//     name: "Ann",
//     age: 28,
//     isProgrammer: false
// }

// const animal: Animal = {
//     name: "Ellie",
//     breed: "Korgi",
//     age: 2
// }

// console.log(person)
// console.log(person2)
// console.log(animal)

/*----------------------------------------*/

// function printName(name: string, name2: string) {
//     console.log(name, name2)
// }

// printName('name 1', 'name 2')

function sum(a: number, b: number) {
    return a + b;
}

const result = sum(2,3)

/*----------------------------------------*/

function printName(name: string): void {
    console.log(name)
}

printName("Mykola");

/*----------------------------------------*/

type Options = {
    debugMode?: boolean,
}

function printNameAndAge(name: string, { debugMode = false }: Options = {}) {
    console.log(name, debugMode)
}

printNameAndAge("Mykola", { debugMode: true })
printNameAndAge("Ann")

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b)
}

sumWithCallback(1,2, sum => {
    // console.log(sum)
})

/*----------------------------------------*/

let id: string | number = "7";

type Todo = {
    name: string,
    status: "Complete" | "Incomplete" | "Draft"
}

const todo: Todo = { name: "Laundry", status: "Complete" }

// console.log(todo)

/*----------------------------------------*/

type Person = {
    name: string;
    age: number
}

type PersonWithId = Person & {
    id: number
}

const personWithID: PersonWithId = {
    name: "Mykola",
    age: 33,
    id: 33
}

console.log(personWithID)

/*----------------------------------------*/

type PersonReadOnly = {
    name: string;
    readonly id: number;
    age: number
}

const personReadOnly: PersonReadOnly = { id: 1, name: "Mykola", age: 33 }

type NumberArray = readonly number[];

const nums: NumberArray = [1,2,3]

// nums.push(3) - Error

console.log(nums)

/*----------------------------------------*/

type PersonKey = {
    name: string;
    age: number
}

const age = getValue("age", { name: "Mykola", age: 33 })

console.log(age)

function getValue(key: keyof PersonKey, person: PersonKey) {
    return person[key]
}

/*----------------------------------------*/

type PersonIndex = {
    name: string;
    skillLevel: "Beginner" | "Intermediate" | "Expert"
}

type PeopleGroupBySkillLevel = {
    // [index in PersonIndex["skillLevel"]]: PersonIndex[]
    [index:  PersonIndex["name"]]: PersonIndex[]
}

const a: PeopleGroupBySkillLevel = {
    "Expert": [{ name: "Mykola", skillLevel: "Expert" }]
}

console.log(a)

const personIndex: PersonIndex = { name: "Mykola", skillLevel: "Expert" }
printSkillLevel(personIndex.skillLevel)

function printSkillLevel(skillLevel: PersonIndex["skillLevel"]) {
    // console.log(skillLevel)
}

/*----------------------------------------*/

let w = 1 as const
const r = 2

const nums_w = ['1', '2', '3'] as const

const SKILL_LEVELS = ["Beginner", "Expert"] as const;

type PersonConst = {
    skillLevel: (typeof SKILL_LEVELS)[number]
}

SKILL_LEVELS.forEach(skillLevel => {
    console.log(skillLevel)
})

/*----------------------------------------*/
//Generics
console.clear()

const input = document.querySelector<HTMLInputElement>("input")

console.log(input?.value)

function getSecond<ArrayType>(array: ArrayType[]) {
    return array[1]
}

const arr = [1, 2, 3]
const arr2 = ['erwrewr', 'eqwrewr']

const resA = getSecond(arr)
const resB = getSecond(arr2)

console.log(resA)
console.log(resB)

/*----------------------------------------*/
console.clear()

function wait(duration: number): Promise<string>{
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('Hi!'), duration)
    })
}

wait(1000).then(value => {
    console.log(value.length)
})

/*----------------------------------------*/
console.clear()

type TodoPick = {
    id: string,
    name: string,
    status: string,
    completed: boolean
}

// type NewTodo = Pick<TodoPick, "name" | "status" | "completed">
type NewTodo = Omit<TodoPick, "id">

const newTodo: NewTodo = { name: "Do homework", completed: false, status: "Pending" }

console.log(newTodo)

function saveTodo(todo: NewTodo): TodoPick {
    return { ...todo, id: crypto.randomUUID() }
}

function renderTodo(todo: TodoPick) {
    const div = document.createElement('div')
    div.id = todo.id
    //Do the rest
}

/*----------------------------------------*/
console.clear()

type TodoPart = {
    title: string
    completed: boolean
}

type FormTodo = Partial<TodoPart>
type FormTodo2 = Required<TodoPart>

/*----------------------------------------*/
console.clear()

type TodoNarrow = {
    title: string
    priority: "High" | "Nirmal" | "Low"
    isComplete: boolean
    description?: string
    dueDate: Date | string
}

function extendTodo(todo: TodoNarrow) {
    // if(typeof todo.dueDate === "string") {
    if(todo.dueDate instanceof Date) {
        // console.log(todo.dueDate)
        return
    }

    console.log(todo.dueDate)
}

/*----------------------------------------*/
console.clear()

type SuccessResponse = {
    status: "Success"
    data: { id: string; name: string }
}

type ErrorResponse = {
    status: "Error"
    errorMassage: string
}

// type UserApiResponse = {
//     status: "Error" | "Success"
//     data?: { id: string; name: string }
//     errorMassage?: string
// }

type UserApiResponse = SuccessResponse | ErrorResponse

function handleResponse(res: UserApiResponse)  {
    if(res.status === "Success") {
        console.log(res.data.name)
    } else {
        console.log(res.errorMassage.length)
    }
}