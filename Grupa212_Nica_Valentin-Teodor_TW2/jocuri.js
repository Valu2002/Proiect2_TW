let currentScrollPosition = 0;
let scrollAmount = 1000;

const sCont = document.querySelector(".joc-container");
const hScroll = document.querySelector(".scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
  currentScrollPosition += (val * scrollAmount);

  if (currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = "0";
  }
  else {
    btnScrollLeft.style.opacity = "1";
  }
  if (currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = "0";
  }
  else {
    btnScrollRight.style.opacity = "1";
  }

  sCont.style.left = currentScrollPosition + "px";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


var checkboxes = document.querySelectorAll('.option-input.checkbox');

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    checkboxes.forEach(function (otherCheckbox) {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});


var header = document.getElementById('header');


var headerOffset = header.offsetTop;

function handleScroll() {

  if (window.pageYOffset >= headerOffset) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
}

window.addEventListener('scroll', handleScroll);

var numeJocuri = ["Marvel's Spider-man 2", "Dragon's Dogma 2", "Counter Strike 2", "Wolverine", "Resident Evil 9"];


var numeJocuriEditate = ["Fortnite 2", "Killing Floor 3", "Deadspace 4", "Son of Defenders", "Tekken 9"];
var parinte = document.querySelector(".upcoming");
var elementeEditate = false;

function adaugaElement() {
  stergeElemente();

  var listaJocuri = elementeEditate ? numeJocuriEditate : numeJocuri;

  listaJocuri.forEach(function (numeJoc, index) {
    var paragraf = document.createElement("p");
    paragraf.setAttribute("id", "joc-" + index);
    var text = document.createTextNode(numeJoc);
    paragraf.appendChild(text);
    parinte.appendChild(paragraf);
  });
}

function editeazaElemente() {
  elementeEditate = !elementeEditate;
  adaugaElement();
}

function stergeElemente() {
  while (parinte.firstChild) {
    parinte.removeChild(parinte.firstChild);
  }
}

fetch("http://localhost:3000/games")
  .then(response => response.json())
  .then(data => {
    const games = data.games;
    
  })
  .catch(error => {
    console.error("A apărut o eroare:", error);
  });

const newGameData = {
  name: "Cyberpunk 2077",
  platform: "V-Console"
};

fetch("http://localhost:3000/games", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newGameData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

const updatedGameData = {
  name: "The Witcher 3: Wild Hunt",
  platform: "V-Console"
};

fetch("http://localhost:3000/games/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedGameData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch("http://localhost:3000/games/1", {
  method: "DELETE"
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
