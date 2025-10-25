// ================================================
// FORMATIONS PAGE JAVASCRIPT
// Lógica específica da página de formações
// ================================================

// Carregar dados das formações
const script = document.createElement('script');
script.src = 'assets/js/formations-data.js';
document.head.appendChild(script);

script.onload = function() {
    initFormationsPage();
};

// Inicializar página de formações
function initFormationsPage() {
    loadCategoryFormations();
    setupFilters();
    setupSearch();
}

// ===== CARREGAR FORMAÇÕES POR CATEGORIA =====
function loadCategoryFormations() {
    const categories = ['teologia', 'espiritualidade', 'filosofia', 'historia', 'biblia'];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category}-formations`);
        if (!container) return;
        
        const formations = getFormationsByCategory(category).slice(0, 4);
        
        if (formations.length === 0) {
            container.innerHTML = '<p class="text-center text-light">Nenhuma formação disponível nesta categoria.</p>';
            return;
        }
        
        formations.forEach((formation, index) => {
            const card = createFormationCard(formation, index);
            container.appendChild(card);
        });
    });
}

// ===== CRIAR CARD DE FORMAÇÃO =====
function createFormationCard(formation, index = 0) {
    const card = document.createElement('div');
    card.className = `formation-card reveal delay-${(index + 1) * 100}`;
    card.setAttribute('data-category', formation.category);
    
    card.innerHTML = `
        <div class="formation-card-image-container">
            <img src="${formation.thumbnail}" 
                 alt="${formation.title}" 
                 class="formation-card-image"
                 loading="lazy">
            <div class="formation-card-overlay">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        </div>
        <div class="formation-card-content">
            <div class="formation-card-header">
                <h3 class="formation-card-title">${formation.title}</h3>
                <span class="formation-card-duration">
                    <i class="fas fa-clock"></i>
                    ${formation.duration}
                </span>
            </div>
            <p class="formation-card-description">${formation.description}</p>
            <div class="formation-card-footer">
                <span class="formation-card-category">
                    <i class="fas fa-tag"></i>
                    ${formation.categoryName}
                </span>
                <a href="formacao.html?id=${formation.id}" class="formation-card-cta">
                    Assistir
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    // Adicionar evento de clique
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.formation-card-cta')) {
            window.location.href = `formacao.html?id=${formation.id}`;
        }
    });
    
    return card;
}

// ===== SISTEMA DE FILTROS =====
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Obter categoria selecionada
            const category = this.getAttribute('data-filter');
            
            // Filtrar formações
            filterFormations(category);
        });
    });
}

function filterFormations(category) {
    const sections = document.querySelectorAll('.category-section');
    
    if (category === 'all') {
        // Mostrar todas as seções
        sections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        // Mostrar apenas a seção correspondente
        sections.forEach(section => {
            const sectionCategory = section.querySelector(`[id$="-formations"]`).id.replace('-formations', '');
            
            if (sectionCategory === category) {
                section.style.display = 'block';
                // Scroll suave até a seção
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                section.style.display = 'none';
            }
        });
    }
}

// ===== BUSCA DE FORMAÇÕES =====
function setupSearch() {
    const searchInput = document.getElementById('search-formations');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase().trim();
            performSearch(searchTerm);
        }, 300);
    });
}

function performSearch(searchTerm) {
    const allCards = document.querySelectorAll('.formation-card');
    const sections = document.querySelectorAll('.category-section');
    
    if (!searchTerm) {
        // Mostrar todos os cards e seções
        allCards.forEach(card => {
            card.style.display = '';
        });
        sections.forEach(section => {
            section.style.display = 'block';
        });
        return;
    }
    
    // Filtrar formações por termo de busca
    const matchingFormations = formationsData.filter(formation => {
        return formation.title.toLowerCase().includes(searchTerm) ||
               formation.description.toLowerCase().includes(searchTerm) ||
               formation.categoryName.toLowerCase().includes(searchTerm);
    });
    
    // Esconder todas as seções inicialmente
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar apenas cards que correspondem à busca
    allCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Organizar por categoria
    const categoriesWithResults = {};
    
    matchingFormations.forEach(formation => {
        if (!categoriesWithResults[formation.category]) {
            categoriesWithResults[formation.category] = [];
        }
        categoriesWithResults[formation.category].push(formation);
    });
    
    // Mostrar seções com resultados
    Object.keys(categoriesWithResults).forEach(category => {
        const section = document.querySelector(`#${category}-formations`).closest('.category-section');
        if (section) {
            section.style.display = 'block';
        }
        
        // Limpar container e adicionar resultados
        const container = document.getElementById(`${category}-formations`);
        if (container) {
            container.innerHTML = '';
            categoriesWithResults[category].forEach((formation, index) => {
                const card = createFormationCard(formation, index);
                container.appendChild(card);
            });
        }
    });
    
    // Mostrar mensagem se não houver resultados
    if (matchingFormations.length === 0) {
        showNoResults(searchTerm);
    }
}

function showNoResults(searchTerm) {
    const container = document.querySelector('.formations-grid');
    if (!container) return;
    
    const allSections = document.querySelectorAll('.category-section');
    allSections.forEach(section => section.style.display = 'none');
    
    // Criar mensagem de "sem resultados"
    const firstSection = allSections[0];
    if (firstSection) {
        firstSection.style.display = 'block';
        const grid = firstSection.querySelector('.formations-grid');
        if (grid) {
            grid.innerHTML = `
                <div class="formations-empty" style="grid-column: 1 / -1;">
                    <div class="formations-empty-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3 class="formations-empty-title">
                        Nenhuma formação encontrada
                    </h3>
                    <p class="formations-empty-text">
                        Não encontramos resultados para "${searchTerm}". 
                        Tente usar outros termos de busca.
                    </p>
                </div>
            `;
        }
    }
}

// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar imediatamente
});

// ===== VIEW ALL BUTTONS =====
document.querySelectorAll('.category-view-all').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Scroll para a seção correspondente
        const section = this.closest('.category-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Poderia expandir para mostrar mais cards ou abrir uma página dedicada
        console.log('Ver todas as formações desta categoria');
    });
});

// Log de inicialização
console.log('%c📚 Página de Formações Carregada', 'color: #C9A55F; font-size: 16px; font-weight: bold;');

