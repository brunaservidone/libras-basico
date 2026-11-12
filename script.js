// ---------- Menu (celular) ----------
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

function alternarMenu(abrir) {
    menu.classList.toggle("aberto", abrir);
    botaoMenu.setAttribute("aria-expanded", abrir);
    botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
}

botaoMenu.addEventListener("click", () => alternarMenu(!menu.classList.contains("aberto")));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => alternarMenu(false)));

// ---------- Conteúdo ----------
const conteudo = {
    letras: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    palavras: ["Oi", "Tchau", "Bom dia", "Boa tarde", "Boa noite", "Obrigado(a)", "Por favor", "Desculpa", "Sim", "Não"],
    frases: ["Meu nome é...", "Tudo bem?", "Prazer em conhecer você", "Você pode repetir?", "Estou aprendendo Libras"]
};

// Para mostrar um link "Ver sinal" em um cartão, adicione aqui.
// Exemplo: "letras:A": "https://link-do-video-ou-imagem"
const links = {};

// ---------- Progresso salvo no navegador ----------
const CHAVE = "libras-aprendidos";

function carregar() {
    try {
        return new Set(JSON.parse(localStorage.getItem(CHAVE)) || []);
    } catch (e) {
        return new Set();
    }
}

function salvar(aprendidos) {
    try {
        localStorage.setItem(CHAVE, JSON.stringify([...aprendidos]));
    } catch (e) {
        // sem armazenamento disponível: o site continua funcionando
    }
}

const aprendidos = carregar();
const total = Object.values(conteudo).reduce((soma, lista) => soma + lista.length, 0);
const progresso = document.getElementById("progresso");

function atualizarProgresso() {
    progresso.textContent = "Você marcou " + aprendidos.size + " de " + total + " itens como aprendidos.";
}

// ---------- Cartões ----------
function criarCartao(categoria, texto) {
    const id = categoria + ":" + texto;
    const cartao = document.createElement("div");
    cartao.className = "cartao";

    const botao = document.createElement("button");
    botao.className = "cartao-botao";
    botao.textContent = texto;
    botao.setAttribute("aria-pressed", aprendidos.has(id));
    botao.addEventListener("click", () => {
        if (aprendidos.has(id)) {
            aprendidos.delete(id);
        } else {
            aprendidos.add(id);
        }
        botao.setAttribute("aria-pressed", aprendidos.has(id));
        salvar(aprendidos);
        atualizarProgresso();
    });
    cartao.appendChild(botao);

    if (links[id]) {
        const a = document.createElement("a");
        a.className = "cartao-link";
        a.href = links[id];
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Ver sinal";
        cartao.appendChild(a);
    }
    return cartao;
}

document.querySelectorAll(".grade").forEach(grade => {
    const categoria = grade.dataset.categoria;
    conteudo[categoria].forEach(texto => grade.appendChild(criarCartao(categoria, texto)));
});

atualizarProgresso();
