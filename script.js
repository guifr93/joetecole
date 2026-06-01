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

const secreto =
  personagens[Math.floor(Math.random() * personagens.length)];


const input = document.getElementById("guessInput");
const sugestoes = document.getElementById("sugestoes");

input.addEventListener("input", () => {

  const texto = input.value.trim().toLowerCase();

  sugestoes.innerHTML = "";

  if (texto.length < 3) {
    return;
  }

  const correspondencias = personagens.filter(p =>
    p.nome.toLowerCase().includes(texto)
  );

  correspondencias.forEach(personagem => {

    const div = document.createElement("div");

    div.className = "sugestao";
    div.textContent = personagem.nome;

    div.onclick = () => {
      input.value = personagem.nome;
      sugestoes.innerHTML = "";
    };

    sugestoes.appendChild(div);

  });

});

function jogar() {
  if (jogoEncerrado) {
    return;
  }

  const nome = document.getElementById("guessInput").value.trim();

  const tentativa = personagens.find(p =>
    p.nome.toLowerCase() === nome.toLowerCase()
  );

  if (!tentativa) {
    alert("Personagem não encontrado");
    return;
  }

  tentativas++;

  adicionarLinhaTabela(tentativa, false);

  atualizarTentativas();

  document.getElementById("guessInput").value = "";

  if (tentativa.nome === secreto.nome) {
    jogoEncerrado = true;
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

  let popularidadeTexto = personagem.popularidade;

  if (personagem.popularidade < secreto.popularidade) {
    popularidadeTexto += " ↑";
  } else if (personagem.popularidade > secreto.popularidade) {
    popularidadeTexto += " ↓";
  }

  adicionarCelula(
    linha,
    popularidadeTexto,
    personagem.popularidade === secreto.popularidade
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
  document.getElementById("guessInput").disabled = true;

  mostrarCompartilhamento(venceu);
}

function mostrarCompartilhamento(venceu) {
  const div = document.getElementById("compartilhar");
  const textarea = document.getElementById("textoCompartilhar");

  textarea.value = gerarResultadoCompartilhavel(venceu);
  div.style.display = "block";
}

function gerarResultadoCompartilhavel(venceu) {
  let texto = "Joeteco.le\njoetecole.netlify.app\n";

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

document.addEventListener("click", (event) => {

  if (!event.target.closest(".autocomplete-container")) {
    sugestoes.innerHTML = "";
  }

});
