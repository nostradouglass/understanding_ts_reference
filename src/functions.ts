

function add(n1: number, n2: number): number {
    return n1 + n2
}


function printResult(num: number) {
    console.log('Result: ' + num)
}


function addAndHandle(n1: number, n2: number, cb: (_: number) => void) {
    const result = n1 + n2
    cb(result)
}


printResult(add(5, 12))

let combineValues: (x: number, y: number) => number;
combineValues = add

console.log(combineValues(4,8))


let y = addAndHandle(10, 20, (x) => { console.log(x * 2) })


