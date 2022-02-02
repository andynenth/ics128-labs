// Part 1 Exercise 1
let result1 = '';
testCase("This is a string", 'i');
testCase("bibidi babidi bu", 'b');
testCase("sim sim salabim", 'a');

function letterCount(text, letter)
{
    let letter_Count = 0;
        for (let position = 0; position < text.length; position++) 
        {
            if (text.charAt(position) == letter) 
            {
                letter_Count += 1;
            }
        }
        return letter_Count;
}

function testCase(str, target){
    let count = letterCount(str, target);
    result1 += "<b>The string is: </b>"+str+"<br>" + "The letter \'"+target+"'\ appears " + count + " times.<br><br>";
}


document.getElementById("letterCount").innerHTML = result1;

// Part 1 Exercise 2
// 1. Decalre an object
var labDay = new Date(2022, 2, 1);
// 2. Display string labDay
console.log(labDay);
// 3. Day of week, month, date, year
console.log(labDay.toDateString());
// 4. Only time
console.log(labDay.toTimeString());
// 5. UTC
console.log(labDay.getTime());
// 6.
console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// 7.
console.log(labDay.getHours() + " : " + labDay.getMinutes());
// 8.
var now = Date.now()
// 9.
console.log(now);
// 10.
var errorDate = new Date(2016, 33, 1);
// 11.
console.log(errorDate);
// 12.
var invalidDate = new Date("Funuary 3, 2018");
// 13.
console.log(invalidDate);
// 14.
var options = { weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric' };
// 15. Display in German
console.log(labDay.toLocaleString('de-DE', options));
// 16.
// 17.
var msDay = 24*60*60*1000;
// 18.
var mslabDay = now;
// 19. Create tomorrow
labDay = new Date( mslabDay + msDay );
// 20.
console.log(labDay);

let m = 12; //December
let y = 2018;
let d = daysInMonth(2018,12);

console.log(d);
//console.log(new Date(year, month-1));
//console.log(getWeekendsInMonth(m, y));

function daysInMonth (year, month) { // Use 1 for Jan, 2 for Feb, etc.
    return new Date(year, month, 0).getDate();
}

function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();
    console.log(new Date(year, month, day).toDateString());
    return day !=0 && day !=6;
}

function getWeekendsInMonth(month, year){
    var days = daysInMonth(month, year);
    console.log(days);
    var weekends = 0;
    for(var i=0; i< days; i++){
        if(!isWeekday(year, month, i+1)){
            weekends++;
        }
    }
    return weekends;
}



let result2 ="9";
document.getElementById("dateFunction").innerHTML = result2;