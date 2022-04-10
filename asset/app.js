function resultat(){
    document.Calculator.view.value = eval(document.Calculator.view.value);
}

console.log(document.Calculator.view.value);

function ajouter(signe){
    var chaine = document.Calculator.view.value;
    var operateurs = "+-*/";
    if (operateurs.indexOf(signe) > -1) {
        switch (chaine.substring(chaine.length - 1)) {
            case "+":
            case "-":
            case "*":
            case "/":
                chaine = chaine.substring(0, chaine.length - 1);
                break;
        }
    }
    document.Calculator.view.value = chaine + signe;
}

function fonctionSpeciale(fonction){
    switch (fonction){
        case "sqrt":
            document.Calculator.view.value = Math.sqrt(eval(document.Calculator.view.value));
            break;
        case "log":
            document.Calculator.view.value = Math.log(eval(document.Calculator.view.value));
            break;
        case "pow":
            document.Calculator.view.value = Math.pow(eval(document.Calculator.view.value), 2);
            break;
    }
}