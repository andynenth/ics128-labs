class Hotel {
    constructor(name, city, room, booked, gym) {
        this._name = name;
        this._location = city;
        this._booked = booked;
        this._room = room;
        this.gym = gym;
    }
    // add "getter" and "setter" methods for the 5 constructor properties
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get location(){
        return this._location;
    }
    set location(location){
        this._location = location;
    }
    get room(){
        return this._room;
    }
    set room(room){
        this._room = name;
    }
    get booked(){
        return this._booked;
    }
    set booked(booked){
        this._booked = booked;
    }
    get gym(){
        return this._gym;
    }
    set gym(gym){
        this._gym = gym;
    }
    get roomTypes(){
        return this._roomTypes;
    }
    set roomTypes(roomTypes){
        this._roomTypes = roomTypes;
    }
    get swimmingPool(){
        return this._swimmingPool;
    }
    set swimmingPool(swimmingPool){
        this._swimmingPool = swimmingPool;
    }
    get airportShuttle(){
        return this._airportShuttle;
    }
    set airportShuttle(airportShuttle){
        this._airportShuttle = airportShuttle;
    }
    get restaurants(){
        return this._restaurants;
    }
    set restaurants(restaurants){
        this._restaurants = restaurants;
    }
    bookRoom(){
        this.booked++;
    }
    cancelRoom(){
        this.booked--;
    }
    availableRooms(){
        return this.room-this.booked;
    }
    addRoomType(roomType){
        this._roomTypes.push(roomType);
    }
}
// add 1 to the booked property and display a message that the room was booked and that there are x rooms remaining for booking
function bookRoom(){
    h1.bookRoom();
    result1 += `You have book a room. There are now ${h1.availableRooms()} rooms available today</br></br>`;
}
// remove 1 from the booked property and display a message that the room was cancelled and that there are x rooms remaining for booking.
function cancelRoom(){
    h1.cancelRoom();
    result1 += `You have cancelled your room. There are now ${h1.availableRooms()} rooms available today</br></br>`;
}
function addRoomType(roomType){
    h1.addRoomType(roomType);
    result1 += `The available room types are: ${h1.roomTypes.toString()}</br></br>`;
}

let h1 = new Hotel("California","Todos Santos",11, 1, false);
h1.roomTypes = ["twin", "double", "suite"];
h1.swimmingPool = true;
h1.airportShuttle = false;
h1.restaurants = [["Harolds", "American"], ["Kyoto", "Japanese"], ["Relax", "Fusion"]];


// Display the hotel name and location and how many rooms are available
let result1 = `The hotel is a ${h1.name}, located in ${h1.location}</br></br>`+
    `There are ${h1.availableRooms()} rooms available today</br></br>`;
// Book a room, show how many rooms are available
bookRoom();
// Cancel a room, show how many rooms are available
cancelRoom();
// Add a room type (honeymoon), display the room types now available
addRoomType("honeymoon");
// Display whether the hotel has a shuttle (true or false)
result1 += `<b>Hotel has a shuttle?</b> ${h1.airportShuttle}</br></br>`;
// Display whether the hotel has a pool (true or false)
result1 += `<b>Hotel has a swimming pool?</b> ${h1.swimmingPool}</br></br>`;
// Display all of the restaurants (name and theme) that are at the hotel
result1 += `<b>Hotel has ${h1.restaurants.length} restaurants with a different theme.</b> They are:</br></br>`;
for (let [name, theme] of h1.restaurants) {
    result1 += `<b>${name}: </b> ${theme}</br></br>`;
}

document.getElementById("booking").innerHTML = result1;

// Part 2
class Resort extends Hotel{
    constructor(name, city, room, booked, gym, resortType, beachFront, kidsClub) {
        super(name, city, room, booked, gym);
        this._resortType = resortType;
        this._beachFront = beachFront;
        this._kidsClub = kidsClub;
    }
    get resortType(){
        return this._resortType;
    }
    set resortType(resortType){
        this._resortType = resortType;
    }
    get beachFront(){
        return this._beachFront;
    }
    set beachFront(beachFront){
        this._beachFront = beachFront;
    }
    get kidsClub(){
        return this._kidsClub;
    }
    set kidsClub(kidsClub){
        this._kidsClub = kidsClub;
    }
}

function createNewResort(name, city, room, booked, gym, resortType, beachFront, kidsClub) {
    let resort = new Resort(name, city, room, booked, gym, resortType, beachFront, kidsClub);
    result2 += `<b>A new Resort has been created:</b> ${resort.name} in ${resort.location}. It is a ${resortType} resort.</br></br>`;
    return resort;
}

let result2 = "";
h2 = createNewResort("Renaissance Phuket", "Phuket", 180, 179, false, "family", true, true);
result2 += `<b>Is it on the beach?</b> ${h2.beachFront}</br></br>`;
result2 += `<b>Does it has a kids club?</b> ${h2.kidsClub}</br></br>`;
result2 += `Oh No! The kids club is being renovated!</br></br>`;
h2.kidsClub = false;
result2 += `<b>Does it has a kids club?</b> ${h2.kidsClub}</br></br>`;
document.getElementById("resort").innerHTML = result2;