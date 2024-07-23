
// Task 53
// Berilgan foydalanuvchilar massividan yoshiga ko'ra foydalanuvchilarni filtrlash.

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 15 }
];

function filterAdultUsers(users) {
    let new_arr = users.sort((a, b) => b.age - a.age)
    return new_arr

}

// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// Task 54
// Berilgan ikki o'lchovli massiv (matritsa) ichidagi nol elementlarning indekslarini toping.

function findZeroIndices(matrix) {
    let result = []
    matrix.forEach((item, index1) => {
        item.forEach((item, index) => {
            if (item == 0) {
                result.push([index1, index])
            }
        });
    });

    return result
}

// console.log(findZeroIndices([
//     [1, 0, 3],
//     [4, 5, 0],
//     [7, 0, 9]
// ]));


// Task 55
// Berilgan sonli massivdagi eng ko'p takrorlangan elementni toping.
//  Agar bir nechta element teng takrorlangan bo'lsa, ulardan birini qaytaring.

function mostFrequentElement(arr) {
    let max_count = 0
    let number = 0

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let g = 0; g < i; g++) {
            if (arr[i] == arr[g]) {
                count++

            }
            if (count > max_count) {
                max_count = count
                number = arr[i]
            }
        }
    }

    return { number }
}

// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4

// Task 56
// Berilgan ikki o'lchovli massivni (matritsa) 90 daraja o'ngga burang.

function rotateMatrix(squareMatrix) {
    let left = 0, right = squareMatrix.length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left, bottom = right;

            let topLeft = squareMatrix[top][left + i];

            squareMatrix[top][left + i] = squareMatrix[bottom - i][left];

            squareMatrix[bottom - i][left] = squareMatrix[bottom][right - i];

            squareMatrix[bottom][right - i] = squareMatrix[top + i][right];

            squareMatrix[top + i][right] = topLeft;

        }
        left++;
        right--;
    }
    return squareMatrix
}
console.log(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]


// Task 57
// Berilgan massivdagi faqat bir marta uchraydigan elementlarni qaytaring.
function filterUniqueElements(arr) {
    let new_arr = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
    return new_arr
}
// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]


// Task 58
// Berilgan sonlar qatorini k qadamga o'ngga rotatsiya qiling.

function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())

    }
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
