// ================================================
// FORMATION DETAIL PAGE JAVASCRIPT
// Lógica da página individual de formação
// ================================================

// Carregar dados das formações
const script = document.createElement('script');
script.src = 'assets/js/formations-data.js';
document.head.appendChild(script);

script.onload = function() {
    initFormationDetailPage();
};

// Variável global para a formação atual
let currentFormation = null;

// ===== INICIALIZAR PÁGINA =====
function initFormationDetailPage() {
    // Obter ID da formação da URL
    const urlParams = new URLSearchParams(window.location.search);
    const formationId = urlParams.get('id');
    
    if (!formationId) {
        showError('Formação não encontrada');
        return;
    }
    
    // Buscar dados da formação
    currentFormation = getFormationById(formationId);
    
    if (!currentFormation) {
        showError('Formação não encontrada');
        return;
    }
    
    // Carregar conteúdo
    loadFormationData();
    loadVideoPlayer();
    setupTabs();
    setupDownloadPDF();
}

// ===== CARREGAR DADOS DA FORMAÇÃO =====
function loadFormationData() {
    // Título e breadcrumb
    document.getElementById('formation-title').textContent = currentFormation.title;
    document.getElementById('formation-breadcrumb-title').textContent = currentFormation.title;
    document.title = `${currentFormation.title} - Clube Santo Agostinho`;
    
    // Metadados
    document.getElementById('formation-category').textContent = currentFormation.categoryName;
    document.getElementById('formation-duration').textContent = currentFormation.duration;
    document.getElementById('formation-date').textContent = formatDate(currentFormation.date);
    document.getElementById('formation-views').textContent = `${currentFormation.views} visualizações`;
    
    // Resumo
    const summaryContent = currentFormation.summary || '<p>Conteúdo em breve...</p>';
    document.getElementById('formation-summary-content').innerHTML = summaryContent;
    
    // Sobre
    document.getElementById('formation-about').textContent = currentFormation.description;
    document.getElementById('formation-author').textContent = currentFormation.author || 'Equipe Santo Agostinho';
}

// ===== CARREGAR PLAYER DE VÍDEO =====
function loadVideoPlayer() {
    const playerContainer = document.getElementById('video-player');
    
    if (!playerContainer) return;
    
    // Detectar tipo de vídeo (YouTube, Vimeo, HTML5)
    const videoUrl = currentFormation.videoUrl;
    
    // Se for o ID 1 (Querigma) e ainda não tiver vídeo real, mostrar placeholder
    if (currentFormation.id === 1 && videoUrl.includes('dQw4w9WgXcQ')) {
        playerContainer.innerHTML = `
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #5C3317 0%, #8B6F47 50%, #C9A55F 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center; padding: 2rem;">
                <i class="fas fa-video" style="font-size: 4rem; margin-bottom: 2rem; opacity: 0.8;"></i>
                <h3 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem; color: white;">Vídeo em Breve</h3>
                <p style="font-size: 1.125rem; max-width: 500px; opacity: 0.9; line-height: 1.6;">
                    Estamos preparando o vídeo desta formação. Em breve você poderá assistir ao conteúdo completo aqui mesmo.
                </p>
                <div style="margin-top: 2rem; padding: 1rem 2rem; background: rgba(255,255,255,0.1); border-radius: 0.5rem; backdrop-filter: blur(10px);">
                    <p style="font-size: 0.875rem; margin: 0; opacity: 0.8;">
                        <i class="fas fa-clock"></i> Por enquanto, você pode ler o material completo abaixo
                    </p>
                </div>
            </div>
        `;
        return;
    }
    
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        // YouTube player
        playerContainer.innerHTML = `
            <iframe 
                src="${videoUrl}?autoplay=0&rel=0&modestbranding=1"
                title="${currentFormation.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } else if (videoUrl.includes('vimeo.com')) {
        // Vimeo player
        const vimeoId = videoUrl.split('/').pop();
        playerContainer.innerHTML = `
            <iframe 
                src="https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0"
                title="${currentFormation.title}"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } else {
        // HTML5 video
        playerContainer.innerHTML = `
            <video controls style="width: 100%; height: 100%;">
                <source src="${videoUrl}" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
        `;
    }
    
}

// ===== SISTEMA DE TABS =====
function setupTabs() {
    const tabs = document.querySelectorAll('.formation-tab');
    const tabContents = document.querySelectorAll('.formation-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            this.classList.add('active');
            
            // Mostrar conteúdo correspondente
            const tabName = this.getAttribute('data-tab');
            const targetContent = document.getElementById(`tab-${tabName}`);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===== CONFIGURAR DOWNLOAD DO PDF =====
function setupDownloadPDF() {
    const downloadBtn = document.getElementById('download-pdf-btn');
    
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', () => {
        // Criar HTML completo para o PDF
        const fullHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentFormation.title}</title>
    <style>
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            color: #2C2416;
            background: #FDFBF7;
        }
        h1, h2, h3, h4 {
            font-family: 'Garamond', 'Georgia', serif;
            color: #5C3317;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        h1 { font-size: 2.5rem; text-align: center; border-bottom: 3px solid #C9A55F; padding-bottom: 1rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.25rem; }
        p { margin: 1rem 0; text-align: justify; }
        em { font-style: italic; color: #8B4513; }
        strong { font-weight: bold; color: #5C3317; }
        blockquote {
            background: #FFF8DC;
            border-left: 4px solid #D2691E;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 0.5rem;
        }
        hr {
            margin: 2rem 0;
            border: none;
            border-top: 2px solid #C9A55F;
        }
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            border-radius: 0.5rem;
        }
        .footer {
            margin-top: 3rem;
            text-align: center;
            font-size: 0.875rem;
            color: #8B4513;
            border-top: 2px solid #C9A55F;
            padding-top: 1rem;
        }
        @media print {
            body { background: white; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="color: white; border: none; margin: 0;">${currentFormation.title}</h1>
        <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">${currentFormation.author || 'Clube Santo Agostinho'}</p>
    </div>
    
    ${currentFormation.summary}
    
    <div class="footer">
        <p>© ${new Date().getFullYear()} Clube Santo Agostinho - Formação e Espiritualidade</p>
        <p><em>"Ama e faz o que quiseres." - Santo Agostinho</em></p>
    </div>
</body>
</html>
        `;
        
        // Criar blob e fazer download
        const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Formacao-01-Querigma-Cartas-Paulo.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Feedback visual
        const originalHTML = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Download Concluído!';
        downloadBtn.style.background = '#28a745';
        downloadBtn.disabled = true;
        
        setTimeout(() => {
            downloadBtn.innerHTML = originalHTML;
            downloadBtn.style.background = '';
            downloadBtn.disabled = false;
        }, 3000);
    });
}

// ===== FUNÇÕES AUXILIARES =====
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

function showError(message) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <section class="section">
                <div class="container text-center">
                    <div class="formations-empty">
                        <div class="formations-empty-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h2 class="formations-empty-title">${message}</h2>
                        <p class="formations-empty-text">
                            A formação que você procura não foi encontrada ou não está mais disponível.
                        </p>
                        <a href="formacoes.html" class="btn btn-primary btn-lg" style="margin-top: 2rem;">
                            <i class="fas fa-arrow-left"></i>
                            Voltar para Formações
                        </a>
                    </div>
                </div>
            </section>
        `;
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
    revealOnScroll();
});

// Log de inicialização
console.log('%c🎬 Página de Formação Individual Carregada', 'color: #C9A55F; font-size: 16px; font-weight: bold;');

