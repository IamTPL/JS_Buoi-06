var btns = document.getElementsByClassName('title');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active-title');
        if (current.length != 0) {
            current[0].className = current[0].className.replace(
                ' active-title',
                ''
            );
        }
        this.className += ' active-title';
    });
}

// Bài 1

function oddEven() {
    var odd = ['Số lẻ: '];
    var even = ['_Số chẵn: '];
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) even.push(i);
        else odd.push(i);
    }
    document.getElementById('display-1').innerText = `${odd}\n${even}`;
}

// Bài 2

function divisible_3() {
    var result = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0) result++;
    }
    document.getElementById(
        'display-2'
    ).innerText = `Số chia hết cho 3 nhỏ hơn 1000: ${result} số`;
}

// Bài 3

function getMinNumber() {
    var sum = 0;
    var i = 1;

    while (sum < 1e4) {
        sum += i;
        i++;
    }
    document.getElementById(
        'display-3'
    ).innerText = `Số nguyên dương nhỏ nhất: ${i - 1} `;
}

//Bài 4

function getSum() {
    var x = document.getElementById('numX').value * 1;
    var n = document.getElementById('numN').value * 1;
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += x ** i;
    }
    document.getElementById('display-4').innerText = `Tổng: ${sum} `;
}
//Bài 5

function tinhGiaiThua() {
    var n = document.getElementById('giaiThua').value * 1;
    var sum = 1;
    for (let i = 1; i <= n; i++) {
        sum *= i;
    }
    document.getElementById('display-5').innerText = `Giai thừa: ${sum} `;
}
// Bài 6

function createDivTag() {
    var display = document.getElementById('display-6');
    for (let i = 1; i <= 10; i++) {
        var div = document.createElement('div');
        div.style.padding = '5px';
        var text = 'Div ';

        if (i % 2 == 0) {
            text += 'chẵn';
            div.innerText = text;
            div.style.background = 'red';
        } else {
            text += 'lẻ';
            div.innerText = text;
            div.style.background = 'blue';
        }
        display.appendChild(div);
    }
}

//Bài 7

function isPrimeNumber(n) {
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPrimeNumber() {
    var display = [];
    var n = document.getElementById('n').value * 1;
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) display.push(i);
    }
    document.getElementById('display-7').innerText = `${display} `;
}
