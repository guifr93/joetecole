console.log("Personagem do dia:", secreto.nome);
console.log("Data:", hoje);

const maxTentativas = 5;
let tentativas = 0;
let jogoEncerrado = false;

const personagens = [
  {
    nome: "Bily",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 9,
    inteligencia: 3,
    filme: true,
    imagem: "images/bily.JPG"
  },
  {
    nome: "Bilito",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 8,
    inteligencia: 4,
    filme: true,
    imagem: "images/bilito.JPG"
  },
  {
    nome: "Joe",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 9,
    inteligencia: 2,
    filme: true,
    imagem: "images/joe.png"
  },
  {
    nome: "Dr. Léo Pardo",
    tipo: "Mamífero",
    especie: "Leopardo",
    popularidade: 8,
    inteligencia: 9,
    filme: true,
    imagem: "images/leopardo.JPG"
  },
  {
    nome: "Bob Coelho",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 10,
    inteligencia: 5,
    filme: true,
    imagem: "images/bobcoelho.JPG"
  },
  {
    nome: "Bong Bony",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 5,
    inteligencia: 7,
    filme: false,
    imagem: "images/bong.JPG"
  },
  {
    nome: "Esbongrevo",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 5,
    inteligencia: 6,
    filme: false,
    imagem: "images/Esbongrevo.JPG"
  },
  {
    nome: "Gumercindo",
    tipo: "Mamífero",
    especie: "Burro",
    popularidade: 5,
    inteligencia: 8,
    filme: false,
    imagem: "images/Gumercindo.JPG"
  },
  {
    nome: "Kako",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 0,
    inteligencia: 6,
    filme: false,
    imagem: "images/Kako.JPG"
  },
  {
    nome: "Kiko Striker",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 3,
    inteligencia: 7,
    filme: false,
    imagem: "images/Kiko.JPG"
  },
  {
    nome: "Lilu Siberiano",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 8,
    filme: false,
    imagem: "images/lilu.JPG"
  },
  {
    nome: "Nemo",
    tipo: "Peixe",
    especie: "Palhaço",
    popularidade: 1,
    inteligencia: 5,
    filme: true,
    imagem: "images/Nemo.JPG"
  },
  {
    nome: "Pantufo",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 1,
    inteligencia: 5,
    filme: false,
    imagem: "images/Pantufo.JPG"
  },
  {
    nome: "Pascual Lebrete",
    tipo: "Mamífero",
    especie: "Lebre",
    popularidade: 5,
    inteligencia: 7,
    filme: false,
    imagem: "images/pascoal.JPG"
  },
  {
    nome: "Scooby Dog",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 4,
    inteligencia: 7,
    filme: false,
    imagem: "images/Scooby.JPG"
  },
  {
    nome: "Scott Dog",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 7,
    inteligencia: 8,
    filme: false,
    imagem: "images/Scott.JPG"
  },
  {
    nome: "Ted Coelho",
    tipo: "Mamífero",
    especie: "Coelho",
    popularidade: 6,
    inteligencia: 7,
    filme: false,
    imagem: "images/ted.JPG"
  },
  {
    nome: "Tiny Tiger",
    tipo: "Mamífero",
    especie: "Tigre",
    popularidade: 8,
    inteligencia: 8,
    filme: true,
    imagem: "images/tiny.JPG"
  },
  {
    nome: "Trovão Raio",
    tipo: "Mamífero",
    especie: "Cachorro",
    popularidade: 8,
    inteligencia: 7,
    filme: true,
    imagem: "images/trovao.JPG"
  },
    {
    nome: "Yoshi",
    tipo: "Mamífero",
    especie: "Lebre",
    popularidade: 8,
    inteligencia: 7,
    filme: true,
    imagem: "images/yoshi.JPG"
  }
];

const hoje = obterDataHoje();
const secreto = obterPersonagemDoDia();

const input = document.getElementById("guessInput");
const sugestoes = document.getElementById("sugestoes");

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

