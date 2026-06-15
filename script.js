document.addEventListener("DOMContentLoaded", () => {
    
    // 1. POP-UP DA SEÇÃO CURIOSIDADES (BOTÃO INTERATIVO)
    const btnInterativo = document.getElementById("btn-interativo");
    if (btnInterativo) {
        btnInterativo.addEventListener("click", () => {
            alert("Quando eu era um bebê brinquei no chão de um hotel com o Selton Mello");
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
    const avatarUpload = document.getElementById("avatar-upload");
    const avatarPreview = document.getElementById("avatar-preview");
    const avatarPlaceholder = document.getElementById("avatar-placeholder");

    if (avatarUpload) {
        avatarUpload.addEventListener("change", function() {
            var file = this.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    avatarPreview.src = e.target.result;
                    avatarPreview.style.display = "block";
                    avatarPlaceholder.style.display = "none";
                };
                reader.readAsDataURL(file);
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