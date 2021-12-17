// A la poo existeixen atributs publics i privats.
// si podem accedir des de la classe i des de la instància, llavors es que és públic.

class Client {
  #name;

  constructor(name, surname, email) {
    this.#name = name; // atribut privat
    this.surname = surname; // atributs públics
    this.email = email;
  }

  mostrarInfo() {
    console.log(
      `Nom: ${this.#name}, Cognom: ${this.surname}, Email: ${this.email}`
    );
  }

  // Els mètodes static pertanyen només a la classe i no a l'objecte o instància
  static benvinguda() {
    return "Benvingut al curs de CLIENTS en JS";
  }
}

const sam = new Client("Sam", "Smith", "sam@lego.com");
// console.log(sam.name); // undefined
// console.log(sam.#name); // error
sam.mostrarInfo();

class Client2 {
  #name;
  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}

const client2 = new Client2();
client2.setName("Samuel");
console.log(client2.getName());
// client2.#name; // error

// mirar si ja funciona als navegadors (el que posis al cercador)
// https://caniuse.com/
