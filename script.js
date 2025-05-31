const produtos = [
  {
    ref: "SOM PREMIUM",
    nome: "Air Pods",
    descricao: "Experimente o som da forma mais pura.Cancelamento de ruído adaptativo, qualidade de áudio excepcional e design ergonômico para o máximo conforto. Sua música não soou tão bem.",
    imagem: "imagens/air-pods.png",
    video: "https://www.youtube.com/watch?v=WDjE6nPLOUo",
    saibamais: "produtos/airpods.html"

  },
  {
    ref: "LANÇAMENTO",
    nome: "Apple watch",
    descricao: "O smartwatch mais avançado do mercado. Monitoramento completo de saúde, GPS integrado,tela AMOLED de alta resolução e bateria de longa duração. Perfeito para acompanhar seu estilo de vida.",
    imagem: "imagens/apple-watch.png",
    video: "https://www.youtube.com/watch?v=le2hpva3B-A",
    saibamais: "produtos/applewatch.html"
  },
  {
    ref: "OUTRA PARADA",
    nome: "Vision pro",
    descricao: "Realidade aumentada imersiva com o Apple Vision Pro: inovação ao alcance dos olhos.",
    imagem: "imagens/vision-pro.png",
    video: "https://www.youtube.com/watch?v=TX9qSaGXFyg",
    saibamais: "produtos/visionpro.html"
  }
];

let indiceAtual = 0;

function atualizarProdutoComAnimacao(sentido = "direita") {
  const container = document.querySelector(".produto-container");
  // Define direção de saída
  container.classList.add(sentido === "direita" ? "slide-out-left" : "slide-out-right");
  // Espera a animação terminar antes de atualizar conteúdo
  setTimeout(() => {
    const produto = produtos[indiceAtual];
    const videoId = produto.video.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    document.getElementById("premium").textContent = produto.ref;
    document.getElementById("produto-img").src = produto.imagem;
    document.getElementById("produto-nome").textContent = produto.nome;
    document.getElementById("produto-desc").textContent = produto.descricao;
    document.getElementById("video").src = embedUrl;
    document.getElementById("saibamais").href=produto.saibamais;

    // Remove classe de saída e adiciona classe de entrada
    container.classList.remove("slide-out-left", "slide-out-right");
    container.classList.add(sentido === "direita" ? "slide-in-right" : "slide-in-left");

    // Remove animação depois de exibir
    setTimeout(() => {
      container.classList.remove("slide-in-left", "slide-in-right");
    }, 500);
  }, 500);
}

function proximoProduto() {
  indiceAtual = (indiceAtual + 1) % produtos.length;
  atualizarProdutoComAnimacao("direita");
}

function produtoAnterior() {
  indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
  atualizarProdutoComAnimacao("esquerda");
}

window.onload = function () {
  atualizarProdutoComAnimacao(); // inicializa com animação leve
};

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
if (userLogado) {
logado.innerHTML = `Olá <strong>${userLogado.nome}</strong>!`;
}
function sair() {
  if (userLogado) {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "index.html";
  }
  else {
    alert(`Você não está logado para sair!`);
  }
}
let timer;
if (timer) {
  clearInterval(timer);
}
timer = setInterval(() => {
  produtoAnterior();
}, 5000);
const miniaturas = document.querySelectorAll(".miniaturas img");
        const imagemExpandida = document.getElementById("img-expandida");
        miniaturas.forEach(img => {
            img.addEventListener("click", () => {
                imagemExpandida.src = img.src;
                imagemExpandida.alt = img.alt;
            });
        });
