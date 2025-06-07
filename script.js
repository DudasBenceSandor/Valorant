// Hamburger menü
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Modal ablakok
const modals = document.querySelectorAll('.modal');
const openModalButtons = document.querySelectorAll('.card');
const closeModalButtons = document.querySelectorAll('.close');

// Modal megnyitása
openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Megakadályozza az alapértelmezett viselkedést
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Modal bezárása a bezáró gombra kattintva
closeModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Megakadályozza az alapértelmezett viselkedést
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Modal bezárása a háttérre kattintva
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
