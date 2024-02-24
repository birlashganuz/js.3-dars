function pass(a, n) {
    let b = a
    let result = ''
    while (a >= n) {

        if (n == 16) {
            rest = a % n
            if (rest == 10) { s_rest = 'A' }
            else if (rest == 11) { s_rest = 'B' }
            else if (rest == 12) { s_rest = 'C' }
            else if (rest == 13) { s_rest = 'D' }
            else if (rest == 14) { s_rest = 'E' }
            else if (rest == 15) { s_rest = 'R' }
            result = s_rest + result
        } else { result = String(a % n) + result }

        a = (a - (a % n)) / n
    }
    result = String(a) + result
    return result
}
a = +prompt('a ni kiriting')
n = +prompt('n ni kiriting')
result = pass(a, n)
// console.log(Number(a).toString(16))
alert(result)

