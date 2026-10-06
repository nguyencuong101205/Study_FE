const fullName = 'Nguyen Ba Trung Cuong';
const age = 21;
const weight = 60;

alert(fullName);
alert(age);
alert(weight);

console.log(fullName);
console.log(age);
console.log(weight);

console.warn('This is a warning message');
console.error('This is an error message');

confirm('Xac nhan ban du tuoi');

prompt('Xac nhan ban du tuoi');


//chay 1 lan sau 1s
setTimeout(function() {
    alert('thong bao')
}, 1000)

//chay 1 lan sau 1s va lap lai moi 1s
setInterval(function() {
    console.log('thong bao' + Math.random())
}, 1000)