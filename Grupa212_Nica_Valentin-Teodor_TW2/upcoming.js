var numeJocuri = ["Nume joc 1", "Nume joc 2", "Nume joc 3", "Nume joc 4", "Nume joc 5"];

function adaugaElement() {
    var parinte = document.querySelector(".upcoming");

    // Crează un nou element <p>
    var paragraf = document.createElement("p");

    // Extrage random un nume din lista de jocuri
    var numeJocRandom = numeJocuri[Math.floor(Math.random() * numeJocuri.length)];

    // Setează textul pentru noul element
    var text = document.createTextNode(numeJocRandom);
    paragraf.appendChild(text);

    // Adaugă noul element la DOM
    parinte.appendChild(paragraf);
}

function editeazaElement() {
    var parinte = document.getElementById("myDiv");

    // Obține primul element <p> din diviziune
    var paragraf = parinte.getElementsByTagName("p")[0];

    // Editează textul elementului <p>
    paragraf.innerHTML = "Textul a fost editat.";
}

function stergeElement() {
    var parinte = document.getElementById("myDiv");

    // Obține primul element <p> din diviziune
    var paragraf = parinte.getElementsByTagName("p")[0];

    // Șterge elementul din DOM
    parinte.removeChild(paragraf);
}