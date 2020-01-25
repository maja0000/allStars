// TASK 1 -> display daily horoscope for each sign

//1. target the paragraph with hidden message <p>
//2. target the hiperlist/selector
//3. connect users star sign with a value and
//4. print out inside hiddent <p>

let hiddenMessage = document.getElementById("hidden-message");
let selector = document.getElementById("star-selector");

selector.addEventListener("change", event => {
  hiddenMessage.innerHTML = event.target.value;
});

// 2 --> display set of qualities about every sign

//1. create object
//2. target button
//3. target <p> where i want to display answer
//4. loop thru object
//5. set timeout
//6. display properties of that key

let starQualities = {
  Aries: ["courageous ", "determined ", "moody"],
  Taurus: ["reliable ", "patient ", "practical"],
  Gemini: ["gentle ", "affectionate ", "nervous"],
  Cancer: ["tenacious ", "highly imaginative ", "loyal"],
  Leo: ["creative ", "passionat ", "practical"],
  Virgo: ["cooperative ", "diplomatic ", "gracious"],
  Libra: ["resourceful ", "brave ", "passionate"],
  Scorpio: [" generous ", "idealistic ", "great sense of humor"],
  Sagittarius: ["progressive ", "original ", "independent"],
  Capricorn: ["compassionate ", "artistic ", "intuitive"],
  Aquarius: ["know-it-all ", "unforgiving ", "condescending"],
  Pisces: ["kind ", "hardworking ", "practical"]
};

let qualitiesBtn = document.getElementById("star-sign-qualities-button");
let qualitiesDisplay = document.getElementById("qualities-display");

qualitiesBtn.addEventListener("click", showStarsQualities);

// WHERE DO I PUT setTimeout(showStarsQualities, 2000);

function showStarsQualities() {
  var keys = Object.keys(starQualities);
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomValue = starQualities[randomKey];

  qualitiesDisplay.innerHTML = `${randomKey} are often ${randomValue}`;

  //check if starsign ends with s and if not add s
  if (randomKey[randomKey.length - 1] !== "s") {
    qualitiesDisplay.innerHTML = `${randomKey}s are often ${randomValue}`;
  } else {
    return;
  }
}

// OPTION NR 2 - LOOP FOR ... IN

// for (const property in starQualities) {
//   qualitiesDisplay.innerHTML = `${property} are often ${starQualities[property][0]},
// ${starQualities[property][1]}
//  and ${starQualities[property][2]}.`;
