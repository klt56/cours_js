

function generatePyramid() {
    nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    var totalNumberofRows = nombre;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';

    }
}

generatePyramid();

