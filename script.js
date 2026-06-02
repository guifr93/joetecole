const maxTentativas = 5;
let tentativas = 0;
let jogoEncerrado = false;

const personagens = [
  {
    nome: "Bily Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 9,
    inteligencia: 2,
    altura: 25,
    forca: 3,
    agressividade: 4,
    filme: true,
    imagem: "images/bily.JPG"
  },
  {
    nome: "Bilito Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 8,
    inteligencia: 2,
    altura: 24,
    forca: 1,
    agressividade: 1,
    filme: true,
    imagem: "images/bilito.JPG"
  },
  {
    nome: "Joe Au",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 9,
    inteligencia: 4,
    altura: 32,
    forca: 8,
    agressividade: 2,
    filme: true,
    imagem: "images/joe.png"
  },
  {
    nome: "Dr. Léo Pardo",
    tipo: "Mamífero",
    especie: "Leopardo",
    popularidade: 9,
    inteligencia: 10,
    altura: 20,
    forca: 8,
    agressividade: 5,
    filme: true,
    imagem: "images/leopardo.JPG"
  },
  {
    nome: "Bob Coelho",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 10,
    inteligencia: 6,
    altura: 25,
    forca: 1,
    agressividade: 10,
    filme: true,
    imagem: "images/bobcoelho.JPG"
  },
  {
    nome: "Bong Bonny",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 6,
    inteligencia: 6,
    altura: 15,
    forca: 5,
    agressividade: 3,
    filme: false,
    imagem: "images/bong.JPG"
  },
  {
    nome: "Esbongrevo Cambrevo",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 4,
    inteligencia: 5,
    altura: 9,
    forca: 1,
    agressividade: 5,
    filme: false,
    imagem: "images/Esbongrevo.JPG"
  },
  {
    nome: "Gumercindo Charrete",
    tipo: "Mamífero",
    especie: "Burro",
    popularidade: 6,
    inteligencia: 5,
    altura: 18,
    forca: 9,
    agressividade: 3,
    filme: false,
    imagem: "images/Gumercindo.JPG"
  },
  {
    nome: "Kako",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 0,
    inteligencia: 6,
    altura: 7,
    forca: 8,
    agressividade: 3,
    filme: false,
    imagem: "images/Kako.JPG"
  },
  {
    nome: "Kiko Striker",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 3,
    inteligencia: 7,
    altura: 35,
    forca: 9,
    agressividade: 5,
    filme: false,
    imagem: "images/Kiko.JPG"
  },
  {
    nome: "Lilu Siberiano",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 8,
    altura: 21,
    forca: 7,
    agressividade: 6,
    filme: false,
    imagem: "images/lilu.JPG"
  },
  {
    nome: "Nemo",
    tipo: "Peixe",
    especie: "Palhaço",
    popularidade: 1,
    inteligencia: 5,
    altura: 17,
    forca: 1,
    agressividade: 1,
    filme: false,
    imagem: "images/Nemo.JPG"
  },
  {
    nome: "Pantufo",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 1,
    inteligencia: 5,
    altura: 21,
    forca: 7,
    agressividade: 2,
    filme: false,
    imagem: "images/Pantufo.JPG"
  },
  {
    nome: "Pascoal Lebrete",
    tipo: "Mamífero",
    especie: "Lebre",
    popularidade: 6,
    inteligencia: 8,
    altura: 13,
    forca: 4,
    agressividade: 2,
    filme: false,
    imagem: "images/pascoal.JPG"
  },
  {
    nome: "Scooby Dog",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 5,
    inteligencia: 6,
    altura: 25,
    forca: 7,
    agressividade: 6,
    filme: false,
    imagem: "images/Scooby.JPG"
  },
  {
    nome: "Scott Dog",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 7,
    altura: 17,
    forca: 5,
    agressividade: 4,
    filme: false,
    imagem: "images/Scott.JPG"
  },
  {
    nome: "Ted Coelho",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 5,
    inteligencia: 7,
    altura: 22,
    forca: 8,
    agressividade: 6,
    filme: false,
    imagem: "images/ted.JPG"
  },
  {
    nome: "Tiny Tiger",
    tipo: "Mamífero",
    especie: "Tigre",
    popularidade: 8,
    inteligencia: 5,
    altura: 24,
    forca: 9,
    agressividade: 7,
    filme: true,
    imagem: "images/tiny.JPG"
  },
  {
    nome: "Trovão Raio",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 7,
    altura: 29,
    forca: 8,
    agressividade: 7,
    filme: true,
    imagem: "images/trovao.JPG"
  },
  {
    nome: "Yoshi Lebre White",
    tipo: "Mamífero",
    especie: "Lebre",
    popularidade: 8,
    inteligencia: 8,
    altura: 16,
    forca: 9,
    agressividade: 10,
    filme: true,
    imagem: "images/yoshi.JPG"
  },
  {
    nome: "Joeteco Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 8,
    inteligencia: 4,
    altura: 24,
    forca: 6,
    agressividade: 2,
    filme: true,
    imagem: "images/bird.png"
  },
  {
    nome: "Bileco Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 1,
    altura: 8,
    forca: 0,
    agressividade: 3,
    filme: true,
    imagem: "images/bird.png"
  },
  {
    nome: "Biloco Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 0,
    altura: 8,
    forca: 1,
    agressividade: 2,
    filme: true,
    imagem: "images/bird.png"
  },
  {
    nome: "Bituto Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 2,
    inteligencia: 5,
    altura: 20,
    forca: 4,
    agressividade: 3,
    filme: true,
    imagem: "images/bird.png"
  },
  {
    nome: "Diugungu",
    tipo: "Mamífero",
    especie: "Urso Polar",
    popularidade: 5,
    inteligencia: 7,
    altura: 25,
    forca: 9,
    agressividade: 7,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Dentinho Dente",
    tipo: "Mamífero",
    especie: "Morsa",
    popularidade: 7,
    inteligencia: 7,
    altura: 27,
    forca: 8,
    agressividade: 4,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Bib Duá",
    tipo: "Mamífero",
    especie: "Tamanduá",
    popularidade: 3,
    inteligencia: 6,
    altura: 20,
    forca: 6,
    agressividade: 3,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Bib Uso",
    tipo: "Mamífero",
    especie: "Urso",
    popularidade: 2,
    inteligencia: 6,
    altura: 19,
    forca: 8,
    agressividade: 1,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Foot-lix",
    tipo: "Ave",
    especie: "Galo",
    popularidade: 2,
    inteligencia: 5,
    altura: 26,
    forca: 3,
    agressividade: 6,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Bob Tucano",
    tipo: "Ave",
    especie: "Tucano",
    popularidade: 4,
    inteligencia: 5,
    altura: 15,
    forca: 3,
    agressividade: 4,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Pipoca Piruá",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 8,
    altura: 27,
    forca: 6,
    agressividade: 4,
    filme: false,
    imagem: "images/bird.png"
  },
  {
    nome: "Patrick Dois",
    tipo: "Invertebrado",
    especie: "Estrela-do-mar",
    popularidade: 6,
    inteligencia: 4,
    altura: 38,
    forca: 4,
    agressividade: 3,
    filme: false,
    imagem: "images/bird.png"
  },
    {
    nome: "Albert Einstein",
    tipo: "Mamífero",
    especie: "Homo Sapiens",
    popularidade: 3,
    inteligencia: 10,
    altura: 8,
    forca: 3,
    agressividade: 0,
    filme: false,
    imagem: "images/bird.png"
  },
    {
    nome: "Marty Zebra",
    tipo: "Mamífero",
    especie: "Zebra",
    popularidade: 2,
    inteligencia: 5,
    altura: 18,
    forca: 6,
    agressividade: 5,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Terrierzinho Souza",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 3,
    inteligencia: 1,
    altura: 7,
    forca: 2,
    agressividade: 5,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Nick Dog",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 7,
    altura: 38,
    forca: 9,
    agressividade: 5,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Sir Rowlen",
    tipo: "Mamífero",
    especie: "Gato",
    popularidade: 2,
    inteligencia: 5,
    altura: 6,
    forca: 3,
    agressividade: 7,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Dyno Saur",
    tipo: "Réptil",
    especie: "T-Rex",
    popularidade: 4,
    inteligencia: 8,
    altura: 21,
    forca: 10,
    agressividade: 9,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Dinoplinho Mesozóico",
    tipo: "Réptil",
    especie: "Diplodocus",
    popularidade: 4,
    inteligencia: 8,
    altura: 14,
    forca: 10,
    agressividade: 5,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Barack Obama",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 3,
    inteligencia: 8,
    altura: 12,
    forca: 5,
    agressividade: 3,
    filme: false,
    imagem: "images/bird.png"
  },
      {
    nome: "Coelita Zanahorita",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 3,
    inteligencia: 7,
    altura: 22,
    forca: 2,
    agressividade: 1,
    filme: false,
    imagem: "images/bird.png"
  }
];

