/*
* Conditional Types
* */
const lesson_1 = false

if(lesson_1) {
    // type A<T> = T extends string ? true : false
    // type A<T> = T extends { path: string } ? { label: string } : { age: number }
    type A<T> = T extends { path: string } ? T : never

    // const a: A<string> = 'Test'
    // const a: A<{ path: string }> = { label: 'Label' }
    const a: A<{ path: string }> = { path: 'Label' }
    console.log(a)

    type Union = "red" | "green" | "blue"

    type B<T> = T extends string ? T : never

    const b: B<Union> = ""
}
/*
* infer
* */
const lesson_2 = false

if(lesson_2) {
    type UnwrapArray<T> = T extends Array<infer E> ? E : never

    // const arr = ['str', 423, true]
    const arr = ['str', 423]

    type Elements = UnwrapArray<typeof arr>

    type CustomAwaited<T> = T extends Promise<infer R> ? R : never
    type A = Awaited<Promise<string>>
    type B = CustomAwaited<Promise<string>>

    // type Return<F> = F extends (...args: any[]) => infer R ? R : never
    type Return<F> = F extends [any, infer P, ...any[]] ? P : never

    type AA = ReturnType<() => false>
    // type BB = Return<() => false>
    type BB = Return<[1, 2, 3]>
}
/*
* Conditional Types and infer Exercises
* */
const lesson_3 = false

if(lesson_3) {
    //1
    const lesson_4_1 = false
    if(lesson_4_1) {
        type CustomExclude<T, U> = T extends U ? never : T
        type CustomExtract<T, U> = T extends U ? T : never

        type Base = "a" | "b" | "c"

        type A = Exclude<Base, "a">
        type B = CustomExclude<Base, "a">

        type C = Extract<Base, "a" | "b">
        type D = CustomExtract<Base, "a" | "b">
    }

    //2
    const lesson_4_2 = false
    if(lesson_4_2) {
        type First<T> = T extends [infer E, ...any[]] ? E : never
        type Last<T> = T extends [...any[], infer E] ? E : never
        type Third<T> = T extends [any, any, infer E, ...any[]] ? E : never

        type A = First<[1, 2, 3, 4, 5]>
        type B = Last<[1, 2, 3, 4, 5]>
        type C = Third<[1, 2, 3, 4, 5]>

        //*********************************************

        type FirstGeneric<T> = T extends CustomGeneric<infer A, any> ? A : never
        type LastGeneric<T> = T extends CustomGeneric<any, infer B> ? B : never

        type CustomGeneric<A, B> = { name: A; label: B }

        type B = FirstGeneric<CustomGeneric<string, string>>
        type E = LastGeneric<CustomGeneric<string, string>>
        type F = FirstGeneric<string>
        type G = LastGeneric<string>
    }
}

/*
* Template Literals
* */
const lesson_5 = false

if(lesson_5) {
    type A<T extends string> = `${T} World!`
    type B = A<"Hello">

    type EventName<T extends string> = `on${Capitalize<T>}`
    type BB = EventName<"click"> // onClick

    type EventName_2<T extends string> = T extends `on${infer S}` ? Lowercase<S> : never
    type GetId<T extends string> = T extends `/users/${infer S}` ? S : never
    type GetFirst<T extends string> = T extends `${infer S}/${string}` ? S : never

    type BB_2 = EventName_2<"onClick"> // click
    type R = GetId<"/users/123">
    type F = GetFirst<"first/dfsfgdsfsd/fsdfs/fsdfsd/fsdfsd">

    type Lang = "end" | "es" | "ua"
    type Page = "home" | "about" | "contact"

    type Route = `${Lang}/${Page}`

    type GetLang<T extends string> = T extends `${infer L}/${string}` ? L : never
    type Route_2 = "en/home" | "en/team" | "es/home" | "es/team"

    type Lang_2 = GetLang<Route_2>

    type Size = "sm" | "md" | "lg"
    type Variant = "ghost" | "outline"

    type ClassName = `button-${Size}_${Variant}`
    //button-sm_ghost
}

