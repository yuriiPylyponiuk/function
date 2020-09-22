// // 1. Напишіть функцію, що повертає куб числа.

// let numberForExponent = +prompt('Your number', 2);

// function getExponentNumbre (a) {
// 	console.log(Math.pow(a, 3));
// 	return Math.pow(a, 3);
// }

// getExponentNumbre(numberForExponent);

// // 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// let numberA = +prompt('Your number', 2);
// let numberB = +prompt('Your number', 2);
// let numberC = +prompt('Your number', 2);

// function createNewUserValue(a,b,c){
// 	console.log((a+b)/c);
// 	return (a+b)/c;
// }

// createNewUserValue(numberA, numberB, numberC);

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву 
// дня (українською).

// let userDay = +prompt('Enter number from 1 to 7 ', 1);


// function getDayOfWeek(a){
// 	let day;
// 	switch (a) {
// 		case 1:
// 			alert('Monday');
// 			return day = 'Monday';

// 			break;

// 		case 2:
// 			alert('Tuesday');
// 			return day = 'Tuesday';

// 			break;

// 		case 3:
// 			alert('Wednesday');
// 			return day = 'Wednesday';

// 			break;

// 		case 4:
// 			alert('Thursday');
// 			return day = 'Thursday';

// 			break;

// 		case 5:
// 			alert('Friday');
// 			return day = 'Friday';

// 			break;

// 		case 6:
// 			alert('Saturday');
// 			return day = 'Saturday';

// 			break;

// 		case 7:
// 			alert('Sunday');
// 			return day = 'Sunday';

// 			break;

// 		default:
// 			alert('Enter correct number')
// 			break;
// 	}
// }

// let a = getDayOfWeek(userDay);

// 4. Реалізуйте функцію знаходження факторіала

// let userNumberForFactorial = +prompt('Enter number ', 10);

// function createFuctorialNumber(a) {
// 	let count = 1;
// 	for (let i = a; i > 0; i--){
// 		count *=i;
// 	}
// 	alert(count);
// }

// createFuctorialNumber(userNumberForFactorial);
 
// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число 
// в секундах.

// let userHours = +prompt('Enter hours from 0 to 24', 10);
// let userMinutes = +prompt('Enter minutes from 0 to 60', 10);
// let userSeconds = +prompt('Enter seconds from 0 to 60', 10);

// function getSeconds(hours, minutes, seconds) {
// 	let count = 0; 
// 	if((hours >= 0 && minutes >= 0 && seconds >= 0)&&(hours <= 24 && minutes <= 60 && seconds <= 60)){
// 		count = 60 * 60 * hours;
// 		count += 60 * minutes;
// 		count += seconds;
// 		alert(`Date in seconds:  ${count}`);
// 		return count;
// 	}else{
// 		alert('Enter in a correct form');
// 	}
// };

// getSeconds(userHours, userMinutes, userSeconds);

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини 
// та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести 
// повідомлення "Більше одного дня". 

let userSecondsForTransform = +prompt('Enter seconds', 100);
const HOURS =  3600;
const MINUTES = 60;


function transformSecondsTonoormal(seconds){

	let hours, intermediateNmber, minutes,newSeconds;
	
	hours = (seconds/HOURS);
	hours = hours.toFixed(0);
	
	if(hours<24){
	
		intermediateNmber = seconds % HOURS; 
		minutes = intermediateNmber / MINUTES;
		minutes = minutes.toFixed(0);
		newSeconds = seconds % HOURS % MINUTES;
	
		alert(`New formar of time:  ${hours}:${minutes}:${newSeconds}`);
	
	}else{
		alert('Більше одного дня');
	}
}

transformSecondsTonoormal(userSecondsForTransform);


// 7. 4 відмінності ерров фанкшина від звичайної функції.
//1. Якщо у нас є тільки один аргумент то круглі душки не потрібні, ще погіршує читаємість,
//алк скорочує кодю
//2. Данні функції є аналогом функцій expression, і відповідно має тіж вразливості
// на відміну від прости(звичайних функцій)
//3. При записі в один рядок не потрібно прописувати ретурн що повернути значення
//4. У стрілкових функцій немає this, значення this береться ззовні функії