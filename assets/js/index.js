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
        if(i%3 === 0) result++;
    }
    document.getElementById('display-2').innerText = `Số chia hết cho 3 nhỏ hơn 1000: ${result} số`;
}

// Bài 3

function getMinNumber() {
    var sum = 0;
    var i = 1;

    while (sum < 1e4) {      
        sum += i;
        i++;
    }
    document.getElementById('display-3').innerText = `Số nguyên dương nhỏ nhất: ${i-1} `;
}

//Bài 4

