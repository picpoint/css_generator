var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');
var result = document.querySelector('.result');
var tla = document.querySelector('.tla');
var tra = document.querySelector('.tra');
var bla = document.querySelector('.bla');
var bra = document.querySelector('.bra');

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(result);

function changeBorderAngle() {
    result.style.borderTopLeftRadius = r1.value + 'px';
    result.style.borderTopRightRadius = r2.value + 'px';
    result.style.borderBottomLeftRadius = r3.value + 'px';
    result.style.borderBottomRightRadius = r4.value + 'px';
    tla.innerHTML = r1.value;
    tra.innerHTML = r2.value;
    bla.innerHTML = r3.value;
    bra.innerHTML = r4.value;
}

r1.addEventListener('input', changeBorderAngle);
r2.addEventListener('input', changeBorderAngle);
r3.addEventListener('input', changeBorderAngle);
r4.addEventListener('input', changeBorderAngle);