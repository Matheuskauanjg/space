// Função para gerar estrelas e posicioná-las aleatoriamente
function createStars(numStars) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 300 + "px"; // Aleatório na altura da grid
        star.style.left = Math.random() * 300 + "px"; // Aleatório na largura da grid
        grid.appendChild(star);
    }
}

// Chamar a função para criar 50 estrelas
createStars(50);
