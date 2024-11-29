const words = [
  {
    word: "AAAAAAAAA",
    type: "Interjeição",
    definitions: [
      "Transcrição de grito catártico que representa uma variedade de sentimentos e intensidades.",
      "A?: Para com isso.",
      "ªªªªªª: Quero.",
      "AaAaAaAa: SOS.",
    ],
  },
  {
    word: "Abulebulebule",
    type: "Substantivo | Interjeição",
    definitions: [
      "Usado para descrever um estado bobo.",
      '"Ficar de abulebulebule": ser sujeito a algum tipo de estímulo sexual intenso.',
      '"Como assim você não tá entendendo?"',
    ],
  },
  {
    word: "Anti-cegonha",
    type: "Substantivo",
    definitions: [
      "Anticoncepcional oral.",
      "Implante subdérmico de etonogestrol.",
      "Diz-se de outro método contraceptivo. E.g.: diu, celibato, marido incell.",
    ],
  },
  {
    word: "Argh",
    type: "Interjeição",
    definitions: [
      "Demonstra nível seguinte de irritação.",
      "Compre chocolate. Procure abrigo.",
    ],
  },
  {
    word: "Batatar",
    type: "Verbo",
    definitions: [
      "Derivado do prefixo hispânico papa: batata. Comer, alimentar-se.",
      "Descer.",
    ],
  },
  {
    word: "Bode",
    type: "Substantivo",
    definitions: [
      "(Capra hircus) mamífero ruminante, da família dos Bovídeos, domesticado (sobretudo para obtenção de leite e carne) e de distribuição cosmopolita, de que existem diversas raças, apresenta geralmente cerca de um metro de comprimento e tem chifres ocos e pelos compridos por baixo do queixo; macho da cabra.",
      "(de) bode: estado de espírito. Enfastiada, chateada, borocoxô.",
      '"Bode faz bééé e dá cabeçada." In: áudios da Bibi.',
    ],
  },
  {
    word: "Cica",
    type: "Substantivo",
    definitions: ["Ciente, caguei."],
  },
  {
    word: "Dãã",
    type: "Interjeição",
    definitions: [
      "Diz-se daquilo que é trivial, evidente, óbvio.",
      '"Para de fazer pergunta besta."',
      "Precede um lmgtfy.",
    ],
  },
  {
    word: "DFM",
    type: "Substantivo",
    definitions: [
      "Di Folco Martinelli.",
      "Sobrenome da Teresa.",
      "Nome do primeiro código que escreveram pra mim.",
    ],
  },
  {
    word: "Eu & Você, Você & Eu",
    type: "Expressão idiomática",
    definitions: [
      "Clara referência a Blair&Chuck, de Gossip Girl.",
      "Nosso convite de casamento.",
      "Inscrição interna de uma coisinha prata que cabe no dedo.",
      "Amor.",
    ],
  },
  {
    word: "Fofofo",
    type: "Adj.",
    definitions: ["Extremamente, absurdamente, apertavelmente fofo."],
  },
  {
    word: "Grand finale",
    type: "Estrangeirismo",
    definitions: ["Define aí, amor."],
  },
  {
    word: "E o Kiko?",
    type: "Expressão idiomática",
    definitions: ['"Kiko tenho a ver com isso?"', "Ema, ema, ema."],
  },
  {
    word: "Kratos",
    type: "Substantivo",
    definitions: [
      'Protagonista da série de videogames "God of War".',
      "Órgão sexual feminino.",
    ],
  },
  {
    word: "Literalmente",
    type: "Advérbio",
    definitions: [
      "De modo literal, à letra; exatamente, expressamente.",
      "O contrário disso.",
    ],
  },
  {
    word: "LMGTFY",
    type: "Expressão idiomática",
    definitions: [
      "Let me google that for you.",
      "Domínio online de mesmo nome que fornece tutoriais irônicos de como usar navegadores online em detrimento ao wiki-gente.",
    ],
  },
  {
    word: "Me dá ousadia",
    type: "Expressão idiomática",
    definitions: ["Leia-se: quero carinho, atenção, cafuné, dengo."],
  },
  {
    word: "Monstrês",
    type: "Substantivo",
    definitions: [
      "Idioma de todo homem que assim que começa a namorar passa a se comunicar por grunhidos vagos e espera clarividência.",
      "Nhé, blé, argh, tá, oi?, AAAAAAAA, abulebulebule, asdghudiuhaesaijhgjds ou outro infarto no teclado.",
    ],
  },
  {
    word: "Não me ama mais",
    type: "Expressão dramática",
    definitions: [
      "Claramente esperando que o contrário seja dito.",
      "Reação a ofensas ditas ou executadas anteriormente, sem data de expiração.",
    ],
  },
  {
    word: "Nhé",
    type: "Interjeição",
    definitions: [
      "Demonstra que aconteceu ou, mais provavelmente, foi dito algo errado.",
      "Método de resolução: entenda o que está errado e combata a causa, não os sintomas.",
      "Revalide. Dê um tempo e não se gabe por ter dito a coisa certa.",
      "Ações espontâneas dão mais xp que as de desculpa.",
      "Blé; pouxa; afff; pff.",
      '"Nhé, não falo monstrês."',
    ],
  },
  {
    word: "Papai do céu me deu um namorado",
    type: "Letra de canção",
    definitions: [
      "Lindo, gentil, fiel e tarado.",
      "Mas se tiver alguns dólares não vou chorar.",
      "Pedro (DI FOLCO) MartinelLi",
    ],
    image: "./bjoo.png",
  },
  {
    word: "Poti",
    type: "Verbo",
    definitions: [
      "Variação idiomática do verbo poder no presente, que desperta ternura e carinho.",
      "Permite conjugação regular.",
      "Expressão de consentimento.",
    ],
  },
  {
    word: "Princesa Sofia",
    type: "Substantivo",
    definitions: [
      "Protagonista do desenho infantil homônimo.",
      'Órgão sexual feminino. In: "Como Perder um homem em 10 dias", 2003.',
    ],
  },
  {
    word: "Que doideira",
    type: "Expressão",
    definitions: [
      "Claramente não sabe o que falar e está tentando que o assunto continue.",
      "Prefere não se manifestar pra não piorar algo.",
    ],
  },
  {
    word: "Roupinha",
    type: "Substantivo",
    definitions: ["Preservativo masculino."],
  },
  {
    word: "Safofa",
    type: "Adj.",
    definitions: [
      'Uma evolução de "só fofa".',
      "Jeitinho fofo, mas pensando claramente em sexo.",
    ],
  },
  {
    word: "Só fofa",
    type: "Adv. + adj.",
    definitions: [
      "Fofa pela ternura que carrega, nem tanto pela índole que revela.",
      "Sorte que o Miguel não viu.",
      "Quem vê cara não vê coração.",
    ],
  },
  {
    word: "Teresa",
    type: "Substantivo",
    definitions: [
      "A menininha que ainda vamos ter.",
      "Tetê, Tê, neguinha, a moça da água.",
    ],
  },
  {
    word: "Toda amassada",
    type: "Adv. de intensidade + adj.",
    definitions: [
      "Com a cara magoada; o cabelo bagunçado; o ânimo subterrâneo; a autoestima irônica; os olhos pequenos; usando óculos; mil manutenções por fazer.",
      "Cavando um elogio.",
    ],
  },
  {
    word: "29",
    type: "Numeral",
    definitions: [
      "Número da sorte. Nosso número; significa tudo.",
      "Ano em que podem começar a vir cegonhas.",
      "Inscrição interna de uma coisinha prata que cabe no dedo.",
      "Contagem de dias ignorados: II.",
    ],
  },
];

