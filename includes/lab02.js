// Part 1.1
let mid;

let a = parseInt(prompt("Please enter a number (1/3)"));
let b = parseInt(prompt("Please enter a number (2/3)"));
let c = parseInt(prompt("Please enter a number (3/3)"));

// Checking for b
if ((a < b && b < c) || (c < b && b < a)){
    mid = b;
}
// Checking for a
else if ((b < a && a < c) || (c < a && a < b)){
    mid = a;
}
else{
    mid = c;
}

// Checking if result is even
if(mid%2===0){
    // Convert the result to string
    mid = mid.toString();
    // Display the result number in red
    mid = mid.fontcolor("red");
}

let result1 = "The middle number of (" + a + "," + b + ","+ c + ") is: " + mid;
document.getElementById("middleNumber").innerHTML = result1;

// Part 1.2
let percent = prompt("Please enter a percentage (a number from 0-100)");
let grade;

//Check if user enter a "number" that has value between 0-100
while(percent>100||percent<0||!/^\d+$/.test(percent)){
    percent = prompt("Incorrect - not between 0-100");
}

if (percent >= 90) {
    grade = 'A';
    grade = grade.fontcolor('green');
}
else if (percent >= 80) {
    grade = 'B';
    grade = grade.fontcolor('blue');
}
else if (percent >= 65) {
    grade = 'C';
    grade = grade.fontcolor('yellow');
}
else if (percent >= 50) {
    grade = 'D';
    grade = grade.fontcolor('black');
}
else {
    grade = 'F';
    grade = grade.fontcolor('red');
}

let result2 = "The letter grade for "+ percent +"% is: " + grade;
document.getElementById("gradeCalculator").innerHTML = result2;

// Part 2.1


let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        pattern += "# ";
    }
    pattern += "<br />";
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
        pattern += "# ";
    }
    pattern += "<br />";
}

let result3 = pattern;
document.getElementById("iterationQuestion").innerHTML = result3;

// Part 2.2
let sizeOfSmog = 100;
let sizeOfBangkok = 125000;
let count = 0;
let half;

// Calculate time to swallow entire Bangkok
while (sizeOfSmog <= sizeOfBangkok) {
    sizeOfSmog *= 1.06;
    count += 1;
    // Calculate time to swallow the half of Bangkok
    if(sizeOfSmog <= sizeOfBangkok/2){
        half = count;
    }
}

let result4 = "Fully envelop Bangkok in MINUTES: "+count+ "<br>"+"Fully envelop Bangkok in MINUTES: "+half;
document.getElementById("theSmog").innerHTML = result4;