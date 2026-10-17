const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Função para atualizar o ícone do botão
function atualizarIcone() {
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerText = '☀️'; // Mostra sol para indicar que pode ir pro claro
    } else {
        toggleBtn.innerText = '🌙'; // Mostra lua para indicar que pode ir pro escuro
    }
}

// 1. Verifica memória ao carregar
// Se o usuário já escolheu "claro" antes, removemos a classe dark-mode
if (localStorage.getItem('tema') === 'claro') {
    body.classList.remove('dark-mode');
}
// Atualiza o ícone logo que a página abre
atualizarIcone();

// 2. Evento de Clique
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Atualiza o ícone
    atualizarIcone();

    // 3. Salva a preferência
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});

// --- ANIMAÇÃO DE ENTRADA (Reveal on Scroll) ---
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

