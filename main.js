

class Hotel {
  adress;
  numberOfRooms;
  #minFloor;
  #maxFloor;
  rooms = [];

  constructor(adress,numberOfRooms,minFloor,maxFloor,rooms) {

    this.adress = adress;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = rooms
  }

  printAdvertisemen () {
    console.log(`Wellcome To Our Hotel at ${this.adress}`)
  }

  listOfBookedRooms () {
    let list = []
    this.rooms.map (room => {
      if (room.isBooked === true) {
         list.push(room)
      }
    } )
    return list
  }

}

class Room {

  floorNum;
  rooomNum;
  price;
  #isBooked;

  constructor (floorNum, rooomNum, price, isBooked) {

  this.floorNum = floorNum;
  this.rooomNum = rooomNum;
  this.price = price;
  this.#isBooked = isBooked

  }

  printRoom () {
    return (`Yor Room Number is ${this.rooomNum} at ${this.floorNum} Floor Which costs ${this.price} per Night and Booked status is ${this.isBooked}`)
  }

  book () {
     this.#isBooked = true
  }

  get isBooked () {
    return   this.#isBooked
  }

  
}

class SleepingRoom extends Room {

  personCapacity;

  constructor (personCapacity, floorNum, rooomNum, price, isBooked) {

    super(floorNum, rooomNum, price, isBooked);
    this.personCapacity = personCapacity
  }

  printRoom () {
    return (`Yor Room Number is ${this.rooomNum} at ${this.floorNum} Floor Which costs ${this.price} per Night and Booked status is ${this.isBooked} with person Capicty is ${this.personCapacity}`)
  }
}

class RoomWithView extends Room {
  view;
  numberOfBeds;

  constructor (floorNum, rooomNum, price, isBooked, view, numberOfBeds) {

    super (floorNum, rooomNum, price, isBooked);

    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }

  printRoom () {
    return (`Yor Room Number is ${this.rooomNum} at ${this.floorNum} Floor Which costs ${this.price} per Night and Booked status is ${this.isBooked} which has ${this.numberOfBeds} beds with ${this.view} view`)
  }
}

let r1 = new Room(2,4,100, true)
let sr1 = new SleepingRoom(1, 80, 1,2 , 10)
let vr1 = new RoomWithView(1,3,100,true,'good', 2)

let h1 = new Hotel('ramallah', 80, 1,2 ,[r1, sr1, vr1])

console.log(r1.printRoom())


