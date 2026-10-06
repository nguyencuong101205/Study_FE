//Chuỗi
/**
 * 1. Tao chuoi
 *  -Cac cach tao chuoi
 *  -Nen dung cach nao
 *  -Kiem tra data type
 * 2.Mot so case su dung backslash (\)
 * 3.Xem do dai chuoi
 * 4.Chu y do dai khi viet Code
 * 5.Template string ES6
 */

var fullName = 'Nguyen Ba Trung Cuong';

var fullName2 = new String('Nguyen Ba Trung Cuong');

alert(fullName);

alert(fullName2);

console.log(typeof fullName);

console.log(typeof fullName2);

var fullName3 = 'Nguyen Ba Trung Cuong \'newbie\'';
console.log(fullName3);

var fullName4 = 'Nguyen Ba Trung Cuong \\ new line';
console.log(fullName4);

var fullName5 = 'Nguyen Ba Trung Cuong';
console.log(fullName5.length);

// Template string ES6
var firstName = 'Nguyen';
var lastName = 'Cuong';
var age = 20;

console.log('Toi la: ' + firstName + ' ' + lastName + ' va toi ' + age + ' tuoi');

console.log(`Toi la: ${firstName} ${lastName} va toi ${age} tuoi`);

console.log(fullName5.slice(-6, -1));

console.log(fullName5.replace('Cuong', 'Cuong newbie'));

console.log(fullName5.toUpperCase());

console.log(fullName5.toLowerCase());

console.log(fullName5.trim());

console.log(fullName5.split(' '));

