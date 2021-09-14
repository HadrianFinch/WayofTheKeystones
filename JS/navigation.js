
var body = document.querySelector("body");

body.addEventListener('load', loaded());

function br(parent)
{
    var elm = document.createElement("br");
    parent.insertBefore(elm, document.querySelector('h1, div'));
}

function addNavButton(navbar, text, link)
{
    var elm = document.createElement("a");
    elm.href = link;
    elm.classList.add("navbarButton");
    
    var txt = document.createElement("span");
    txt.innerHTML = text;
    txt.classList.add("navbarText");

    navbar.appendChild(elm);
    elm.appendChild(txt);

    return elm;
}

function showDiceRoller()
{
    window.open('dicetray.html', 'Virtuial Dice Tray', 'width=500,height=600'); 
    return false;
}

function loaded()
{
    var navigation = document.createElement("div");
    
    navigation.classList.add("navbar");
    
    body.appendChild(navigation);
    // br(body);
    
    addNavButton(navigation, "<img src='images/Way of the keystones logo 350x128.png' width='80px style='margin: none; padding: none;'></img>", "index.html");

    addNavButton(navigation, "Home", "index.html");
    addNavButton(navigation, "Rules", "rules.html");

    addNavButton(navigation, "", "#").classList.add("navbarNoShow");

    addNavButton(navigation, "Alice", "alice.html");
    addNavButton(navigation, "Thorin", "thorin.html");
    addNavButton(navigation, "Reiner", "reiner.html");
    
    addNavButton(navigation, "", "#").classList.add("navbarNoShow");

    var diceBtn = addNavButton(navigation, "Dice", "#");
    console.log(diceBtn);
    diceBtn.addEventListener('click', showDiceRoller);
}