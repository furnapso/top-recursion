function mergeSort(array) {
    if (array.length === 0 || array.length === 1) {
        return array
    }

    const midWay = Math.floor(array.length / 2)
    const leftArray = array.slice(0, midWay)
    const rightArray = array.slice(midWay, array.length)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
    const result = []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex])
            leftIndex++
        } else {
            result.push(rightArray[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex])
        leftIndex++
    }

    while (rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex])
        rightIndex++
    }

    return result
}

console.log(mergeSort([5, 6, 2, 9]))