words.sort((a, b) => {
  if (a.word < b.word) return -1;
  if (a.word > b.word) return 1;
  return 0;
});

function generateWordList() {
  const wordListContainer = document.getElementById("word-list");
  wordListContainer.innerHTML = "";

  words.forEach((word) => {
    const wordItem = document.createElement("div");
    wordItem.classList.add("word-item");
    wordItem.innerText = word.word;

    const wordDetails = document.createElement("div");
    wordDetails.classList.add("word-details");
    wordDetails.style.display = "none";

    const syllables = document.createElement("div");
    syllables.classList.add("syllables");

    const definitionList = document.createElement("ul");
    definitionList.classList.add("definition-list");
    word.definitions.forEach((def) => {
      const listItem = document.createElement("li");
      listItem.innerText = def;
      definitionList.appendChild(listItem);
    });
    wordDetails.appendChild(definitionList);

    const wordType = document.createElement("div");
    wordType.classList.add("word-type");
    wordType.innerText = `${word.type}`;
    wordDetails.appendChild(wordType);

    const image = document.createElement("img");
    image.src = word.image;
    image.alt = ``;
    image.style.width = "100px";
    image.style.marginTop = "10px";
    wordDetails.appendChild(image);

    wordItem.onclick = () => {
      const isVisible = wordDetails.style.display === "block";
      wordDetails.style.display = isVisible ? "none" : "block";
    };

    wordItem.appendChild(wordDetails);
    wordListContainer.appendChild(wordItem);
  });
}

document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchTerm)
  );
  updateWordList(filteredWords);
});

function updateWordList(filteredWords) {
  const wordListContainer = document.getElementById("word-list");
  wordListContainer.innerHTML = "";

  filteredWords.forEach((word) => {
    const wordItem = document.createElement("div");
    wordItem.classList.add("word-item");
    wordItem.innerText = word.word;

    const wordDetails = document.createElement("div");
    wordDetails.classList.add("word-details");
    wordDetails.style.display = "none";

    const definitionList = document.createElement("ul");
    definitionList.classList.add("definition-list");
    word.definitions.forEach((def) => {
      const listItem = document.createElement("li");
      listItem.innerText = def;
      definitionList.appendChild(listItem);
    });
    wordDetails.appendChild(definitionList);

    const wordType = document.createElement("div");
    wordType.classList.add("word-type");
    wordType.innerText = `${word.type}`;
    wordDetails.appendChild(wordType);

    const image = document.createElement("img");
    image.src = word.image;
    image.alt = ``;
    image.style.width = "100px";
    image.style.marginTop = "10px";
    wordDetails.appendChild(image);

    wordItem.onclick = () => {
      const isVisible = wordDetails.style.display === "block";
      wordDetails.style.display = isVisible ? "none" : "block";
    };

    wordItem.appendChild(wordDetails);
    wordListContainer.appendChild(wordItem);
  });
}

generateWordList();
