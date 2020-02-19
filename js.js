var age = prompt('введите ваш возраст');
if(age < 18){
    alert('вы еще молоды ');
}
else if(50 > age || age < 50){
    alert('вы должны больше работать ');
}
else if(age > 50  || age < 60){
    alert('вам скоро на пенсию ');
}
else if(age > 60){
    alert('вам на пенсию ');
}


var oclock = prompt('введите время');
if(oclock >= 6 && oclock < 12 ){
    alert(oclock + ' часа утра')
}
else if(oclock >= 13 && oclock <= 17){
    oclock-=12
    alert(oclock + ' часа дня')
}
else if(oclock >= 18 && oclock <= 24){
    oclock-=12
    alert(oclock + ' часа вечера')
}
else if(oclock >= 0 && oclock <= 5){
    alert(oclock + ' часа ночи')
} 



var num1 = prompt('введите первое число');
var num2 = prompt('введите второе число');
var num3 = prompt('введите третье число');

if(num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3){
    alert('ваше среднее число ' + num1)
}
else if(num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3){
    alert('ваше среднее число ' + num2)
}
else if(num3 < num2 && num3 > num1 || num3 > num2 && num3 < num1){
    alert('ваше среднее число ' + num3)
}


let usertab = +prompt('введите кол-во ступенек');
let usersym = prompt('введите знак ступенек');


for(i = 1 ; i < usertab; i++ ){
    usertab += ' ';
    console.log(usertab + usersym);

    
    
}
let num = +prompt('введите число что бы возвести в степень');
let step = +prompt('введите числостепень');
let l = 1;
for(i = 0 ; i < step ;i++){
   l= l*num
}
alert(l);
