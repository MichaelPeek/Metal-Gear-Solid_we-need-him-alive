// inhoud van de acties als array. De array is constant omdat, het wordt alleen uitgelezen en word niet veranderd. 
const acties = [
    {
        name: 'Interrogate',
        text: 'The soldier breaks free and knocks you out, when you wake he is gone',
        action_img: "url('./assets/images/fight.jpeg')",
        result_img: "url('./assets/images/lose.jpeg')",
    },
    {
        name: 'Strangle',
        text: 'You strangle the soldier until he passes out and wait for the extraction vehicle to come.',
        action_img: "url('./assets/images/strangle.jpeg')",
        result_img: "url('./assets/images/stun.jpeg')",
    }, 
    {
        name: 'Kill',
        text: 'You kill the soldier. Why did you do that? We needed him alive!',
        action_img: "url('./assets/images/kill.jpeg')",
        result_img: "url('./assets/images/lose.jpeg')",
    },
];

// functie wordt geroepen in de html met de actie die gevraagd wordt.
function actie(actieName) {

    // verstop de keuze knoppen.
    document.getElementById('keuze_knoppen').hidden = true;

    // pak de actie uit de acties_array op basis van de actie naam.
    const actie = acties[acties.findIndex(arrayActie => arrayActie.name === actieName)];

    // overscrhijf de text in de html met de actie text.
    document.getElementById('text').innerText = actie.text;

    // verander de afbeelding met de actie_afbeelding.
    document.getElementById('body').style.backgroundImage = actie.action_img;

    setTimeout(() => {
        // vender de actie_afbeelding na 2 secondes met de resulttaat_afbeelding.
        document.getElementById('body').style.backgroundImage = actie.result_img;

        // speel winned geluid af als goed gekozen, anders faalend geluid.
        if (actieName === 'Strangle') {
            (new Audio('./assets/sfx/MISSION_COMPLETE_AND_HOW!.mp3')).play();
        } else {
            (new Audio('./assets/sfx/Metal_Gear_Solid_Game_Over_Sound_Effect.wav')).play();
        }

        // toon de hidden opnieuw_knop aan eind van spel.
        document.getElementById('opnieuw').hidden = false;
    }, 2000);
}

// opnieuw_knop reset het spel.
function opnieuw() {
    document.getElementById('opnieuw').hidden = true;
    document.getElementById('body').style.backgroundImage = "url('./assets/images/begin.jpeg')";
    document.getElementById('text').innerText = 'Mission: capture the soldier alive so we can extract him.';
    document.getElementById('keuze_knoppen').hidden = false;
}