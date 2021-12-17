// Object constructor en JS
// CLASSES EN JS
// És tot 'sucre sintàctic' (per al programador és més fàcil de programar)
// per darrera JS utilitza prototypes

// Al final el que ens permeten les classes és crear prototypes d'una forma més senzilla i fàcil.

// Per a crear les classes es recomana sempre uppercase

// 1era manera:
class Client {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  mostrarInfo() {
    console.log(
      `Nom: ${this.name}, Cognom: ${this.surname}, Email: ${this.email}`
    );
  }

  // Els mètodes static pertanyen només a la classe i no a l'objecte o instància
  static benvinguda() {
    return "Benvingut al curs de CLIENTS en JS";
  }
}

const sam = new Client("Sam", "Smith", "samsmith@gmail.com");
console.log(sam);

sam.mostrarInfo();
console.log(Client.benvinguda());

// 2na manera:
const Client2 = class {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  mostrarInfo() {
    console.log(
      `Nom2: ${this.name}, Cognom2: ${this.surname}, Email2: ${this.email}`
    );
  }
};

const sam2 = new Client2("Sam", "Smith", "samsmith2@gmail.com");
sam2.mostrarInfo();
