document.addEventListener('DOMContentLoaded', function() {
    // Variáveis
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.getElementById('menu-principal');
    const registrationForm = document.getElementById('registration-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeConfirmBtn = document.querySelector('.close-confirm');
    const menuLinks = document.querySelectorAll('#menu-principal a');
    
    // Toggle menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuPrincipal.classList.toggle('show');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
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

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // evita recarregar a página
            
            // 3. Captura valores
            const nome     = document.getElementById('nome').value.trim();
            const email    = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const paroquia = document.getElementById('paroquia').value.trim();

            console.log('nome:', nome);
            console.log('email:', email);
            console.log('telefone:', telefone);
            console.log('paroquia:', paroquia);

            // 4. Monta o corpo do e-mail
            const bodyLines = [
                `Nome: ${nome}`,
                `E-mail: ${email}`,
                `Telefone: ${telefone}`,
                `Paróquia: ${paroquia}`
            ];
            const body = encodeURIComponent(bodyLines.join('\n'));

            // 5. Define destinatário e assunto
            const to      = 'clubelivrosantoagostinho@gmail.com';
            const subject = encodeURIComponent('Novo Cadastro Clube Santo Agostinho');

            // 6. Dispara o mailto usando window.open em vez de window.location.href
            // Isso mantém a página atual aberta e preserva os valores do formulário
            window.open(`mailto:${to}?subject=${subject}&body=${body}`);
            
            // Opcionalmente, você pode mostrar uma mensagem de confirmação:
            // alert('Seu cliente de e-mail foi aberto. Por favor, envie o e-mail para completar seu cadastro.');
        });
    } else {
        console.error('Formulário #registration-form não encontrado.');
    }
    
    // Validação do formulário e exibição do modal
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                showConfirmationModal();
                registrationForm.reset();
            }
        });
    }
    
    // Validação do formulário
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
    
    // Exibe mensagem de erro
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        // Se já existir uma mensagem de erro, atualiza o texto
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.85rem';
            errorElement.style.marginTop = '5px';
            errorElement.style.display = 'block';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = '#e74c3c';
    }
    
    // Remove mensagem de erro
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.style.borderColor = '#ddd';
    }
    
    // Valida formato de email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Exibe modal de confirmação
    function showConfirmationModal() {
        confirmationModal.classList.add('active');
        confirmationModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Impede rolagem
    }
    
    // Fecha modal de confirmação
    function closeConfirmationModal() {
        confirmationModal.classList.remove('active');
        confirmationModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Permite rolagem novamente
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
    
    // Adiciona classe active no menu baseado na seção visível
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
    
    // Animações ao rolar a página
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
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executa animações ao carregar e ao rolar
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Adiciona efeito de hover no botão de enviar
    const submitButton = document.querySelector('.btn-submit');
    if (submitButton) {
        submitButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        submitButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Detecta quando é clicado em links internos para rolagem suave
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

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // evita recarregar a página
            
            // 3. Captura valores
            const nome     = document.getElementById('nome').value.trim();
            const email    = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const paroquia = document.getElementById('paroquia').value.trim();

            console.log('nome:', nome);
            console.log('email:', email);
            console.log('telefone:', telefone);
            console.log('paroquia:', paroquia);

            // 4. Monta o corpo do e-mail
            const bodyLines = [
                `Nome: ${nome}`,
                `E-mail: ${email}`,
                `Telefone: ${telefone}`,
                `Paróquia: ${paroquia}`
            ];
            const body = encodeURIComponent(bodyLines.join('\n'));

            // 5. Define destinatário e assunto
            const to      = 'clubelivrosantoagostinho@gmail.com';
            const subject = encodeURIComponent('Novo Cadastro Clube Santo Agostinho');

            // 6. Dispara o mailto usando window.open em vez de window.location.href
            // Isso mantém a página atual aberta e preserva os valores do formulário
            window.open(`mailto:${to}?subject=${subject}&body=${body}`);
            
            // Opcionalmente, você pode mostrar uma mensagem de confirmação:
            // alert('Seu cliente de e-mail foi aberto. Por favor, envie o e-mail para completar seu cadastro.');
        });
    } else {
        console.error('Formulário #registration-form não encontrado.');
    }
});