function iniciarJogo() {
  document.getElementById("dataDesafio").innerText =
    "Desafio diário: " + hoje;

  atualizarEstatisticasNaTela();

  const jogoSalvo = JSON.parse(
    localStorage.getItem("characterdleJogoDiario")
  );

  if (jogoSalvo && jogoSalvo.data === hoje) {
    restaurarJogoSalvo(jogoSalvo);
  }
}

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

  adicionarCelula(
    linha,
    personagem.tipo,
    personagem.tipo === secreto.tipo
  );

  adicionarCelula(
    linha,
    personagem.especie,
    personagem.especie === secreto.especie
  );

  let alturaTexto = personagem.altura;

  if (personagem.altura < secreto.altura) {
    alturaTexto += " ↑";
  } else if (personagem.altura > secreto.altura) {
    alturaTexto += " ↓";
  }

  adicionarCelula(
    linha,
    alturaTexto,
    personagem.altura === secreto.altura
  );

  let inteligenciaTexto = personagem.inteligencia;

  if (personagem.inteligencia < secreto.inteligencia) {
    inteligenciaTexto += " ↑";
  } else if (personagem.inteligencia > secreto.inteligencia) {
    inteligenciaTexto += " ↓";
  }

  adicionarCelula(
    linha,
    inteligenciaTexto,
    personagem.inteligencia === secreto.inteligencia
  );

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
  const nomesTentativas = obterNomesDasTentativas();

  const jogoSalvo = {
    data: hoje,
    tentativas: nomesTentativas,
    encerrado: false,
    venceu: false
  };

  localStorage.setItem(
    "characterdleJogoDiario",
    JSON.stringify(jogoSalvo)
  );
}

function salvarResultadoDiario(venceu) {
  const nomesTentativas = obterNomesDasTentativas();

  const jogoSalvo = {
    data: hoje,
    tentativas: nomesTentativas,
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

    const primeiraCelula = linha.querySelector("td");

    if (primeiraCelula) {
      nomes.push(primeiraCelula.innerText);
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
      acertosPorTentativa: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    };
  }

  return estatisticas;
}

function atualizarEstatisticas(venceu, numeroTentativa) {
  const estatisticas = obterEstatisticas();

  estatisticas.diasJogados++;

  if (venceu) {
    estatisticas.vitorias++;

    estatisticas.acertosPorTentativa[numeroTentativa]++;
  } else {
    estatisticas.derrotas++;
  }

  localStorage.setItem(
    "characterdleEstatisticas",
    JSON.stringify(estatisticas)
  );
}

function atualizarEstatisticasNaTela() {
  const estatisticas = obterEstatisticas();

  document.getElementById("statDias").innerText =
    estatisticas.diasJogados;

  document.getElementById("statVitorias").innerText =
    estatisticas.vitorias;

  document.getElementById("statDerrotas").innerText =
    estatisticas.derrotas;

  document.getElementById("stat1").innerText =
    estatisticas.acertosPorTentativa[1];

  document.getElementById("stat2").innerText =
    estatisticas.acertosPorTentativa[2];

  document.getElementById("stat3").innerText =
    estatisticas.acertosPorTentativa[3];

  document.getElementById("stat4").innerText =
    estatisticas.acertosPorTentativa[4];

  document.getElementById("stat5").innerText =
    estatisticas.acertosPorTentativa[5];
}

function mostrarCompartilhamento(venceu) {
  const div = document.getElementById("compartilhar");
  const textarea = document.getElementById("textoCompartilhar");

  textarea.value = gerarResultadoCompartilhavel(venceu);
  div.style.display = "block";
}

function gerarResultadoCompartilhavel(venceu) {
  let texto = "Characterdle " + hoje + "\n";

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

    for (let j = 1; j <= 5; j++) {
      if (celulas[j].className === "correto") {
        texto += "🟩";
      } else {
        texto += "⬛";
      }
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
