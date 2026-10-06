function isNumber(value) {
    return typeof value === 'number';
    
}
console.log(isNumber(5));


/*
Mảng Array
1. Khai báo mảng
    - cach tao
    - su dung nhu the nao, tai sao?
    - kiem tra data type?
2. Truy xuất phần tử trong mảng
    - do dai cua mang
    - lay phan tu theo index
*/

var languages = ['JavaScript', 'PHP', 'Ruby',
    // function(){
    // },
    // {},
    // 123
];

// console.log(Array.isArray(languages))

console.log(languages.length);

console.log(languages[0]);


/**
 * Lam viec voi Array
 * 
 * 1. to string
 * 2. join
 * 3. pop
 * 4. push
 * 5. shift
 * 6. unshift
 * 7. splicing
 * 8. concat
 * 9. slicing
 */


var languages = [
    'javascript',
    'PHP',
    'Ruby'
];

console.log(typeof languages.toString());

console.log(languages.pop());

console.log(languages.push('Dart'));

console.log(languages.shift());

console.log(languages.unshift('Dart'));

console.log(languages.splicing(1, 1, 'Dart', 'Dart2'));

console.log(languages.concat(['Dart', 'Dart2']));

console.log(languages.slice(1, 2));