/*
* Mapped Types
* */
const lesson_6 = false

if(lesson_6) {
    type User = {
        name: string
        age: number
        isProgrammer: true
    }

    // type Partialuser = Partial<User>
    type Partialuser = {
        [K in keyof User]: User[K] extends string ? User[K] : never
    }

    const u: Partialuser = {
        name: 'name',
    }
}

/*
* Recursive Types
* */
const lesson_7 = false

if(lesson_7) {
    type User = {
        name: "string"
        friends: User[]
    }

    const user: User = {
        name: "Mykola",
        friends: [{ name: "Bohdan", friends: [{ name: "Ivan", friends: [] }] }]
    }

    console.log(user)

    type Flatten<T> = T extends Array<infer E> ? Flatten<E> : T

    type A = Flatten<number[][][]>
    
    type Test<T extends string> = T extends `${infer S}${infer Rest}` ? `${S}-${Test<Rest>}` : T
    
    type AA = Test<"Hello">
}

/*
* Type Programming Exercises
* */
const lesson_8 = false

if(lesson_8) {
    const lesson_8_1 = false
    const lesson_8_2 = false
    const lesson_8_3 = false
    const lesson_8_4 = false
    const lesson_8_5 = false

    if(lesson_8_1) {
        type AppendArgument<Fn, Arg> = Fn extends (...args: infer Old) => infer Ret ? (...args: [...Old, Arg]) => Ret : never

        type Test1 = AppendArgument<() => void, number>
        type Test2 = AppendArgument<(name: string) => void, number>
        type Test3 = AppendArgument<(one: string, two: number) => void, boolean>
    }

    if(lesson_8_2) {
        type Trim<S extends string> = S extends ` ${infer Rest}` | `${infer Rest} ` ? Trim <Rest> : S
        // type Trim<S extends string> = S extends ` ${infer Rest}` ? Trim <Rest> : S extends `${infer Rest} ` ? Trim<Rest> : S

        type Test1 = Trim<"      Hello World    ">
        type Test2 = Trim<"Hello World    ">
        type Test3 = Trim<"      Hello World">
        type Test4 = Trim<"Hello World">
        type Test5 = Trim<"">
    }

    if(lesson_8_3) {
        type Replace<
            S extends string,
            From extends string,
            To extends string
        > = S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S

        type Test1 = Replace<"Hello World", "Hello", "Goodbye">
        type Test2 = Replace<"Hello World", "World", "Darkness">
        type Test3 = Replace<"Bad Bad", "Bad", "Good">
        type Test4 = Replace<"Tip Top", "Top" | "Tap", "Shape">
        type Test5 = Replace<"Hello World", "Bogus", "Bad">
    }

    if(lesson_8_4) {
        type ReplaceAll<
            S extends string,
            From extends string,
            To extends string
        > = S extends `${infer Start}${From}${infer End}`
            ? `${ReplaceAll<Start, From, To>}${To}${ReplaceAll<End, From, To>}`
            : S

        type Test1 = ReplaceAll<"Hello World", "Hello", "Goodbye">
        type Test2 = ReplaceAll<"Hello World", "World", "Darkness">
        type Test3 = ReplaceAll<"Bad Bad", "Bad", "Good">
        type Test5 = ReplaceAll<"rAAb rAAb", "Ab", "b">
    }

    if(lesson_8_5) {
        type GetMiddle<T extends Array<unknown>> = T extends [
            infer Start, ...infer Middle, infer End
        ]
            ? Middle extends []
                ? [Start, End]
                : GetMiddle<Middle>
            : T

        type Test1 = GetMiddle<[]>
        type Test2 = GetMiddle<[1]>
        type Test3 = GetMiddle<[1, 2]>
        type Test4 = GetMiddle<[1, 2, 3]>
        type Test5 = GetMiddle<[1, 2, 3, 4]>
    }
}