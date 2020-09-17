// 1.选择排序
// (1)选择排序-递归
let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        return Math.min.apply(null, numbers)
    }
}
let minIndex = (numbers) => {
    let index = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            index = i
        }
    }
    return index
}

let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let minNum = numbers[index]
        numbers.splice(index, 1) //返回一个被切去最小数的数组
        return [minNum].concat(sort(numbers))
    } else {
        return numbers[0] > numbers[1] ? numbers.reverse() : numbers
    }
};
// (2)选择排序-for循环
//实现求最小值的下标
let minIndex = (numbers) => {
    let indexInt = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[indexInt]) {
            indexInt = i
        }
    }
    return indexInt
};
//实现交换swap， 交换一个数组中的两个值
let swap = (numbers, i, j) => {
    let temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

let sort = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        let index = minIndex(numbers.slice(i)) + i
            //minIndex里面的numbers和下面的numbers没关系，他是在minIndex函数里面运行的，即使切了也不影响下面的numbers，i最开始为零，所以numbers.slice（0）切零个，就是原数组，因为切掉了i个，所以他的下标就和原来的数组不相等了，切掉了i个，后面加上i
        if (index !== i) { swap(numbers, index, i) }
    }
    return numbers
};
// 2.快速排序

let quickSort = (numbers) => {
    if (numbers <= 1) { return numbers }
    let pivotIndex = Math.floor(numbers.length / 2)
    let pivot = numbers.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < pivot) {
            left.push(numbers[i])
        } else {
            right.push(numbers[i])
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
};

// 3.归并排序
let merge = (a, b) => {
    if (a.length === 0) { return b }
    if (b.length === 0) { return a }
    return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(b, a.slice(1)))
}
let mergeSort = (numbers) => {
    if (numbers.length === 1) { return numbers }
    let left = numbers.slice(0, Math.floor(numbers.length / 2))
    let right = numbers.slice(Math.floor(numbers.length / 2))
    return merge(mergeSort(left), mergeSort(right))
};

// 4.计数排序

let countSort = arr => {
    let hashTable = {},
        max = 0,
        result = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1
        } else {
            hashTable[arr[i]] += 1
        }
        if (arr[i] > max) { max = arr[i] }
    }
    for (let j = 0; j <= max; j++) {
        if (j in hashTable) {
            for (let i = 0; i < hashTable[j]; i++) {
                result.push(j)
            }
        }
    }
    return result
}