# Libras Básico

Site para quem quer começar a aprender **Libras (Língua Brasileira de Sinais)**. Reúne o alfabeto, palavras e frases básicas em cartões que a pessoa pode marcar como "aprendidos", com o progresso salvo no próprio navegador.

O projeto começou em 2023, durante o ensino médio, como duas páginas separadas, e foi reformulado em um único site com mais funcionalidades.

## Funcionalidades

- Menu de navegação que abre e fecha no celular e fica sempre visível em telas maiores.
- Três seções: **Letras**, **Palavras** e **Frases**.
- Cartões gerados com JavaScript que podem ser marcados como aprendidos.
- Contador de progresso, salvo no navegador (`localStorage`), que continua ao reabrir o site.
- Layout responsivo (celular e computador).
- Cuidados de acessibilidade: link "Pular para o conteúdo", botões com `aria-label` e `aria-pressed`, contraste de cores e foco visível para navegação por teclado.

## Tecnologias

- HTML5
- CSS3 (variáveis, flexbox, grid e media queries)
- JavaScript (manipulação do DOM e `localStorage`)

## Como usar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.

Também dá para publicar de graça no **GitHub Pages**: em *Settings → Pages*, escolha a branch `main` e a pasta raiz.

## Estrutura

```
libras-basico/
├── index.html   # estrutura da página
├── style.css    # estilos e layout responsivo
├── script.js    # menu, cartões e progresso
└── README.md
```

## O que aprendi

- Estruturar uma página com HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- Criar layouts responsivos com CSS.
- Gerar elementos dinamicamente com JavaScript e tratar eventos de clique.
- Guardar dados no navegador com `localStorage`.
- Pensar em acessibilidade, o que faz sentido em um projeto sobre inclusão.

## Próximos passos

- Adicionar imagens ou vídeos de cada sinal (o objeto `links` no `script.js` já está pronto para receber os endereços).
- Incluir mais palavras e frases, e uma seção de números.
- Criar uma busca para filtrar os cartões.

## Autora

**Bruna Servidone**
