// Part 1 Exercise 1

let result1 = '';
testCase("This is a string", 'i');
testCase("bibidi babidi bu", 'b');
testCase("The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.", 'v');

function letterCount(text, letter)
{
    let letter_Count = 0;
        for (let position = 0; position < text.length; position++) 
        {
            if (text.charAt(position) === letter)
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
//var labDay = new Date(2022, 2, 1);
// 2. Display string labDay
///=console.log(labDay);
// 3. Day of week, month, date, year
//console.log(labDay.toDateString());
// 4. Only time
//console.log(labDay.toTimeString());
// 5. UTC
//console.log(labDay.getTime());
// 6.
//console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// 7.
//console.log(labDay.getHours() + " : " + labDay.getMinutes());
// 8.
//var now = Date.now()
// 9.
//console.log(now);
// 10.
//var errorDate = new Date(2016, 33, 1);
// 11.
//console.log(errorDate);
// 12.
//var invalidDate = new Date("Funuary 3, 2018");
// 13.
//console.log(invalidDate);
// 14.
//var options = { weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric' };
// 15. Display in German
//console.log(labDay.toLocaleString('de-DE', options));
// 16.
// 17.
//var msDay = 24*60*60*1000;
// 18.
//var mslabDay = now;
// 19. Create tomorrow
//labDay = new Date( mslabDay + msDay );
// 20.
//console.log(labDay);

let m = parseInt(prompt("Enter month"));
let y = parseInt(prompt("Enter year"));
let workHours = 7.5;
// Print month
// Use 1 for Jan, 2 for Feb, etc.
let monthString = new Date(y,m,0).toLocaleString('default', { month: 'long' });
let totalDays = daysInMonth(y, m);
let numberOfWeekends = weekendsInMonth(y, m);
let weekdays = totalDays - numberOfWeekends; // Calculate weekdays in a month
let hourlyWage = parseInt(prompt("Enter hourly wage"));
let pay = weekdays*workHours*hourlyWage;
console.log(monthString);
console.log("Days(" + totalDays + ") - Weekends(" + numberOfWeekends +") = " + weekdays);

function daysInMonth (year, month) { // Use 1 for Jan, 2 for Feb, etc.
    //console.log("daysInMonth m: " + month);
    //console.log("daysInMonth m: " + new Date(year, month,0).toLocaleString('default', { month: 'long' }));
    return new Date(year, month, 0).getDate();
}

// Check if a day is weekday
function isWeekday(year, month, day) { // Use 1 for Jan, 2 for Feb, etc.
    month -= 1;
    //console.log("isWeekday m-1 : "+month);
    var date = new Date(year, month, day);// Zero-based month
    var dayOfWeek = date.getDay();
    //console.log("isWeekday date : " + date.toDateString());
    //console.log("isWeekday dayOfWeek : " + dayOfWeek);
    return dayOfWeek !== 0 && dayOfWeek !== 6;
}

// Calculate weekends in a month
function weekendsInMonth(year, month){ // Use 1 for Jan, 2 for Feb, etc.

    let days = daysInMonth(year, month);
    //console.log("days from weekendsInMonth: "+days);
    var weekends = 0;
    for(var day = 1; day <= days; day++){
        // Count if a day is not a weekday

        if(!isWeekday(year, month, day)){
            weekends++;
            //console.log("It's a weekend!");
        }
    }
    return weekends;
}

let result2 = "Month: " + monthString + "<br>" +
"Year: " + y + "<br>" +
"Weekdays: " + weekdays + "<br>" +
"Salary: $" + parseFloat(hourlyWage).toFixed(2) + "<br>" +
"Pay: $" + parseFloat(pay).toFixed(2);

document.getElementById("dateFunction").innerHTML = result2;

// Part 2
var investment = 10;
var annualRate = 4;
var years = 5;

let result3 = calcFutureValue(investment, annualRate, years) + "<br><br>" +
calcFutureValue(0, annualRate, years) + "<br><br>" +
calcFutureValue(investment, 0, years);

document.getElementById("errorHandling").innerHTML = result3;

function calcFutureValue(principle, rate, years){
    try {
        if (principle <= 0) throw new Error("Principle value must be greater than zero");
        if (rate <= 0) throw new Error("Rate value must be greater than zero");
        if (years <= 0) throw new Error("Years value must be greater than zero");

        var monthlyRate = (rate/12)/100;
        var months = years*12;
        var futureValue = 0;
        for (var i = 0; i < months; i++){
            futureValue = (futureValue + principle)*(1+monthlyRate);
        }
        return parseFloat(futureValue).toFixed(2);
    } catch(e){
        return "Error: "+e.message+".";
    }
}