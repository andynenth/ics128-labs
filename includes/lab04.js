// Part 1 Exercise 1

let input = "this is the string"
let arrayOfInput = Array.from(input);

let target = "t";

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

console.log(input);
console.log(target);
console.log(searchAndDestroy(arrayOfInput, target));
console.log(arrayOfInput.join(""));

// Part 1 Exercise 2

var suits = ["Hearts","Spades","Clubs","Diamonds"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// Generate a random interget.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Get a card from randon position, and remove it from the deck.
function draw() {
    let randomPosition = getRandomInt(deck.length-1); // Zero-based
    console.log("Position: " + randomPosition);
    let c = deck[randomPosition];
    deck.splice(randomPosition, 1);
    return c;
}

// Convert JSON to string.
function readCard(card){
    return card.Number + " of " + card.Suit;
}

// Create a standard deck od 52 cards.
function createDeck(suits, numbers) {
    let cards = new Array();
    for(let i = 0; i < suits.length; i++)
    {
        for(let j = 0; j < numbers.length; j++)
        {
            let card = {Number: numbers[j], Suit: suits[i]};
            cards.push(card);
        }
    }
    return cards;
}

// "Create a function that randomly draw 2 cards and display them."
function drawTwoCards(){
    // Draw!!
    let card1 = draw();
    console.log("Card left: " + deck.length);
    // Draw again!!
    let card2 = draw();
    console.log("Card left: " + deck.length);
    // Read it out loud!
    console.log(readCard(card1));
    console.log(readCard(card2));
}

// Create a new deck
let deck = createDeck(suits, numbers);
console.log("Card left: " + deck.length);
// Draw 2 cards
drawTwoCards();


