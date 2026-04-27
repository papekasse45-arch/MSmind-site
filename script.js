// Animation simple au scroll
const cards = document.querySelectorAll(".card");

// ANIMATION SCROLL
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));


// 💰 SYSTEME DE COMMANDE
function commander(service){
    let numero = "221766337226"; // TON NUMERO

    let message = "Bonjour, je veux commander : " + service;

    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(message));
}