 // Напишите функцию get(obj, path), которая возвращает значение
 // по указанному пути в объекте.
 // Если путь не существует, функция должна возвращать undefined.

 function get(obj, path) {
     let result = obj;
     const keys = path.split(".");

     for (let i = 0; i < keys.length; i++) {
         const key = keys[i];
         if (result) {
             result = result[key];
         } else {
             return undefined;
         }
     }

     return result;
 }

const obj = {
    a: {
        b: {
            c: "d",
        },
    },
};

console.log(get(obj, "a.b.c")); // Ожидаемый вывод: d
