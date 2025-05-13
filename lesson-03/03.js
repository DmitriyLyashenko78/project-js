// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let maxNum
    if (num1 > num2 && num1 > num3){
        maxNum = num1
    } else if (num2 > num1 && num2 > num3){
        maxNum = num2
    } else {
        maxNum = num3
    }
    return maxNum
}

console.log(findLargest(4, 5, 3))