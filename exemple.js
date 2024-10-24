function calculIMC(poids, taille) {
    
    // Calculer la taille en mètre
    // return poids / Math.pow((taille / 100), 2);
    let tailleEnMetres  = taille / 100;
    let tailleCalculee  = Math.pow(tailleEnMetres, 2);
    let resultat        = poids / tailleCalculee;

    return resultat;

}

let poids   = prompt("Quel est votre poids ? (en kg)");
let taille  = prompt("Quel est votre taille ? (en cm)");

alert(calculIMC(poids, taille));