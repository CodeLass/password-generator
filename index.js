const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNoNumbers = [
    ...characters.slice(0, 52),
    ...characters.slice(62)
];

const charactersNoSymbols = [
    ...characters.slice(0, 62)
]

const lettersOnly = [
    ...characters.slice(0, 52)
]

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let noNumbersEl = document.getElementById("noNumbers-el")
let noSymbolsEl = document.getElementById("noSymbols-el")
let copyEl = document.getElementById("copy-el")

function setPasswords() {
    password1El.textContent = getPassword()
    password2El.textContent = getPassword()
}

function getRandomCharacter(array) {
    let index = Math.floor(Math.random() * array.length)
    return array[index]
}

function getPassword() {
    let password = ""
    let array = []
    
    if (!noNumbersEl.checked && !noSymbolsEl.checked) {
        array = characters
    } else if (noNumbersEl.checked && noSymbolsEl.checked) {
        array = lettersOnly
    } else if (noNumbersEl.checked) {
        array = charactersNoNumbers
    } else {
        array = charactersNoSymbols
    }
    
    for (let i = 1; i < 16; i++) {
        password += getRandomCharacter(array)
    }
    
    return password
}

// set up event listener

let generateBtn = document.getElementById("btn-generate");

generateBtn.addEventListener("click", function () {
    setPasswords()
    copyEl.textContent="Click password to copy to clipboard"
})

password1El.addEventListener("click", function () {
    navigator.clipboard.writeText(password1El.textContent)
    alert("Password copied!")
})

password2El.addEventListener("click", function () {
    navigator.clipboard.writeText(password2El.textContent)
    alert("Password copied!")
})