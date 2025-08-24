document.addEventListener('DOMContentLoaded', function() {
    // ===== VARIÁVEIS =====
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.getElementById('menu-principal');
    const registrationForm = document.getElementById('registration-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeConfirmBtn = document.querySelector('.close-confirm');
    const menuLinks = document.querySelectorAll('#menu-principal a');
    
    // ===== MENU MOBILE =====
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('show');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // ===== NAVEGAÇÃO =====
    // Fecha menu quando clicar em um link (mobile)
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 576) {
                menuPrincipal.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
            
            // Atualiza classe active
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== FORMULÁRIO DE CADASTRO =====
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação
            if (validateForm()) {
                // Captura valores
                const nome = document.getElementById('nome').value.trim();
                const email = document.getElementById('email').value.trim();
                const telefone = document.getElementById('telefone').value.trim();
                const paroquia = document.getElementById('paroquia').value.trim();

                // Envio do email
                sendEmailData(nome, email, telefone, paroquia);
                
                // Exibe modal de confirmação
                showConfirmationModal();
                
                // Limpa formulário
                registrationForm.reset();
            }
        });
    }
    
    // ===== FUNÇÕES DE VALIDAÇÃO =====
    function validateForm() {
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        let isValid = true;
        
        // Valida nome
        if (nome.value.trim() === '') {
            showError(nome, 'Nome é obrigatório');
            isValid = false;
        } else {
            removeError(nome);
        }
        
        // Valida email
        if (email.value.trim() === '') {
            showError(email, 'Email é obrigatório');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Email inválido');
            isValid = false;
        } else {
            removeError(email);
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.style.cssText = `
                color: #e74c3c;
                font-size: 0.85rem;
                margin-top: 5px;
                display: block;
            `;
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = '#e74c3c';
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.style.borderColor = '#ddd';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // ===== ENVIO DE EMAIL =====
    function sendEmailData(nome, email, telefone, paroquia) {
        const bodyLines = [
            `Nome: ${nome}`,
            `E-mail: ${email}`,
            `Telefone: ${telefone || 'Não informado'}`,
            `Paróquia: ${paroquia || 'Não informado'}`
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const to = 'clubelivrosantoagostinho@gmail.com';
        const subject = encodeURIComponent('Novo Cadastro Clube Santo Agostinho');

        // Abre cliente de email
        window.open(`mailto:${to}?subject=${subject}&body=${body}`);
    }
    
    // ===== MODAL DE CONFIRMAÇÃO =====
    function showConfirmationModal() {
        confirmationModal.classList.add('active');
        confirmationModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function closeConfirmationModal() {
        confirmationModal.classList.remove('active');
        confirmationModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    // Eventos para fechar o modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeConfirmationModal);
    }
    
    if (closeConfirmBtn) {
        closeConfirmBtn.addEventListener('click', closeConfirmationModal);
    }
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            closeConfirmationModal();
        }
    });
    
    // ===== NAVEGAÇÃO ATIVA BASEADA NO SCROLL =====
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // ===== ANIMAÇÕES AO ROLAR =====
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-content, .form-container, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializa animações
    document.querySelectorAll('.about-content, .form-container, .contact-content').forEach(element => {
        element.style.cssText += `
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        `;
    });
    
    // ===== EFEITOS INTERATIVOS =====
    const submitButton = document.querySelector('.btn-submit');
    if (submitButton) {
        submitButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        submitButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // ===== ROLAGEM SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== INICIALIZAÇÃO =====
    // Executa animações na inicialização
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Melhora performance em dispositivos móveis
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(animateOnScroll);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); // ~60fps
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // ===== TRATAMENTO DE ERROS =====
    window.addEventListener('error', function(e) {
        console.error('Erro na aplicação:', e.error);
    });
    
    // ===== LOG DE INICIALIZAÇÃO =====
    console.log('Clube Santo Agostinho - Site carregado com sucesso!');
});