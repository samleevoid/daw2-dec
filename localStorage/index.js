let llista = [];

const guardarHores = () => {
  const alumne = f.nom.value;
  const hores = f.hores.value;

  const alumhores = { nom: alumne, hores: hores };

  // primer mirem si ja existeixen dades guarades
  if (localStorage.getItem("dades")) {
    let dades = localStorage.getItem("dades");
    dades = JSON.parse(dades);
    llista = dades;
  }

  llista.push(alumhores);

  // setLocalStorage
  const aString = JSON.stringify(llista);
  localStorage.setItem("dades", aString);

  const sortida = document.querySelector("#sortida");
  sortida.innerHTML = aString;
};

(function () {
  const dades = localStorage.getItem("dades");
  const sortida = document.querySelector("#sortida");
  sortida.innerHTML = dades;
})();
