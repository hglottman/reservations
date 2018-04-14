//PUTTING IT ALL TOGETHER// Objects


/*var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function() {
   if (name in reservations && reservations[name].claimed === true) {
       alert('you have already claimed it ')
   } else if (name in reservations && reservations[name].claimed == false) {
       alert('welcome')
   } else {
       alert('your name isnt on the list')
   }

}

claimReservation();*/



//INDIVIDUAL EXERCISE 1//
/*var reservations = {
  "roni": { claimed: true } ,
  "amos": { claimed: true },
  "noa": { claimed: true }  
}

var name = prompt('Please enter your name');

var reservation = function() {
  if (name in reservations) {
      alert('you already have a reservation')
  } else {
    reservations[name] = {
        claimed: true
        }
        alert('your name is on the list')
    }  
  }

  reservation();
  console.log(reservations);*/



  //INDIVIDUAL EXERCISE 2//
  /*var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var promptName = prompt('Please enter the name for your reservation');
var name = promptName[0].toUpperCase() + promptName.slice(1).toLowerCase();

var claimReservation = function() {
   if (name in reservations && reservations[name].claimed === true) {
       alert('you have already claimed it ')
   } else if (name in reservations && reservations[name].claimed == false) {
       alert('welcome')
   } else {
       alert('your name isnt on the list')
   }

}

claimReservation();*/

/***********************************************************************************/

//3 - JS `THIS'//

//PARTNER EXERCISE 1//

/*var person = {
  hungry: true,

  feed: function () {
    if (hungry) {
      hungry = false;
      alert('Im no longer hungry!');
    }
  }
}

person.feed();*/



//PARTNER EXERCISE 2//

/*var pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

var garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);*/




//PARTNER EXERCISE 3//

/*var pumpFuel = function (plane) {
  plane.fuel += 1;
};

var airplane = {
  fuel: 0,
  fly:
  function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
}

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Can it fly now? ' + airplane.fly());*/



//PARTNER EXERCISE 4//

/*var tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (number){
    this.coinCount -= number;
  }
};

tipJar.tip();
console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);*/


  
//PARTNER EXERCISE 5//

var revealSecret = function () {
  return this.secret;
};

var shoutIt = function (person, func) {
  person.revealItAll = func;
  var result = person.revealItAll();
  alert(person.name + " said: " + result);
};

var avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);