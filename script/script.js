document.addEventListener("DOMContentLoaded", () => {
    // Estado da Aplicação / State
    let selectedServices = [];
    let selectedProf = "Ricardo";
    let selectedDate = "Seg, 18";
    let selectedTime = "11:00";

    // Mapeamento de Elementos DOM Gerais
    const serviceCards = document.querySelectorAll(".service-card");
    const servicesCounter = document.getElementById("services-counter");
    const profCards = document.querySelectorAll(".prof-card");
    const dateCards = document.querySelectorAll(".date-card");
    const timeSlots = document.querySelectorAll(".time-slot:not(.disabled)");
    const txtSubtotal = document.getElementById("txt-subtotal");
    const txtTotal = document.getElementById("txt-total");
    const btnSubmit = document.getElementById("btn-submit-booking");
    const modal = document.getElementById("demo-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");

    // Elementos Exclusivos Mobile e Links Desktop
    const btnHamburgerMobile = document.getElementById("btn-hamburger-mobile");
    const btnProfileMobile = document.getElementById("btn-profile-mobile");
    const mobileDropdown = document.getElementById("mobile-dropdown");
    const bottomNavItems = document.querySelectorAll(".bottom-nav-item");
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
    const desktopMenuLinks = document.querySelectorAll(".desktop-menu a[data-target]");
    const btnDesktopAccount = document.getElementById("btn-desktop-account");

    // --- INTERAÇÕES DE NAVEGAÇÃO / ROLAGEM ---
    // Monitor de cliques no menu superior Desktop
    desktopMenuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            desktopMenuLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            
            const target = link.getAttribute("data-target");
            handleNavigation(target);
        });
    });

    // Liga/Desliga o menu dropdown de celular ao clicar no hamburger
    btnHamburgerMobile.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileDropdown.classList.toggle("show");
    });

    // Ícones rápidos do topo mobile redirecionam para seções mapeadas
    btnProfileMobile.addEventListener("click", () => handleNavigation("profile"));

    // Fecha o menu móvel ao clicar em qualquer link de dentro dele e navega
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            mobileDropdown.classList.remove("show");
            handleNavigation(target);
        });
    });

    // Fecha o menu móvel se clicar em qualquer outra parte vazia da tela
    document.addEventListener("click", () => {
        mobileDropdown.classList.remove("show");
    });

    // Interações com a barra de navegação inferior (Mobile fixo)
    bottomNavItems.forEach(item => {
        item.addEventListener("click", () => {
            bottomNavItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const target = item.getAttribute("data-target");
            handleNavigation(target);
        });
    });

    // Centralizador inteligente de rolagens e ações
    function handleNavigation(target) {
        if (target === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (target === "services") {
            document.getElementById("services-section").scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (target === "date") {
            document.getElementById("date-section").scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (target === "profile") {
            document.getElementById("profile-section").scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    // Botão clássico de "Minha Conta" simulado no Desktop abre o modal explicativo
    if(btnDesktopAccount) {
        btnDesktopAccount.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
        });
    }

    // --- LÓGICA DO SESSÃO DE AGENDAMENTO (CALCULO DE VALORES) ---
    function updateTotals() {
        let subtotal = 0;
        selectedServices.forEach(serviceId => {
            const card = document.querySelector(`.service-card[data-id="${serviceId}"]`);
            if(card) {
                subtotal += parseFloat(card.getAttribute("data-price"));
            }
        });

        servicesCounter.textContent = `${selectedServices.length} de 4 selecionados`;
        txtSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        txtTotal.textContent = `${subtotal.toFixed(2).replace('.', ',')}`;
    }

    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            if(selectedServices.includes(id)) {
                selectedServices = selectedServices.filter(item => item !== id);
                card.classList.remove("selected");
            } else {
                selectedServices.push(id);
                card.classList.add("selected");
            }
            updateTotals();
        });
    });

    profCards.forEach(card => {
        card.addEventListener("click", () => {
            profCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedProf = card.getAttribute("data-name");
        });
    });

    dateCards.forEach(card => {
        card.addEventListener("click", () => {
            dateCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedDate = card.getAttribute("data-date");
        });
    });

    timeSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            timeSlots.forEach(s => s.classList.remove("selected"));
            slot.classList.add("selected");
            selectedTime = slot.getAttribute("data-time");
        });
    });

    btnSubmit.addEventListener("click", () => {
        if(selectedServices.length === 0) {
            alert("Por favor, selecione ao menos um serviço para simular o agendamento!");
            return;
        }
        modal.classList.add("active");
    });

    btnCloseModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if(e.target === modal) modal.classList.remove("active");
    });

    // Seleção padrão ao inicializar a página
    const defaultService = document.querySelector('.service-card[data-id="combo"]');
    if(defaultService) {
        defaultService.classList.add("selected");
        selectedServices.push("combo");
        updateTotals();
    }
});