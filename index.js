function sum (...numbers) {
    return numbers.join(', ');
}

console.log(sum(1,3,5,7,3));
//---numbers - dowolna liczba argumentow


const sum = (a, b) => a + b;

console.log(sum(2, 3));


//funkcja strzalkowa, jesli ma tylko jeden argument to mozemy pominac nawias, bedzie  to wygladaalo tak: const pow = a => a*a;


// obiekt person
const person = {
    name: 'Anna', //wlasciwosc i wartosc
    surname: 'Kowalska', //dodawac przecinek na koncu
};

console.log(person.name);

//airbnb javascript - jak pisac czytelny skrypt (styleguide) na github

//inny sposob zapisu wlasciwosci gdy np piszemy je po polsku

const person = {
    'imie': 'Anna', //wlasciwosc i wartosc
    'nazwisko: osoby': 'Kowalska', //dodawac przecinek na koncu
};

console.log(person['nazwisko: osoby']);


// typy number, string, boolean, null

//destrukturyzacja

const person = {
name: 'Anna',
surname: 'Kowalska',

}
const {name, surname} = person;


//klasy (nie ma prawdziwych klas w js), konstruktor istnieje domyslnie

class Person {
    constructor(){
        console.log('Tworzenie obiektu');

    }
}
const john = new Person();
console.log(john);

//slowko new tworzy nam obiekt na bazie klasy

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;

    }

    sayHi(withWho) {
        console.log('Hello, World! I am', this.name, 'how are you', withWho);
    }
}
const john = new Person('Jan', 'Kowalski');
john.sayHi('Anna');


//moduly (dzielimy jeden plik na kilka mniejszych)
//export
module.exports = {
    Person, //lub Person: Person
};

//const name = 'Anna';
//const person = { name,} jesli nazwa jest taka sama 

//w drugim pliku do importu:
const myGloriousModule = require('./person'); //lub

const {Person} = require('./person');