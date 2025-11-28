// --- LÓGICA DO DARK MODE ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function atualizarIcone() {
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerText = '☀️';
    } else {
        toggleBtn.innerText = '🌙';
    }
}

// Verifica memória ao carregar
if (localStorage.getItem('tema') === 'claro') {
    body.classList.remove('dark-mode');
}
atualizarIcone();

// Evento de Clique no tema
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    atualizarIcone();

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});


// --- LÓGICA DO SLIDER DE CURSOS ---
const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Largura do card + gap (ajuste se mudar no CSS)
const cardWidth = 325; 

// Clique nos botões (avançar e voltar)
nextBtn.addEventListener('click', () => {
    track.scrollLeft += cardWidth;
});

prevBtn.addEventListener('click', () => {
    track.scrollLeft -= cardWidth;
});

// Auto Scroll (Rolar sozinho)
let autoScroll;

function startAutoScroll() {
    autoScroll = setInterval(() => {
        // Se chegar no final, volta para o início suavemente
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollLeft += cardWidth;
        }
    }, 4000); // 4 segundos
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Inicia a rolagem automática
startAutoScroll();

// Pausa quando o mouse passa em cima
track.addEventListener('mouseenter', stopAutoScroll);
track.addEventListener('mouseleave', startAutoScroll);