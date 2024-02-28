// let a=2
// let b = 3
name = 'sal'
// alert('Hello: ${a+b}')
// alert( `hello ${"name"}`)
// alert( +"" );
// let counter = 1;
// let a = counter++; // (*) меняем ++counter на counter++

// alert(counter); // 1
// alert(a); // 1

// for (a = 1, b = 1, c = 10; a < 10; (a++, b++,c--)) {
//     // console.log(a)
//     // console.log(b)
//     console.log(c)
// }

console.log("" + 1 + 0) //10
console.log("" - 1 + 0) //-1
console.log(true + false)//1
console.log(6 / "3")//2
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px
console.log("$" + 4 + 5)//$45
console.log("4" - 2)//2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5)//    -9   5
console.log("  -9  " - 5)// -14
console.log(null + 1) //1
console.log(undefined + 1) // NaN
console.log(" \t \n" - 2) //-2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12
// alert((5 - (5 % 2)) / 2)




// const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
const colors = {
    aqua: '#00ffff',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    black: '#000000',
    blue: '#0000ff',
    brown: '#a52a2a',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgrey: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkviolet: '#9400d3',
    fuchsia: '#ff00ff',
    gold: '#ffd700',
    green: '#008000',
    indigo: '#4b0082',
    khaki: '#f0e68c',
    lightblue: '#add8e6',
    lightcyan: '#e0ffff',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    magenta: '#ff00ff',
    maroon: '#800000',
    navy: '#000080',
    olive: '#808000',
    orange: '#ffa500',
    pink: '#ffc0cb',
    purple: '#800080',
    violet: '#800080',
    red: '#ff0000',
    silver: '#c0c0c0',
    white: '#ffffff',
    yellow: '#ffff00',
};
// randomProp(colors)     // 'red'

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

let keys = Object.keys(colors)
// console.log(colors[keys[Math.floor(keys.length * Math.random())]])

// let a = 10 * Math.random()
// console.log(`${a} => ${a << 0}`);
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]
  

  var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Массив как объект
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, значения возвращаются в порядке возрастания
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo неперечисляемое свойство
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']


// Аргумент, не являющийся объектом, будет приведён к объекту
console.log(Object.values("foo")); // ['f', 'o', 'o']