const hoje = obterDataHoje();
const secreto = obterPersonagemDoDia();

let input;
let sugestoes;

document.addEventListener("DOMContentLoaded", function () {
  input = document.getElementById("guessInput");
  sugestoes = document.getElementById("sugestoes");

  iniciarJogo();

  input.addEventListener("input", mostrarSugestoes);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      jogar();
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".autocomplete-container")) {
      limparSugestoes();
    }
  });

  console.log("Personagem do dia:", secreto.nome);
});

function obterDataHoje() {
  const data = new Date();

  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function obterPersonagemDoDia() {
  const dataInicial = new Date(2026, 0, 1);
  const dataAtual = new Date();

  dataAtual.setHours(0, 0, 0, 0);

  const diferencaEmDias = Math.floor(
    (dataAtual - dataInicial) / (1000 * 60 * 60 * 24)
  );

  const indice = diferencaEmDias % personagens.length;

  return personagens[indice];
}

function iniciarJogo() {
  document.getElementById("dataDesafio").innerText =
    "Desafio diário: " + hoje;

  atualizarEstatisticasNaTela();

  const jogoSalvo = JSON.parse(
    localStorage.getItem("characterdleJogoDiario")
  );

  if (jogoSalvo && jogoSalvo.data === hoje) {
    restaurarJogoSalvo(jogoSalvo);
  } else {
    atualizarTentativas();
  }
}

function mostrarSugestoes() {
  const texto = input.value.trim().toLowerCase();

  limparSugestoes();

  if (texto.length < 3 || jogoEncerrado) {
    return;
  }

  const correspondencias = personagens.filter(personagem =>
    personagem.nome.toLowerCase().includes(texto)
  );

  correspondencias.forEach(personagem => {
    const div = document.createElement("div");

    div.className = "sugestao";
    div.textContent = personagem.nome;

    div.addEventListener("click", function () {
      input.value = personagem.nome;
      limparSugestoes();
      input.focus();
    });

    sugestoes.appendChild(div);
  });
}

function limparSugestoes() {
  sugestoes.innerHTML = "";
}

function jogar() {
  if (jogoEncerrado) {
    return;
  }

  const nome = input.value.trim();

  const tentativa = personagens.find(personagem =>
    personagem.nome.toLowerCase() === nome.toLowerCase()
  );

  if (!tentativa) {
    alert("Personagem não encontrado. Escolha uma das sugestões da lista.");
    return;
  }

  tentativas++;

  adicionarLinhaTabela(tentativa, false);
  salvarEstadoParcial();

  atualizarTentativas();

  input.value = "";
  limparSugestoes();

  if (tentativa.nome === secreto.nome) {
    jogoEncerrado = true;

    salvarResultadoDiario(true);
    atualizarEstatisticas(true, tentativas);
    encerrarJogo(true);

    alert(
      "Você acertou o personagem em " +
      tentativas +
      " tentativa(s)!"
    );

    return;
  }

  if (tentativas >= maxTentativas) {
    jogoEncerrado = true;

    adicionarLinhaTabela(secreto, true);

    salvarResultadoDiario(false);
    atualizarEstatisticas(false, null);
    encerrarJogo(false);

    alert(
      "Você perdeu!\n\n" +
      "A resposta correta era: " +
      secreto.nome
    );
  }
}

function adicionarLinhaTabela(personagem, ehRespostaFinal) {
  const tabela = document.getElementById("resultado");
  const linha = tabela.insertRow();

  if (ehRespostaFinal) {
    linha.classList.add("linha-resposta");
    linha.dataset.respostaFinal = "true";
  }

  linha.insertCell().innerText = personagem.nome;

  adicionarCelula(linha, personagem.tipo, personagem.tipo === secreto.tipo);
  adicionarCelula(linha, personagem.especie, personagem.especie === secreto.especie);

  adicionarCelulaNumerica(linha, personagem.popularidade, secreto.popularidade);
  adicionarCelulaNumerica(linha, personagem.inteligencia, secreto.inteligencia);
  adicionarCelulaNumerica(linha, personagem.altura, secreto.altura);
  adicionarCelulaNumerica(linha, personagem.forca, secreto.forca);
  adicionarCelulaNumerica(linha, personagem.agressividade, secreto.agressividade);

  adicionarCelula(
    linha,
    personagem.filme ? "Sim" : "Não",
    personagem.filme === secreto.filme
  );

  const celulaImagem = linha.insertCell();

  const img = document.createElement("img");
  img.src = personagem.imagem;
  img.alt = personagem.nome;
  img.className = "imagem-personagem";

  celulaImagem.appendChild(img);
}

function adicionarCelulaNumerica(linha, valor, valorSecreto) {
  let texto = valor;

  if (valor < valorSecreto) {
    texto += " ↑";
  } else if (valor > valorSecreto) {
    texto += " ↓";
  }

  adicionarCelula(linha, texto, valor === valorSecreto);
}

function adicionarCelula(linha, texto, correto) {
  const celula = linha.insertCell();

  celula.innerText = texto;
  celula.className = correto ? "correto" : "errado";
}

function atualizarTentativas() {
  document.getElementById("tentativasTexto").innerText =
    "Tentativas restantes: " +
    (maxTentativas - tentativas);
}

function encerrarJogo(venceu) {
  document.getElementById("botaoTentar").disabled = true;
  input.disabled = true;

  mostrarCompartilhamento(venceu);
  atualizarEstatisticasNaTela();
}

function salvarEstadoParcial() {
  const jogoSalvo = {
    data: hoje,
    tentativas: obterNomesDasTentativas(),
    encerrado: false,
    venceu: false
  };

  localStorage.setItem(
    "characterdleJogoDiario",
    JSON.stringify(jogoSalvo)
  );
}

function salvarResultadoDiario(venceu) {
  const jogoSalvo = {
    data: hoje,
    tentativas: obterNomesDasTentativas(),
    encerrado: true,
    venceu: venceu
  };

  localStorage.setItem(
    "characterdleJogoDiario",
    JSON.stringify(jogoSalvo)
  );
}

function obterNomesDasTentativas() {
  const linhas = document.querySelectorAll("#resultado tr");
  const nomes = [];

  for (let i = 1; i < linhas.length; i++) {
    const linha = linhas[i];

    if (linha.dataset.respostaFinal === "true") {
      continue;
    }

    const celulaNome = linha.querySelector("td");

    if (celulaNome) {
      nomes.push(celulaNome.innerText);
    }
  }

  return nomes;
}

function restaurarJogoSalvo(jogoSalvo) {
  jogoSalvo.tentativas.forEach(nomePersonagem => {
    const personagem = personagens.find(p => p.nome === nomePersonagem);

    if (personagem) {
      adicionarLinhaTabela(personagem, false);
    }
  });

  tentativas = jogoSalvo.tentativas.length;

  atualizarTentativas();

  if (jogoSalvo.encerrado) {
    jogoEncerrado = true;

    if (!jogoSalvo.venceu) {
      adicionarLinhaTabela(secreto, true);
    }

    encerrarJogo(jogoSalvo.venceu);
  }
}

function obterEstatisticas() {
  let estatisticas = JSON.parse(
    localStorage.getItem("characterdleEstatisticas")
  );

  if (!estatisticas) {
    estatisticas = {
      diasJogados: 0,
      vitorias: 0,
      derrotas: 0,
      sequenciaAtual: 0,
      maiorSequencia: 0,
      acertosPorTentativa: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    };
  }

  if (estatisticas.sequenciaAtual === undefined) {
    estatisticas.sequenciaAtual = 0;
  }

  if (estatisticas.maiorSequencia === undefined) {
    estatisticas.maiorSequencia = 0;
  }

  return estatisticas;
}

function atualizarEstatisticas(venceu, numeroTentativa) {
  const estatisticas = obterEstatisticas();

  estatisticas.diasJogados++;

  if (venceu) {
    estatisticas.vitorias++;
    estatisticas.acertosPorTentativa[numeroTentativa]++;

    estatisticas.sequenciaAtual++;

    if (estatisticas.sequenciaAtual > estatisticas.maiorSequencia) {
      estatisticas.maiorSequencia = estatisticas.sequenciaAtual;
    }

  } else {
    estatisticas.derrotas++;
    estatisticas.sequenciaAtual = 0;
  }

  localStorage.setItem(
    "characterdleEstatisticas",
    JSON.stringify(estatisticas)
  );
}

function atualizarEstatisticasNaTela() {
  const estatisticas = obterEstatisticas();

  document.getElementById("statDias").innerText = estatisticas.diasJogados;
  document.getElementById("statVitorias").innerText = estatisticas.vitorias;
  document.getElementById("statDerrotas").innerText = estatisticas.derrotas;
  document.getElementById("statSequenciaAtual").innerText = estatisticas.sequenciaAtual;
  document.getElementById("statMaiorSequencia").innerText = estatisticas.maiorSequencia;

  document.getElementById("stat1").innerText = estatisticas.acertosPorTentativa[1];
  document.getElementById("stat2").innerText = estatisticas.acertosPorTentativa[2];
  document.getElementById("stat3").innerText = estatisticas.acertosPorTentativa[3];
  document.getElementById("stat4").innerText = estatisticas.acertosPorTentativa[4];
  document.getElementById("stat5").innerText = estatisticas.acertosPorTentativa[5];
}

function mostrarCompartilhamento(venceu) {
  const div = document.getElementById("compartilhar");
  const textarea = document.getElementById("textoCompartilhar");

  textarea.value = gerarResultadoCompartilhavel(venceu);
  div.style.display = "block";
}

function gerarResultadoCompartilhavel(venceu) {
  let texto = "Joeteco.le " + hoje + "\njoetecole.netlify.app\n";

  if (venceu) {
    texto += tentativas + "/" + maxTentativas + "\n\n";
  } else {
    texto += "X/" + maxTentativas + "\n\n";
  }

  const linhas = document.querySelectorAll("#resultado tr");

  for (let i = 1; i < linhas.length; i++) {
    const linha = linhas[i];

    if (linha.dataset.respostaFinal === "true") {
      continue;
    }

    const celulas = linha.querySelectorAll("td");

    for (let j = 1; j <= 8; j++) {
      texto += celulas[j].className === "correto" ? "🟩" : "⬛";
    }

    texto += "\n";
  }

  return texto;
}

function copiarResultado() {
  const textarea = document.getElementById("textoCompartilhar");

  textarea.select();
  textarea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textarea.value);

  alert("Resultado copiado!");
}
