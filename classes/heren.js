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

// Heredem la casse Client a la classe Empresa (empresa seria una classe filla de la clase client)

// recordatori prototypes:
// Amb prototypes utilitzavem Object.create - era bastant més farragós.

class Empre extends Client {
  constructor(name, surname, email, company) {
    super(name, surname, email);
    this.company = company;
  }

  mostrarInfo() {
    // posant el mateix nom reescrivim el mètode del pare (Client)
    // super.mostrarInfo();
    console.log(
      `Nom: ${this.name}, Cognom: ${this.surname}, Email: ${this.email}, Empresa: ${this.company}`
    );
  }

  static benvinguda() {
    return "Benvingut al curs de EMPRE en JS";
  }
}

// const jon = new Client("Jon", "Doe", "jon@doe.com");
// jon.mostrarInfo();
const sam = new Empre("Sam", "Smith", "sam@lee.com", "prosite");
sam.mostrarInfo();

console.log(Empre.benvinguda());
