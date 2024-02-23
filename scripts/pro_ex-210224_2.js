function math() {
    k = +prompt('Yechmoqchi bo\'gan misollar sonini kiriting:', 5)
    let amallar = '+-*/%'
    for (let i = 0; i <= k; i++) {



        let index = Math.round((Math.random() * ((amallar.length - 1) - 0) + 0))
        let amal = amallar[index]
        let n = +prompt('1-sonni kiriting:')
        let m = +prompt('2-sonni kiriting:')
        let userAnswer = +prompt('Hisoblang: ' + n + amal + m)
        if (amal == '+') {
            answer = n + m
        }
        else if (amal == '-') {
            answer = n - m
        }
        else if (amal == '*') {
            answer = n * m
        }
        else if (amal == '/') {
            answer = n / m
        }
        else {
            answer = n % m
        }

        if (userAnswer == answer) {
            console.log(`Sizning javobingiz to\'ri: ${userAnswer}`)
        } else {
            console.log(`Sizning javobingiz noto\'ri: ${userAnswer}, to\'g\'ri javob: ${answer}`)
        }
    }
}


math()


// let str = "/";
// let asciiCode = str.charCodeAt(0);

