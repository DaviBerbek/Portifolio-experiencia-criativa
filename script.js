document.addEventListener("DOMContentLoaded", () => {

    // =====================================================================
    // 1. BOTÃO INTERATIVO DA SEÇÃO CURIOSIDADES
    //    MOLDE: Substitua o texto dentro de alert("...") pela sua mensagem.
    // =====================================================================
    var btnInterativo = document.getElementById("btn-interativo");
    if (btnInterativo) {
        btnInterativo.addEventListener("click", function() {
            alert("[Escreva aqui a mensagem que aparecerá ao clicar no botão]");
        });
    }

    // =====================================================================
    // 2. EASTER EGG — POP-UP DO RODAPÉ
    //    MOLDE: A imagem do pop-up é definida no index.html (tag <img src="...">).
    //    Não é necessário alterar nada aqui — só mude a imagem no HTML.
    // =====================================================================
    var easterEggBtn  = document.getElementById("easter-egg-btn");
    var modalOverlay  = document.getElementById("easter-egg-modal");
    var closeModalBtn = document.getElementById("close-modal");

    if (easterEggBtn && modalOverlay && closeModalBtn) {
        easterEggBtn.addEventListener("click", function() {
            modalOverlay.style.display = "flex";
        });
        closeModalBtn.addEventListener("click", function() {
            modalOverlay.style.display = "none";
        });
        modalOverlay.addEventListener("click", function(e) {
            if (e.target == modalOverlay) {
                modalOverlay.style.display = "none";
            }
        });
    }

    // =====================================================================
    // 3. ROLAGEM SUAVE DA NAVBAR
    //    MOLDE: Nada para alterar aqui — funciona automaticamente com os
    //    href="#ancora" definidos no index.html.
    // =====================================================================
    var menuLinks = document.querySelectorAll(".nav-links a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            var targetId = link.getAttribute("href");
            if (targetId.indexOf("#") == 0) {
                e.preventDefault();
                var targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    // =====================================================================
    // 4. UPLOAD E PREVIEW DO AVATAR (FOTO ACIMA DO NOME)
    //    MOLDE: Nada para alterar aqui — basta clicar no círculo na página.
    // =====================================================================
    var avatarUpload      = document.getElementById("avatar-upload");
    var avatarPreview     = document.getElementById("avatar-preview");
    var avatarPlaceholder = document.getElementById("avatar-placeholder");

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

});