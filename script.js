document.addEventListener("DOMContentLoaded", function() {
    
    const intituleDep = document.getElementById("intitule");
    const sommeDep = document.getElementById("somme");
    const ajoutButton = document.getElementById("ajouter");
    const listDepense = document.getElementById("liste-depenses");
    const montantTotal = document.getElementById("montant-total");
    const effacerToutButton = document.getElementById("effacer-tout");


    // Liste pour stocker les dépenses
let depenses = [];
let totalDepenses = 0;

// Fonction pour ajouter une dépense
function ajouterDepense() {
    const intitule = intituleDep.value;
    const somme = parseFloat(sommeDep.value);

    if (intitule.trim() === "" || isNaN(somme) || somme <= 0) {
        alert("Veuillez saisir un intitulé et une somme valide.");
        return;
    }

    // Ajout de la dépense à la liste
    depenses.push({ intitule, somme });

    // Mise à jour de l'affichage
    afficherDepenses();
    calculerTotal();

    // Effacer les champs de saisie
    intituleDep.value = "";
    sommeDep.value = "";
}

// Fonction pour afficher les dépenses
function afficherDepenses() {
    listDepense.innerHTML = "";
    depenses.forEach((depense, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
    <p><strong>Intitulé : </strong> ${depense.intitule} </p>
    <p><strong>Somme : </strong> ${depense.somme} DT</p>
    <button data-index="${index}">Effacer</button>`;

        listDepense.appendChild(card);

        const boutonEffacer = card.querySelector("button");
        boutonEffacer.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        supprimerDepense(index);
    });

    });
}

// Fonction pour supprimer une dépense
function supprimerDepense(index) {
    depenses.splice(index, 1);
    afficherDepenses();
    calculerTotal();
}

// Fonction pour calculer le total des dépenses
function calculerTotal() {
    totalDepenses = depenses.reduce((total, depense) => total + depense.somme, 0);
    montantTotal.textContent = totalDepenses.toFixed(2);
}

ajoutButton.addEventListener("click", ajouterDepense);

// Initialisation
afficherDepenses();
calculerTotal();



});




