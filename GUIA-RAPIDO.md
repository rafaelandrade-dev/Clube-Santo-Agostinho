# 🚀 Guia Rápido - Clube Santo Agostinho

## ⚡ Início Rápido

### 1. Abrir o Site
Simplesmente clique duas vezes em `index.html` ou arraste para o navegador.

### 2. Navegação
- **Início**: Página principal com informações do clube
- **Formações**: Biblioteca completa tipo Netflix
- **Sobre**: Informações sobre o projeto
- **Contato**: Formas de contato
- **Participar**: Formulário de cadastro

## 🎯 Funcionalidades Principais

### Na Página Inicial (index.html)
✅ Hero section inspirador  
✅ 3 formações em destaque  
✅ Seção "Por Que Participar?"  
✅ Formulário de cadastro funcional  
✅ Modal de confirmação com link para WhatsApp  

### Na Biblioteca de Formações (formacoes.html)
✅ 12 formações mockadas disponíveis  
✅ Busca em tempo real  
✅ Filtros por 5 categorias  
✅ Formação em destaque no topo  
✅ Cards organizados por categoria  

### Na Página de Formação (formacao.html)
✅ Player de vídeo (YouTube/Vimeo)  
✅ Resumo completo em HTML  
✅ Informações sobre a formação  
✅ Download de materiais  
✅ 4 formações relacionadas  
✅ Sistema de comentários  

## 📝 Como Adicionar Conteúdo

### Adicionar Nova Formação

Abra: `assets/js/formations-data.js`

Adicione ao array `formationsData`:

```javascript
{
    id: 13, // Próximo número disponível
    title: "Nome da Formação",
    category: "teologia", // teologia, espiritualidade, filosofia, historia, biblia
    categoryName: "Teologia",
    description: "Descrição curta que aparece no card (máx 150 caracteres)",
    duration: "45:30", // Formato MM:SS ou HH:MM:SS
    date: "2025-01-20", // Formato YYYY-MM-DD
    views: 0,
    thumbnail: "URL_da_imagem_miniatura",
    videoUrl: "URL_do_YouTube_ou_Vimeo",
    author: "Nome do Apresentador",
    featured: false, // true para aparecer em destaque
    summary: `
        <h3>Título da Seção</h3>
        <p>Parágrafo de conteúdo...</p>
        <blockquote>Citação importante</blockquote>
    `,
    resources: [
        { name: "Resumo PDF", size: "2.5 MB", icon: "file-pdf" },
        { name: "Guia de Estudo", size: "1.2 MB", icon: "book" }
    ]
}
```

### URLs de Vídeo Suportadas

**YouTube:**
```
https://www.youtube.com/embed/VIDEO_ID
```

**Vimeo:**
```
https://player.vimeo.com/video/VIDEO_ID
```

### Imagens Suportadas

Você pode usar:
- URLs externas (Unsplash, Pexels, etc)
- Imagens locais (coloque em `assets/images/`)
- Dimensão recomendada: 600x340px (16:9)

## 🎨 Personalização de Cores

Abra: `assets/css/variables.css`

```css
:root {
  /* Cores Principais */
  --primary-dark: #5C3317;    /* Marrom escuro */
  --primary: #8B6F47;         /* Marrom médio */
  --accent-gold: #D4AF37;     /* Dourado */
  
  /* Cores de Fundo */
  --bg-cream: #FAF8F3;        /* Creme claro */
  --bg-white: #FFFFFF;        /* Branco */
  
  /* Texto */
  --text-dark: #2C2416;       /* Texto principal */
  --text-medium: #5A4A3A;     /* Texto secundário */
}
```

Altere os valores hexadecimais para mudar as cores do site inteiro.

## 📧 Configuração do Formulário

O formulário atual abre o cliente de email. Para enviar por API:

Abra: `assets/js/main.js`

Procure por `registrationForm.addEventListener` e substitua:

```javascript
// Ao invés de:
window.open(`mailto:...`);

// Use (exemplo com Fetch API):
fetch('https://sua-api.com/cadastro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, telefone, paroquia })
})
.then(response => response.json())
.then(data => {
    // Mostrar modal de sucesso
    confirmationModal.style.display = 'flex';
});
```

## 🔧 Problemas Comuns

### Cards não aparecem
**Solução**: Verifique se `formations-data.js` está sendo carregado corretamente. Abra o Console do navegador (F12) e veja se há erros.

### Estilos não aplicados
**Solução**: Certifique-se de que `assets/css/main.css` existe e contém os imports corretos.

### Vídeo não carrega
**Solução**: Verifique se a URL do vídeo está no formato embed:
- YouTube: `https://www.youtube.com/embed/ID`
- Vimeo: `https://player.vimeo.com/video/ID`

### Menu mobile não funciona
**Solução**: Verifique se `assets/js/main.js` está sendo carregado.

## 📱 Testar em Mobile

### Opção 1: DevTools do Chrome
1. Pressione F12
2. Clique no ícone de dispositivo móvel (Ctrl+Shift+M)
3. Escolha um dispositivo (iPhone, Galaxy, etc)

### Opção 2: Servidor Local
```bash
# Iniciar servidor
python -m http.server 8000

# No celular, acesse:
http://SEU_IP_LOCAL:8000
```

Descubra seu IP:
- Windows: `ipconfig`
- Mac/Linux: `ifconfig` ou `ip addr`

## 🚀 Deploy

### GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings → Pages
4. Escolha branch `main` e pasta `/ (root)`
5. Salve e acesse a URL fornecida

### Netlify (Gratuito)
1. Acesse netlify.com
2. Arraste a pasta do projeto
3. Pronto! URL gerada automaticamente

### Vercel (Gratuito)
1. Acesse vercel.com
2. Importe o repositório do GitHub
3. Deploy automático

## 📊 Estatísticas

Atualmente o projeto tem:
- ✅ 3 páginas HTML
- ✅ 7 arquivos CSS modulares
- ✅ 4 arquivos JavaScript
- ✅ 12 formações mockadas
- ✅ 5 categorias
- ✅ 100% responsivo
- ✅ 0 dependências externas

## 🆘 Suporte

Se tiver dúvidas:
1. Leia o `readme.md` completo
2. Veja exemplos em `formations-data.js`
3. Inspecione o código com F12 do navegador
4. Entre em contato:
   - Email: clubelivrosantoagostinho@gmail.com
   - WhatsApp: (83) 98197-5000

## 🎓 Aprendizado

Este projeto é ótimo para aprender:
- ✅ HTML5 semântico
- ✅ CSS Grid e Flexbox
- ✅ CSS Variables (Custom Properties)
- ✅ JavaScript ES6+ (arrow functions, template literals, etc)
- ✅ DOM Manipulation
- ✅ Responsive Design
- ✅ UX/UI Design

## 💡 Dicas Pro

1. **Performance**: Use imagens otimizadas (WebP quando possível)
2. **SEO**: Adicione meta tags apropriadas em cada página
3. **Acessibilidade**: Mantenha os atributos `aria-*` e `alt` em imagens
4. **Git**: Use commits descritivos ao versionar
5. **Backup**: Mantenha cópias dos arquivos importantes

---

**Bom desenvolvimento! 🚀**

*"A fé é fortalecida quando é compartilhada"*

