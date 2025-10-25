# 🕊️ Clube Santo Agostinho - Plataforma de Formação Católica

![Clube Santo Agostinho](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNN3r2gGhN90LPBFmiaF_SSpb2-fQwmZUSnQ&s)

## 📖 Sobre o Projeto

O **Clube Santo Agostinho** é uma plataforma moderna de formação católica que oferece conteúdos em vídeo baseados nos grandes clássicos da literatura espiritual. Nosso objetivo é tornar a sabedoria dos santos e doutores da Igreja acessível a todos através de uma experiência de usuário intuitiva e agradável.

### ✨ Características Principais

- 🎬 **Netflix de Formações**: Sistema de grade de cards interativos estilo streaming
- 📺 **Player de Vídeo Integrado**: Suporte para YouTube, Vimeo e HTML5
- 🎨 **Design Moderno**: Interface limpa e elegante com cores inspiradas em espiritualidade
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Animações Suaves**: Transições e efeitos visuais elegantes
- 🔍 **Sistema de Busca**: Encontre formações por título, descrição ou categoria
- 📂 **Filtros por Categoria**: Teologia, Espiritualidade, Filosofia, História e Bíblia
- 💾 **Material de Apoio**: Download de resumos, PDFs e guias de estudo
- 💬 **Área de Comentários**: Compartilhe reflexões com a comunidade
- 📊 **Progresso de Visualização**: Acompanhe seu progresso nas formações

## 🎨 Paleta de Cores

A identidade visual do projeto foi cuidadosamente escolhida para transmitir espiritualidade e sabedoria:

