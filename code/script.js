// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let user = prompt("What's your name?");
if (user !== null && user.trim() !== "") {
  alert(`Hej å välkommen, ${user}! Vi går vidare.`);
} else {
  alert("inget namn? ok latmask.")
}
// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt("ahapp va skaru beställa då? 1. Ramen 2. Dumplings 3. Onigiri");
let subtype = "";

if (foodChoice === "1") {
  alert(`ÅTEJ en ramen coming right up.`);
  subtype = prompt("Eller vilken slags ramen förresten? 1. Soja 2. Salt 3. Miso")
  if (subtype === "1") {
    alert(`ÅTEJ shouyu ramen let's go`)
  } else if (subtype === "2") {
    alert(`yummy mami, shiou ramen skarebli.`)
  } else if (subtype === "3") {
    alert(`ok girliepop, a classic miso coming right up`)
  } else {
    alert("girl no. välj ordentligt. ladda om å börja om.");
  }
} else if (foodChoice === "2") {
  alert(`ok gr8 let's go dumplings`);
  subtype = prompt("Va för slags dumplings blir d idag då? 1. Curry dumplings 2. Veggie dumplings 3. Kött å kyckling mix dumplings");
  if (subtype === "1") {
    alert(`yas mama, desi classic curry dumps we gotchu`);
  } else if (subtype === "2") {
    alert(`ohh ok i see u veggie queen`);
  } else if (subtype === "3") {
    alert(`ingen klimathjälte idag nej. dw we won't tell`);
  } else {
    alert("girl no. välj ordentligt. nu får du ladda om.");

  }
} else if (foodChoice === "3") {
  alert(`onigiri idag?? a fy faaan va gott ändå`);
  subtype = prompt("va blire för onigiri då? 1. kombu 2. tonfisk 3. yakiniku");
  if (subtype === "1") {
    alert(`det absolut bäst valet. a true classic. u go girl`);
  } else if (subtype === "2") {
    alert(`basic or true classic? oavsett; mums.`);
  } else if (subtype === "3") {
    alert(`the safest choice. u gon love it`);
  } else {
    alert("girl no. välj ordentligt. LADDA OMMMMMMMM");
  }
}

// Step 4 - Age
// Your code goes here
let age = Number(prompt("ok vi måste också veta hur gammal du är så vi vet om du ska ha barn eller vuxen portion"));
if (age > 0 && age < 18) {
  alert("u just a baby!! d blir barnportion till dig");
} else if (age >= 18) {
  alert("big girlie!! vuxenportion let's go.");
} else {
  alert("snälla fyll i som folk. nu får du ladda om.");
}
// Step 5 - Order confirmation
// Your code goes here
let foodNames = {
  "1": "Ramen",
  "2": "Dumplings",
  "3": "Onigiri"
};

let subtypeNames = {
  "1": {
    "1": "Shouyu Ramen",
    "2": "Shiou Ramen",
    "3": "Miso Ramen"
  },
  "2": {
    "1": "Curry Dumplings",
    "2": "Veggie Dumplings",
    "3": "Meat & Chicken Dumplings"
  },
  "3": {
    "1": "Kombu Onigiri",
    "2": "Tuna Onigiri",
    "3": "Yakiniku Onigiri"
  }
};

let finalFood = foodNames[foodChoice];
let finalSubtype = subtypeNames[foodChoice]?.[subtype];
let portion = age < 18 ? "lil baby barnportion" : "big girliepop vuxenportion";

if (!finalFood || !finalSubtype) {
  alert("nej u gotta reload nu. d bidde fel.");
} else {
  alert(
    `OK ${user}-girl, du har beställt ${finalSubtype} (${finalFood}) i en ${portion}. Lets mf go. OKI??`
  );
}
let confirmation = prompt(
  "Är du säker på att du vill beställa? Skriv 'ja' eller 'nej'."
);

if (confirmation.toLowerCase() === "ja") {
  alert("yassssss girl big kock lagar din mat NU");
} else if (confirmation.toLowerCase() === "nej") {
  alert("gjorde du allt detta för att ba skita i det? wasting everyones time smh");
} else {
  alert("bitch vad menar du ens? ladda om.");
}
