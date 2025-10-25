// ================================================
// MAIN JAVASCRIPT - CLUBE SANTO AGOSTINHO
// Funcionalidades gerais do site
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU =====
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Fechar menu ao clicar nos links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuToggle?.classList.remove('active');
                nav?.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuToggle?.classList.remove('active');
            nav?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links que são apenas "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== SCROLL REVEAL ANIMATION =====
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
    
    // Executar ao carregar e ao rolar
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    // ===== REGISTRATION FORM =====
    const registrationForm = document.getElementById('registration-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome')?.value;
            const email = document.getElementById('email')?.value;
            const telefone = document.getElementById('telefone')?.value;
            const paroquia = document.getElementById('paroquia')?.value;
            
            // Validação básica
            if (!nome || !email) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Preparar email
            const subject = 'Novo Cadastro - Clube Santo Agostinho';
            const body = `
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone || 'Não informado'}
Paróquia: ${paroquia || 'Não informado'}
            `.trim();
            
            // Abrir cliente de email
            window.open(`mailto:clubelivrosantoagostinho@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
            
            // Mostrar modal de confirmação
            if (confirmationModal) {
                confirmationModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            // Limpar formulário
            registrationForm.reset();
        });
    }
    
    // Fechar modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            confirmationModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Fechar modal ao clicar fora
    if (confirmationModal) {
        confirmationModal.addEventListener('click', function(e) {
            if (e.target === confirmationModal) {
                confirmationModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===== LOAD FEATURED FORMATIONS ON HOME PAGE =====
    const featuredFormationsContainer = document.getElementById('featured-formations');
    
    if (featuredFormationsContainer && typeof getFeaturedFormations !== 'undefined') {
        loadFeaturedFormations();
    }
    
    // ===== ACTIVE NAV LINK =====
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.includes(linkPath.split('#')[0])) {
            link.classList.add('active');
        }
    });
    
});

// ===== FUNÇÕES AUXILIARES =====

// Carregar formações em destaque
function loadFeaturedFormations() {
    const container = document.getElementById('featured-formations');
    if (!container) return;
    
    // Carrega o script de dados se ainda não estiver carregado
    if (typeof getFeaturedFormations === 'undefined') {
        const script = document.createElement('script');
        script.src = 'assets/js/formations-data.js';
        script.onload = () => loadFeaturedFormations();
        document.head.appendChild(script);
        return;
    }
    
    const formations = getFeaturedFormations().slice(0, 3);
    
    formations.forEach((formation, index) => {
        const card = createFormationCard(formation, index);
        container.appendChild(card);
    });
}

// Criar card de formação
function createFormationCard(formation, index = 0) {
    const card = document.createElement('div');
    card.className = `formation-card reveal delay-${(index + 1) * 100}`;
    
    card.innerHTML = `
        <div class="formation-card-image-container">
            <img src="${formation.thumbnail}" alt="${formation.title}" class="formation-card-image">
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
    
    // Adicionar evento de clique no card
    card.addEventListener('click', function(e) {
        // Se não clicou no link "Assistir", redireciona
        if (!e.target.closest('.formation-card-cta')) {
            window.location.href = `formacao.html?id=${formation.id}`;
        }
    });
    
    return card;
}

// Formatar duração
function formatDuration(duration) {
    // Já está no formato correto (MM:SS ou HH:MM:SS)
    return duration;
}

// Formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Formatar número de visualizações
function formatViews(views) {
    if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
}

// ===== PERFORMANCE =====
// Lazy loading de imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== UTILS =====
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Console log de inicialização
console.log('%c🕊️ Clube Santo Agostinho', 'color: #C9A55F; font-size: 20px; font-weight: bold;');
console.log('%cSite carregado com sucesso!', 'color: #8B6F47; font-size: 14px;');

