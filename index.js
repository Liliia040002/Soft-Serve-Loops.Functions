// 1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення кінцеве значення, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

        function createArray (start, end) {
            let arr = [];
            for ( let i = start; i <= end; i++) {
                arr.push(i);
            }

            return arr;
        }
        console.log (createArray(2, 9));



// 2. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
  
        function printNumberNTimes(a, b) {
            let repeat = 1; 
            if (a < b) {
                for (let i = a; i <= b; i++) {
                    for (let j = 0; j < repeat; j++) {
                        console.log(i);
                    }
                repeat++;
                }
            } else {
                console.log ("You should write 2 numbers a < b");
       
            }
          
        }
        
        printNumberNTimes(1, 5);

   


//    3.  Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
//     randArray(5);  // [399,310,232,379,40]


            function randArray(k) {
                let arr = [];
                for (let i = 1; i <= k; i++) {
                    arr.push(Math.floor((Math.random()*500) + 1)) ;
                }
                return arr;
            }
            console.log(randArray(5));




// 5. Є масив [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'] Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
// let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
['Limit', 'a', '3', '33', 'a', 'text', 'strong', 'broun'
] 
*/
        function getNewArray (arr) {

        const arrayNum = [];
        const arrayStr = [];
            function getCheckArray (arr) {
                for (let i = 0; i < arr.length; i++) {

                    if(typeof arr[i] === 'number') {
                        arrayNum.push(arr[i]) 
                    }  else if (typeof arr[i] === 'string') {
                        arrayStr.push(arr[i]);
                    } else if (Array.isArray(arr[i])) {
                        getCheckArray(arr[i])
                    }
                }
            }
        getCheckArray(arr)

        return [arrayNum, arrayStr];
        }

       
        let arrExample = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
        console.log(getNewArray(arrExample));


// 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
 // calc(10, 3, 1); // => 7

 function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
            
        case 2:
            return a * b;  
          
        case 3: 
        return a / b;  
          
        default: 
        return a + b;  
           
    }

}

console.log(calc(10, 3, 1));
console.log(calc(10, 3, 2));
console.log(calc(10, 3, 3));
console.log(calc(10, 3, 5));





// 7.Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  => false
// findUnique([1, 2, 3, 5, 11]); => true


function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

const myArray = [1, 2, 3, 4, 5];
console.log(findUnique(myArray)); // Виведе true, оскільки є дубльований елемент (1)
