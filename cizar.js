function codifica() {

    var palavra = document.querySelector("#selecionar").selectedIndex
    if (palavra == 2) {
        var msg = document.getElementById("linha").value
        if (document.querySelector("#encriptar").checked) {
            document.getElementById("resultado").innerHTML = btoa(msg);

        } else {
            document.getElementById("resultado").innerHTML = atob(msg);
        }
    } else {
        var msg = document.getElementById("linha").value
        var naruto = document.getElementById("resultado")
        var goku = parseInt(document.getElementById("numero").value)
        if (document.querySelector("#encriptar").checked) {
            naruto.innerHTML = cifraCesar(msg, goku);
        } else {
            naruto.innerHTML = cifraCesar2(msg, goku);
        }
    }

}

function cifraCesar(str, num) {

    var lowerCaseStr = str.toLowerCase();
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === '') {
            newStr += currentLetter;
        } else {

            var currentIndex = alfabeto.indexOf(currentLetter)
            var newIndex = currentIndex + num;
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = newIndex + 26;

            newStr += alfabeto[newIndex];


        }

    }
    return newStr;
}

function cifraCesar2(str, num) {

    var lowerCaseStr = str.toLowerCase();
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === '') {
            newStr += currentLetter;
        } else {

            var currentIndex = alfabeto.indexOf(currentLetter)
            var newIndex = currentIndex - num;
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = newIndex + 26;

            newStr += alfabeto[newIndex];


        }

    }
    return newStr;
}