
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable, 
    input2: number | string, 
    resultConversion: ConversionDescriptor
    ) {
    
    let result ;
    if (typeof input1 === "number" && typeof input2 == "number") {
         result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConversion === 'as-number') {
        return +result
    } else {
        return result.toString()
    }
}

const combinedAges = combine(23, 43, 'as-number')
console.log(combinedAges)

const combineStringAges = combine('43', '12', 'as-number')
console.log(combineStringAges)

const combinedNames = combine("Jenny", "Smith", 'as-text')
console.log(combinedNames)