- **Marrom Escuro** (#5C3317): Remete a livros antigos e tradição
- **Marrom Médio** (#8B6F47): Tom principal, transmite estabilidade
- **Dourado** (#C9A55F / #D4AF37): Representa o sagrado e a luz divina
- **Creme** (#FAF8F3): Fundo suave que remete a páginas de livros
- **Terracota** (#7A5C4D): Tom secundário para variedade

## 🗂️ Estrutura do Projeto

```
Clube Santo Agostinho/
├── index.html                      # Página principal
├── formacoes.html                  # Biblioteca de formações (Netflix)
├── formacao.html                   # Página individual de formação
├── readme.md                       # Este arquivo
│
├── assets/
│   ├── css/
│   │   ├── variables.css          # Variáveis CSS (cores, fontes, etc)
│   │   ├── reset.css              # Reset e estilos base
│   │   ├── components.css         # Componentes reutilizáveis
│   │   ├── layout.css             # Header, footer, navegação
│   │   ├── formations-netflix.css # Estilos da Netflix de formações
│   │   ├── formation-details.css  # Estilos da página de detalhes
│   │   ├── animations.css         # Animações e transições
│   │   └── main.css               # CSS principal (importa todos)
│   │
│   ├── js/
│   │   ├── formations-data.js     # Dados mockados das formações
│   │   ├── main.js                # JavaScript principal
│   │   ├── formations.js          # Lógica da página de formações
│   │   └── formation-detail.js    # Lógica da página de detalhes
│   │
│   └── images/                    # Imagens do projeto (futuro)
│
└── backup/                        # Arquivos antigos (backup)
    ├── style.css
    └── script.js
```

## 🚀 Como Usar

### 1. Pré-requisitos

Nenhum! O projeto é puramente HTML, CSS e JavaScript vanilla. Basta um navegador moderno.

### 2. Instalação

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! O site está funcionando

### 3. Para Desenvolvimento Local

Se quiser usar um servidor local (recomendado):

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server -p 8000

# Ou use a extensão Live Server do VS Code
```

Acesse: `http://localhost:8000`

## 📄 Páginas

### 🏠 Página Principal (index.html)

- Hero section com chamada para ação
- Prévia de formações em destaque
- Seção "Sobre o Clube"
- Benefícios de participar
- Formulário de cadastro
- Área de contato

### 📚 Biblioteca de Formações (formacoes.html)

- Hero com barra de busca
- Formação em destaque
- Filtros por categoria
- Grade de cards de formações
- Organizadas por categoria (Teologia, Espiritualidade, etc)
- CTA para cadastro

### 🎬 Página Individual (formacao.html)

- Breadcrumb de navegação
- Player de vídeo (YouTube/Vimeo/HTML5)
- Tabs: Resumo, Sobre, Recursos
- Sidebar com ações e progresso
- Material de apoio para download
- Formações relacionadas
- Área de comentários

## 🎯 Funcionalidades JavaScript

### main.js
- Menu mobile responsivo
- Efeito de scroll no header
- Smooth scroll para âncoras
- Animações de scroll reveal
- Formulário de cadastro com modal
- Carregamento de formações em destaque

### formations.js
- Sistema de filtros por categoria
- Busca em tempo real
- Carregamento dinâmico de cards
- Animações de entrada

### formation-detail.js
- Carregamento de dados da formação
- Player de vídeo integrado
- Sistema de tabs
- Ações (compartilhar, download, adicionar à lista)
- Formações relacionadas
- Progresso de visualização

### formations-data.js
- Dados mockados de 12 formações
- Funções utilitárias para buscar formações
- Estrutura de dados extensível

## 🎨 Componentes CSS

### Botões
- `.btn-primary`: Botão principal (marrom)
- `.btn-secondary`: Botão secundário (outline)
- `.btn-gold`: Botão dourado (destaque)
- `.btn-ghost`: Botão transparente
- `.btn-sm`, `.btn-lg`: Variações de tamanho

### Cards
- `.card`: Card base com sombra
- `.formation-card`: Card especial para formações
- `.hover-lift`: Efeito de elevação no hover

### Formulários
- `.form-input`: Input estilizado
- `.form-label`: Label consistente
- `.form-group`: Grupo de campo

### Utilitários
- Classes de espaçamento (`.mt-lg`, `.mb-xl`, etc)
- Classes de display (`.d-flex`, `.d-grid`, etc)
- Classes de texto (`.text-center`, `.text-white`, etc)

## 🔄 Personalizações

### Adicionar Nova Formação

Edite `assets/js/formations-data.js`:

```javascript
{
    id: 13, // Próximo ID
    title: "Título da Formação",
    category: "teologia", // ou espiritualidade, filosofia, historia, biblia
    categoryName: "Teologia",
    description: "Descrição breve...",
    duration: "45:30",
    date: "2025-01-20",
    views: 0,
    thumbnail: "URL_DA_IMAGEM",
    videoUrl: "URL_DO_VIDEO",
    author: "Nome do Autor",
    featured: false,
    summary: `<p>HTML do resumo...</p>`,
    resources: [
        { name: "PDF", size: "2MB", icon: "file-pdf" }
    ]
}
```

### Alterar Cores

Edite `assets/css/variables.css` e modifique as variáveis CSS:

```css
:root {
  --primary-dark: #5C3317;
  --primary: #8B6F47;
  --accent-gold: #D4AF37;
  /* ... */
}
```

### Adicionar Nova Categoria

1. Adicione o filtro em `formacoes.html`
2. Adicione a seção correspondente
3. Atualize `formations.js` para incluir a nova categoria
4. Adicione formações com a nova categoria em `formations-data.js`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🌐 Navegadores Suportados

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Opera (últimas 2 versões)

## 🔮 Próximas Funcionalidades (Sugeridas)

- [ ] Backend com Node.js ou PHP
- [ ] Banco de dados para formações
- [ ] Autenticação de usuários
- [ ] Área do membro
- [ ] Sistema de comentários real
- [ ] Marcação de favoritos persistente
- [ ] Notificações de novas formações
- [ ] Certificados de conclusão
- [ ] Quiz e avaliações
- [ ] Modo escuro

## 📞 Contato

- **Email**: clubelivrosantoagostinho@gmail.com
- **WhatsApp**: (83) 98197-5000
- **WhatsApp Grupo**: [Entrar no Grupo](https://chat.whatsapp.com/DGD0r15PvuU8iRNGk5zGpI?mode=ems_copy_t)

## 📄 Licença

© 2025 Clube Santo Agostinho. Todos os direitos reservados.

## 🙏 Citação

> "A leitura é um meio para atingir a sabedoria, mas a sabedoria está em saber utilizar o que se leu."
> — Santo Agostinho

---

**Desenvolvido com ❤️ e fé**