let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue = parseInt(minValue) || 0;
maxValue = parseInt(maxValue) || 100;

if (minValue < -999) minValue = -999;
if (maxValue > 999) maxValue = 999;


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;
answerField.innerText = `Это число ${answerNumber }?`;
answerField.innerText = `Всё верно ${answerNumber }?`;

// Заново

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));

    minValue = parseInt(minValue) || 0;
    maxValue = parseInt(maxValue) || 100;

    if (minValue < -999) minValue = -999;
    if (maxValue > 999) maxValue = 999;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumberField.innerText = orderNumber;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

// меньше

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
            answerField.innerText = ` Вы загадали неправильное число!\n\u{1F914}`:
            (phraseRandom === 1) ?
            answerField.innerText = `Я сдаюсь..\n\u{1F92F}`:
            (phraseRandom === 2) ?
            answerField.innerText = `Играйте честно!\n\u{1F914}`:

            
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Это число ${answerNumber }?`;
        }
    }
})

// больше

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
            answerField.innerText = ` Вы загадали неправильное число!\n\u{1F914}`:
            (phraseRandom === 1) ?
            answerField.innerText = `Я сдаюсь..\n\u{1F92F}`:
            (phraseRandom === 2) ?
            answerField.innerText = `Играйте честно!\n\u{1F914}`:
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Всё верно ${answerNumber }?`;
        }
    }
})

// верно

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        const answerPhrase = (phraseRandom === 0) ?
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`:
        (phraseRandom === 1) ?
        answerField.innerText = `Так держать`:
        (phraseRandom === 2) ?
        answerField.innerText = `Это было просто!`:
        gameRun = false;
    }
})

