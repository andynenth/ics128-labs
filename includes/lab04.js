// Part 1 Exercise 1

let input = prompt("Enter a string");
let arrayOfInput = Array.from(input);

let target = prompt("Enter a character");

function searchAndDestroy(text, target)
{
    let count = 0;
        for (let position = 0; position < text.length; position++) 
        {
            if (text[position] === target)
            {
                count++;
                text.splice(position, 1)
            }
        }
        return count;
}

//console.log(input);
//console.log(target);
let count = searchAndDestroy(arrayOfInput, target);
//console.log(count);
let theNewString = arrayOfInput.join("");
//console.log(theNewString);

let result1 = "<b>The string is: </b>" + input + "</br>" + "</br>" +
    "<b>The key is: </b>" + target + "</br>" + "</br>" +
    "The character " + target + " appears " + count + " times in the array." + "</br>" + "</br>" +
    "<b>The new string is: </b>" + theNewString;

document.getElementById("part0101").innerHTML = result1;

// Part 1 Exercise 2
// I think I'm too excited about this part....

var suits = ["Hearts","Spades","Clubs","Diamonds"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// Generate a random integer.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Card{
    constructor(suit,number) {
        this.suit = suit;
        this.number = number;
    }
    // Return card's value
    toString(){
        return this.number + " of " + this.suit;
    }
}

// Deck's object
class Deck {
    // Create a playing card deck from suits and numbers.
    constructor(suits, numbers) {
        this.suits = suits;
        this.numbers = numbers;
        let cards = new Array();
        for(let i = 0; i < suits.length; i++)
        {
            for(let j = 0; j < numbers.length; j++)
            {
                const card = new Card(suits[i],numbers[j]);
                cards.push(card);
            }
        }
        this.cards = cards;
    }

    // Get a card from random position, and remove it from the deck.
    dealCard() {
        let randomPosition = getRandomInt(this.size()-1); // Zero-based
        let c = this.cards[randomPosition];
        console.log("Deal: " + c.toString());
        console.log("From position: " + randomPosition);
        this.cards.splice(randomPosition, 1);
        return c;
    }

    // Return size of the deck
    size() {
        return this.cards.length;
    }

    // Return value of all card in the deck
    toString(){
        var value="";
        for (var i = 0; i < this.size(); i++) {
            value += this.cards[i].toString()+"\n";
        }
        return value;
    }
    add(cards){
        for (let i = 0; i <cards.length; i++) {
            this.cards.push(cards[i]);
        }
    }
}

class Hand{
    // Create an empty hand
    constructor() {
        // Declare attribute as Array once an object is created
        this.cards = new Array();
    }

    showHand(){
        try {
            if (this.size() === 0) throw new Error ("Hand is empty");
            var value="";
            for (var i = 0; i < this.size(); i++) {
                value += this.cards[i].toString()+"\n";
            }
            return value;
        }
        catch (e){
            return e.message;
        }
    }

    get [this.cards](){
        return this.cards;
    }

    add(cards){
        for (let i = 0; i <cards.length; i++) {
            this.cards.push(cards[i]);
        }
    }
    // Discard all cards from hand
    discardHand(){
        let c = this.cards;
        this.cards = [];
        return c;
    }
    size() {
        return this.cards.length;
    }
}

// "Create a function that randomly draw 2 cards and display them."
function draw(number){
    let cards= new Array();
    for (let i = 0; i < number; i++) {
        cards.push(deck.dealCard());
        console.log("Cards left: "+deck.size());
    }
    return cards;
}


// Create a new deck
const deck = new Deck(suits,numbers);
// Create an empty hand
const hand = new Hand();
// Draw 2 cards
hand.add(draw(2));

// Display cards in hand
let result2 = "";
for (let i = 0; i < hand.size(); i++) {
    result2 += "<b>Card "+ (i + 1) + " is: </b>" + hand.cards[i].toString() + "<br>" + "<br>";
}
document.getElementById("part0102").innerHTML = result2;

// Return cards to deck
deck.add(hand.discardHand());
//console.log(deck.toString());
console.log(deck.toString());

// Part 2 Exercise 1

document.getElementById("myButton").addEventListener("click", addRow);

let tableStartTag = "<table id='sampleTable' border='1'>";
let rows = "<tr>\n" +
    "<td>Row1 cell1</td>\n" +
    "<td>Row1 cell2</td>\n" +
    "</tr>";
let newRow = "<tr>\n" +
    "<td>New Cell1</td>\n" +
    "<td>New Cell2</td>\n" +
    "</tr>";
let tableEndTag = "</table>";
let table = "";

function addRow(){
    table = tableStartTag + (rows += newRow)+ tableEndTag;
    document.getElementById("sampleTable").innerHTML = table;
}

