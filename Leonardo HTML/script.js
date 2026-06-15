document.addEventListener("DOMContentLoaded", () => {
    
    // 1. POP-UP DA SEÇÃO CURIOSIDADES (BOTÃO INTERATIVO)
    const btnInterativo = document.getElementById("btn-interativo");
    if (btnInterativo) {
        btnInterativo.addEventListener("click", () => {
            alert("Aqui se encontra um pequeno resumo do futuro maior GameDev do brasil");
        });
    }

    // 2. SISTEMA DO EASTER EGG (POP-UP DO NERD)
    const easterEggBtn = document.getElementById("easter-egg-btn");
    const modalOverlay = document.getElementById("easter-egg-modal");
    const closeModalBtn = document.getElementById("close-modal");

    if (easterEggBtn && modalOverlay && closeModalBtn) {
        // Abre o pop-up ao clicar no botão misterioso do rodapé
        easterEggBtn.addEventListener("click", () => {
            modalOverlay.style.display = "flex";
        });

        // Fecha o pop-up ao clicar no botão "X"
        closeModalBtn.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });

        // Fecha se o usuário clicar em qualquer ponto fora da imagem
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = "none";
            }
        });
    }

    // 3. ROLAGEM SUAVE (SCROLL SUAVE) DA NAVBAR
    const menuLinks = document.querySelectorAll(".nav-links a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});