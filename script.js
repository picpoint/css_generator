// ФУНКЦИОНАЛ СКРУГЛЕНИЯ УГЛОВ START
// range 4-х углов
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');

// переменная доступа к форме для отображения эффектов
var result = document.querySelector('.result');
// переменная верхнего левого угла tla - top left angle
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
// ФУНКЦИОНАЛ СКРУГЛЕНИЯ УГЛОВ END


//-----------------------------------------------------------------------------


// ФУНКЦИОНАЛ ТЕНИ START
// переменная chk доступ к флажку переключателя
var chk = document.getElementById('chk');
// переменная sdw_width - ширина тени
var sdw_width = document.getElementById('sdw_width');
// переменная sdw_height - высота тени
var sdw_height = document.getElementById('sdw_height');
// переменная sdw_radius - радиус тени
var sdw_radius = document.getElementById('sdw_radius');
// переменная sdw_streach - растяжение тени
var sdw_streach = document.getElementById('sdw_streach');
// переменная brush - выбор цвета тени
var brush = document.getElementById('brush');

// ф-ия для определения, если chackbox true то функционал считывает значения из переменных
function shadowToBox () {
  if (chk.checked) {
    result.style.boxShadow = sdw_width.value + 'px' + ' ' + sdw_height.value + 'px' + ' ' + sdw_radius.value + 'px' + ' ' + sdw_streach.value + 'px' + ' ' + brush.value;
  } else if (!chk.checked) {
    console.log('NOT');
  }
}

// событие input на ширине тени
sdw_width.addEventListener('input', shadowToBox);
// событие input на высоте тени
sdw_height.addEventListener('input', shadowToBox);
// событие input на радиусе тени
sdw_radius.addEventListener('input', shadowToBox);
// событие input на растяжении тени
sdw_streach.addEventListener('input', shadowToBox);
// событие input на выборе цвета тени
brush.addEventListener('input', shadowToBox);
// ФУНКЦИОНАЛ ТЕНИ END


//----------------------------------------------------------------------------


// ФУНКЦИОНАЛ ОБВОДКИ START
// переменная brdpix - доступ к ширине обводки в px
var brdpix = document.getElementById('brdpix');
// переменная brdcolor - выбор цвета обводки
var brdcolor = document.getElementById('brdcolor');

// ф-ия считывания значений для обводки
function borderResult () {
  result.style.border = brdpix.value + 'px' + ' ' + 'solid' + ' ' + brdcolor.value;
}

// событие на brdpix для работы ширины обводки
brdpix.addEventListener('input', borderResult);
// событие brdcolor для выбора цвета тени
brdcolor.addEventListener('input', borderResult);

// ФУНКЦИОНАЛ ОБВОДКИ END

//----------------------------------------------------------------------------
