
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text"); //globale

window.addEventListener('scroll', function(){
    let value = window.scrollY;

bg.style.top = value * 0.5 + 'px';
moon.style.left = -value * 0.5 + 'px';
mountain.style.top = -value * 0.15 + 'px';
road.style.top = value * 0.15 + 'px'; //dette er brug af arimetiske operatorer //
text.style.top = value * 1 + 'px'; //dette er settings for hvordan alt skal bevæge sig når man scroller på skærmen//
})


function changeText() {
  let textElement = document.getElementById("text");
  let hour = new Date().getHours(); // Hent det aktuelle timeantal

  let wordsDay = ["Skyer", "Solskin", "Varme", "Sol"];
  let wordsNight = ["Nordlys", "Måneskin", "Stjerner", "Nattelys"]; //dette er arrays og objekter

  let words; // Initialiser variabel til at holde sættet af ord

  if (hour >= 18 || hour < 6) {
      words = wordsNight; // Vælg ord til dagtimerne 
  } else {
      words = wordsDay; // Vælg ord til natten
  }
  //dette er if-else

  let index = 0; // Startindeks for loopet

  // Definer en funktion, der opdaterer teksten
  function updateText() {
      textElement.textContent = words[index];
      index = (index + 1) % words.length; // Brug modulus for at gå tilbage til starten, når vi når slutningen
  }

  // Kald updateText() med det samme, når siden indlæses
  updateText();

  // Sæt et interval for at opdatere teksten hvert 3. sekund
  setInterval(updateText, 3000);
}

// Kald changeText() med det samme, når siden indlæses
changeText(); //jeg bruger  en lokal variabel kaldet index i min kode, den er deklareret inde i funktionen changeText(). Dette er et eksempel på brugen af lokal scope.

// Array med ordene
  const words = ["Countdown", "Till", "We", "Will", "Graduate!"];
// Funktion til at skifte ordene i loop
  function changeWord(index) {
// Find det aktuelle ord på skærmen
  const currentWord = document.getElementById("wordDisplay").textContent;
// Find indekset for det aktuelle ord i arrayet
  const currentIndex = words.indexOf(currentWord);
// Find indekset for det næste ord i arrayet
  const nextIndex = (currentIndex + 1) % words.length;
// Opdater teksten med det næste ord
  document.getElementById("wordDisplay").textContent = words[nextIndex];
}

// Loop gennem arrayet og vis hvert ord
    for (let i = 0; i < words.length; i++) {
// Vis det aktuelle ord
    document.getElementById("wordDisplay").textContent = words[i];
// Vent et sekund
   setTimeout(changeWord, 1000 * (i + 1), i);
}
