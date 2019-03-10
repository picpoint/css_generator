// функционал скругления углов start
// range 4-х углов
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');

// переменная доступа к форме для отображения эффектов
var result = document.querySelector('.result');

// переменная верхнего левого угла
var tla = document.querySelector('.tla');

// переменная верхнего правого угла
var tra = document.querySelector('.tra');

// переменная нижнего левого угла
var bla = document.querySelector('.bla');

// переменная левого правого угла
var bra = document.querySelector('.bra');


// ф-ия считывания значений из range и присваивания в углы метода border
// так же отображение значений и окошках рядом с ползунками
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

// добавляем методы на каждый угол
r1.addEventListener('input', changeBorderAngle);
r2.addEventListener('input', changeBorderAngle);
r3.addEventListener('input', changeBorderAngle);
r4.addEventListener('input', changeBorderAngle);
// функционал скругления углов end



// функционал тени start

var chk = document.getElementById('chk');
var sdw_width = document.getElementById('sdw_width');
var sdw_height = document.getElementById('sdw_height');
var sdw_radius = document.getElementById('sdw_radius');
var sdw_streach = document.getElementById('sdw_streach');
var brush = document.getElementById('brush');

function shadowToBox () {
  if (chk.checked) {
    result.style.boxShadow = sdw_width.value + 'px' + ' ' + sdw_height.value + 'px' + ' ' + sdw_radius.value + 'px' + ' ' + sdw_streach.value + 'px' + ' ' + brush.value;
  } else if (!chk.checked) {
    console.log('NOT');
  }
}

sdw_width.addEventListener('input', shadowToBox);
sdw_height.addEventListener('input', shadowToBox);
sdw_radius.addEventListener('input', shadowToBox);
sdw_streach.addEventListener('input', shadowToBox);
brush.addEventListener('input', shadowToBox);
// функционал тени end



// функционал обводки start
var brdcolor = document.getElementById('brdcolor');
var brdpix = document.getElementById('brdpix');

function borderResult () {
  result.style.border = brdpix.value + ' ' + ' ' + 'solid' + ' ' + brdcolor;
}

brdcolor.addEventListener('input', borderResult);
brdpix.addEventListener('input', borderResult);
// функционал обводки end
