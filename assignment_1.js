// Part 1

function fibs(num) {
    let vals = []
    for (let i = 0; i < num; i++) {
        if (vals.length === 0) {
            vals.push(0)
        } else if (vals.length === 1) {
            vals.push(1)
        } else {
            let num1 = vals[vals.length - 1]
            let num2 = vals[vals.length - 2]
            vals.push(num1 + num2)
        }
    }

    return vals
}

let expectedResult = [0, 1, 1, 2, 3, 5, 8, 13]
let result = fibs(8)

console.log(
    "Iterator: ",
    expectedResult.length === result.length && expectedResult.every(i => result.includes(i))
)

// Part 2

function fibsRec(limit, vals) {
    if (vals == null) {
        vals = []
    }
    if (vals.length >= limit) {
        return vals
    } else if (vals.length === 0) {
        vals.push(0)
    } else if (vals.length === 1) {
        vals.push(1)
    } else {
        vals.push(vals[vals.length - 1] + vals[vals.length - 2])
    }

    vals = fibsRec(limit, vals)

    return vals
}

result = fibsRec(8)

console.log(
    "Recursive: ",
    expectedResult.length === result.length && expectedResult.every(i => result.includes(i))
)