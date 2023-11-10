let operateurs = "+-/*%";

function checkOperateur(val) {
    if ( operateurs.indexOf(val) === -1 ) {
        alert("Opérateur invalide !\nOpérateurs acceptés = + - * / %");
        document.getElementById('operateur').value = '';
    }
}

function calculer() {
    let saisie1 = parseFloat(document.getElementById('saisie1').value);
    let saisie2 = parseFloat(document.getElementById('saisie2').value);

    if ( !isNaN(saisie1) && !isNaN(saisie2) ) {
        let resultat = 0;
        switch (document.getElementById('operateur').value) {
            case '+':
                resultat = saisie1 + saisie2;
                break;
            case '-':
                resultat = saisie1 - saisie2;
                break;
            case '*':
                resultat = saisie1 * saisie2;
                break;
            case '/':
                resultat = saisie1 / saisie2;
                break;
            case '%':
                resultat = saisie1 % saisie2 == 0 ? 'Vrai' : 'Faux';
                break;
            default:
                resultat = '';
                break;
        }

        document.getElementById('resultat').value = isNaN(resultat) ? resultat : Math.round(resultat * 100) / 100;
    }
}