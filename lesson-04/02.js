/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    let newArray = []
    let num = 1
if(array[0] !== null && array[0] !== undefined){
    newArray = [array[0]]
}
    ttt:  for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] === array[i]) {
                continue ttt
            } else {
                num = 0
            }

        }
        if(num === 0){
            newArray.push(array[i])
            num = 1
        }

    }
    return newArray
}


console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]))