// COMPRÉHENSION DU CODE
// Logique : 
//      - 3 tableaux :
//          1. Contient les positions des points
//          2. Contient les directions des points
//          3. Sauvegarde les directions précédentes

// -------------------------------------------------- DÉBUT DU CODE ------------------------------------------------- \\

// Définition de la grandeur du plateau de jeu
let rows = 50;
let cols = 50;

// Définition initiale du snake
let position = [0];
let sens = ["ArrowRight"];
let sensPrec = ["ArrowRight"];

// Point à manger générer aléatoirement
let bluePoint = Math.floor(Math.random() * cols * rows);

function initial() {
    // Définition initiale du snake
    position = [0];
    sens = ["ArrowRight"];
    sensPrec = ["ArrowRight"];

    direction = "ArrowRight";
    // Point à manger générer aléatoirement
    bluePoint = Math.floor(Math.random() * cols * rows);
}

// Récupération du div qui contiendra le tableau
const container = document.getElementById("container");

// Function qui établi le plateau initial
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        let color = "beige";
        if (c == 0) {
            cell.style.backgroundColor = "red";
        }
        else {
            cell.style.backgroundColor = color;
        }

        cell.id = "id" + c;
        container.appendChild(cell).className = "grid-item";
    };
};

// Function qui place le point à manger sur le tableau initial
function makeBluePoint() {
    let cell = document.getElementById("id" + bluePoint);
    cell.style.backgroundColor = "blue";
}

// Appel aux fonctions pour initialiser la page
// initial();
// makeGrid(rows, cols);
// makeBluePoint();

// Function qui vide le plateau
function gridEmpty() {
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.getElementById("id" + c);
        cell.style.background = "beige";
    }
}

// Direction du début
let direction = "ArrowRight";

// Listener qui va écouter les flèche du clavier
document.addEventListener("keydown", event => {
    if (event.key == "ArrowDown") {
        direction = "ArrowDown";
    } else if (event.key == "ArrowUp") {
        direction = "ArrowUp";
    } else if (event.key == "ArrowRight") {
        direction = "ArrowRight";
    } else if (event.key == "ArrowLeft") {
        direction = "ArrowLeft";
    }
})

// Déclaration variable utile pour la suite
let number = position.length;
let t = 0;
let score = document.getElementById("score");
score.innerHTML = "Longueur snake : " + number;

// Listener button start pour démarrer la partie
let start = document.getElementById("start");
start.addEventListener("click", () => {
    container.innerHTML = "";
    initial();
    makeGrid(rows, cols);
    makeBluePoint();
    perdu.style.display = "none";
    container.style.display = "grid";
    startGame();
});

// Function évolution du jeu
function startGame() {
    if (direction == "stop") { // Débuggage
    } else {
        setTimeout(() => {
            // Si droite
            if (direction == "ArrowRight") {
                for (let i = 0; i < position.length - 1; i++) {
                    sens[i] = sensPrec[i + 1];
                }
                sens[position.length - 1] = "ArrowRight";
                // Si on touche le point
                if (position[position.length - 1] == bluePoint) {
                    position.push(position[position.length - 1] + 1);
                    number = position.length;
                    score.innerHTML = "Longueur snake : " + number;
                    for (let i = 0; i < number; i++) {
                        let idCell = document.getElementById("id" + position[i]);
                        idCell.style.background = "red";
                    }

                    // Regenerated bluePoint and add it in the grid
                    bluePoint = Math.floor(Math.random() * cols * rows);
                    let idCellNext = document.getElementById("id" + bluePoint);
                    idCellNext.style.background = "blue";
                    sens.push(direction);
                }
            } else if (direction == "ArrowUp") {
                for (let i = 0; i < position.length - 1; i++) {
                    sens[i] = sensPrec[i + 1];
                }
                sens[position.length - 1] = "ArrowUp";
                // Si on touche le point
                if (position[position.length - 1] == bluePoint) {
                    position.push(position[position.length - 1] - cols);
                    number = position.length;
                    score.innerHTML = "Longueur snake : " + number;
                    for (let i = 0; i < number; i++) {
                        let idCell = document.getElementById("id" + position[i]);
                        idCell.style.background = "red";
                    }

                    // Regenerated bluePoint and add it in the grid
                    bluePoint = Math.floor(Math.random() * cols * rows);
                    let idCellNext = document.getElementById("id" + bluePoint);
                    idCellNext.style.background = "blue";
                    sens.push(direction);
                }
            } else if (direction == "ArrowLeft") {

                for (let i = 0; i < position.length - 1; i++) {
                    sens[i] = sensPrec[i + 1];
                }
                sens[position.length - 1] = "ArrowLeft";
                if (position[position.length - 1] == bluePoint) {
                    position.push(position[position.length - 1] - 1);
                    number = position.length;
                    score.innerHTML = "Longueur snake : " + number;
                    for (let i = 0; i < number; i++) {
                        let idCell = document.getElementById("id" + position[i]);
                        idCell.style.background = "red";
                    }

                    // Regenerated bluePoint and add it in the grid
                    bluePoint = Math.floor(Math.random() * cols * rows);
                    let idCellNext = document.getElementById("id" + bluePoint);
                    idCellNext.style.background = "blue";
                    sens.push(direction);
                }
            } else if (direction == "ArrowDown") {
                for (let i = 0; i < position.length - 1; i++) {
                    sens[i] = sensPrec[i + 1];
                }
                sens[position.length - 1] = "ArrowDown";
                if (position[position.length - 1] == bluePoint) {
                    position.push(position[position.length - 1] + cols);
                    number = position.length;
                    score.innerHTML = "Longueur snake : " + number;
                    for (let i = 0; i < number; i++) {
                        let idCell = document.getElementById("id" + position[i]);
                        idCell.style.background = "red";
                    }

                    // Regenerated bluePoint and add it in the grid
                    bluePoint = Math.floor(Math.random() * cols * rows);
                    let idCellNext = document.getElementById("id" + bluePoint);
                    idCellNext.style.background = "blue";
                    sens.push(direction);
                }
            }

            gridEmpty();
            makeBluePoint();
            for (let i = 0; i < position.length; i++) {
                if (sens[i] == "ArrowRight") {
                    position[i]++;
                    let idCellApres = document.getElementById("id" + position[i]);
                    idCellApres.style.background = "red";
                } else if (sens[i] == "ArrowUp") {
                    position[i] -= cols;
                    if (position[i] < cols) {
                        let perdu = document.getElementById("perdu");
                        perdu.style.display = "block";
                        container.style.display = "none";
                        direction = "stop";
                    } else {
                        let idCellApres = document.getElementById("id" + position[i]);
                        idCellApres.style.background = "red";
                    }
                } else if (sens[i] == "ArrowLeft") {
                    position[i]--;
                    let idCellApres = document.getElementById("id" + position[i]);
                    idCellApres.style.background = "red";
                } else if (sens[i] == "ArrowDown") {
                    position[i] += cols;
                    let idCellApres = document.getElementById("id" + position[i]);
                    idCellApres.style.background = "red";
                }
            }
            sensPrec = sens.slice();
            startGame(direction);
        }, 100)
    }
}




