function cartObj() {
    let rand = randomNumber(1, 2)

    const priceList = {
        1: {
            'Lavash': {
                info: 'Big cheese',
                price: 1500
            },
            'Hot-Dog': {
                info: 'Mini',
                price: 1500
            },
            'Cola': {
                info: '1.5 L',
                price: 9000
            },
        },
        2: {
            'Lavash1': {
                info: 'Big cheese1',
                price: 1500
            },
            'Hot-Dog1': {
                info: 'Mini1',
                price: 1500
            },
            'Cola1': {
                info: '1.5 L',
                price: 9000
            },
        }
    }

    return priceList[rand]
}


function randomNumber(min, max) {
    let number = Math.round(Math.random() * (max - min) + min)
    return number
}

let b = cartObj()
function counter(b) {
    let products = ''
    let totalPrice = 0
    for (key in b) {
        products += key + '( ' + b[key].info + ' ), '
        totalPrice += b[key].price
    }

    totalPrice += 9000

    console.log(`Sizning buyurtmangiz: ${products} yetkazib berish xizmati bilan ${totalPrice}`);
}

counter(b)



