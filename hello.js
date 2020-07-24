console.log('Hello Word') //Hello Word

var bananaPrice = 12;
console.log(bananaPrice); //12
console.log(typeof bananaPrice); //number
var seenAfter = 25;
console.log(typeof seenAfter)//number

var name = "Ashraful Islam"
console.log(typeof name)//string
var isHot = true;
var isRich = false;
console.log(typeof isHot)//boolean
console.log(typeof isRich)//boolean

console.log(typeof NaN);//number

var name = "Abdul Alim"
myName = "Abdur Rahim"
console.log(name)//Abdul Alim
console.log(myName)//Abdur Rahim

var givePromise = "I will Hard Work I Everyday.";
console.log('Normal Text:',givePromise)//I will Hard Work I Everyday.
console.log('Small Text:',givePromise.toLowerCase());//i will hard work i everyday.
console.log('Large Text:',givePromise.toUpperCase())//I WILL HARD WORK I EVERYDAY.
console.log(givePromise.indexOf('work'))//-1
console.log(givePromise.indexOf('Work'))//12
console.log(givePromise.indexOf('r'))//9

console.log(givePromise.split('I'))//[ '', ' will Hard Work ', ' Everyday.' ]
console.log(givePromise.split(''))//['I',' ','w','i','l','l',' ','H','a','r','d',' ','W','o','r','k',' ','I',' ','E','v','e','r','y','d','a','y','.']
console.log(givePromise.split(' '))//[ 'I', 'will', 'Hard', 'Work', 'I', 'Everyday.' ]


var name = "BanglAdesh" 

console.log(name.toLowerCase())//bangladesh
console.log(name.toUpperCase())//BANGLADESH
console.log(name.toLocaleLowerCase())//bangladesh
console.log(name.toLocaleUpperCase())//BANGLADESH
console.log(name.indexOf('desh'))//6
console.log(name.indexOf('de'))//6

var number1 = 25;
var number2 = 15.5
var number3 = '15.5'
console.log(number1 + number3)//2515.5
number3 = parseFloat(number3) //same as number3 = +number3
console.log(number1 + number2)//40.5
console.log(number1 + number3)//40.5

var num1 = 0.1
var num2 = 0.2
total = num1 + num2
total = total.toFixed(4)
console.log(total)//0.3000

var price1 = 25
var price2 = 35
var totalPrice = price1 + price2
console.log(totalPrice)//60

var num = -5
var num1 = 8.43455
var num3 = 8.73455
var absoluteNumber = Math.abs(num)
var as = Math.round(num1)
var as1 = Math.round(num1)
console.log(as)//8
console.log(as1)//9
console.log(absoluteNumber)//5


var ceilNumber = 5.8454;
var result = Math.ceil(ceilNumber)//6
console.log(result)
console.log(Math.floor(ceilNumber))//5

var number = Math.random()*100

console.log(Math.round(number))//Differnetn number will show between 10 and 100.
