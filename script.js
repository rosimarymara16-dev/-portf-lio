// Array de objetos contendo os projetos
const projetos = [
    {
        id: 1,
        titulo: "Portfólio Pessoal",
        descricao: "Um site portfólio moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript, apresentando projetos e habilidades de forma dinâmica.",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        emoji: "🌐"
    },
    {
        id: 2,
        titulo: "Sistema de To-Do List",
        descricao: "Aplicação web para gerenciamento de tarefas com funcionalidades de adicionar, editar, remover e marcar tarefas como concluídas.",
        tecnologias: ["JavaScript", "LocalStorage", "CSS"],
        emoji: "✅"
    },
    {
        id: 3,
        titulo: "Landing Page Responsiva",
        descricao: "Landing page moderna com design responsivo e animações suaves, otimizada para conversão e experiência do usuário.",
        tecnologias: ["HTML5", "CSS3", "Flexbox"],
        emoji: "🚀"
    },
    {
        id: 4,
        titulo: "Calculadora Web",
        descricao: "Calculadora funcional desenvolvida em JavaScript com interface intuitiva e suporte a operações matemáticas básicas.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
        emoji: "🧮"
    },
    {
        id: 5,
        titulo: "Galeria de Imagens",
        descricao: "Galeria interativa de imagens com filtros e modal de visualização, utilizando CSS Grid para layout responsivo.",
        tecnologias: ["JavaScript", "CSS Grid", "HTML"],
        emoji: "🖼️"
    },
    {
        id: 6,
        titulo: "Clone de Interface",
        descricao: "Recriação pixel-perfect de interface popular, demonstrando habilidades em CSS e atenção aos detalhes.",
        tecnologias: ["HTML5", "CSS3", "Responsive"],
        emoji: "🎨"
    }
];

// Função para renderizar os projetos dinamicamente no HTML
function renderizarProjetos() {
    // Seleciona o container onde os projetos serão inseridos
    const container = document.getElementById('projetos-container');
    
    // Limpa o container antes de inserir os projetos
    container.innerHTML = '';
    
    // Itera sobre cada projeto e cria os elementos HTML
    projetos.forEach(projeto => {
        // Cria o card do projeto
        const projetoCard = document.createElement('div');
        projetoCard.className = 'projeto-card';
        
        // Cria a estrutura HTML do card
        projetoCard.innerHTML = `
            <div class="projeto-imagem">
                <span>${projeto.emoji}</span>
            </div>
            <div class="projeto-conteudo">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-tecnologias">
                    ${projeto.tecnologias.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Adiciona o card ao container
        container.appendChild(projetoCard);
    });
}

// Função para toggle do menu mobile
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Função para fechar o menu ao clicar em um link
function fecharMenuAoClicar() {
    const menuLinks = document.querySelectorAll('.menu a');
    const menu = document.querySelector('.menu');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
}

// Função para scroll suave ao clicar em links do menu
function scrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignora links vazios
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderiza os projetos quando o DOM estiver carregado
    renderizarProjetos();
    
    // Adiciona evento ao botão do menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Fecha o menu ao clicar em links
    fecharMenuAoClicar();
    
    // Adiciona scroll suave
    scrollSuave();
    
    // Log para confirmar que os projetos foram renderizados
    console.log(`${projetos.length} projetos foram renderizados com sucesso!`);
});

// Fecha o menu mobile ao redimensionar a janela
window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});
