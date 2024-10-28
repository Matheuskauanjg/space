// Função para criar estrelas na tela e adicionar piscamento aleatório
function createStars(numStars) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Posicionamento aleatório
        star.style.top = Math.random() * 300 + "px";
        star.style.left = Math.random() * 300 + "px";

        // Adiciona a estrela na grade
        grid.appendChild(star);
    }
}

// Chama a função para criar 100 estrelas
createStars(100);
