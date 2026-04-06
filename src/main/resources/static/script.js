let hino = null;
let indice = 0;
let sequencia = [];

async function buscar() {
    console.log("clicou no buscar");

    console.log(hino);

    const numero = document.getElementById("numero").value;

    const res = await fetch(`/hinos/${numero}`);

    if (!res.ok) {
        alert("Hino não encontrado");
        return;
    }

    hino = await res.json();

    sequencia = montarSequencia(hino);

    console.log("sequencia: ", sequencia);

    indice = 0;
    render();
}

function render() {
    if (!sequencia.length) return;

    if (indice < 0) indice = 0;
    if (indice >= sequencia.length) indice = sequencia.length - 1;

    const atual = sequencia[indice];
    const versoEl = document.getElementById("verso");
    const tituloEl = document.getElementById("titulo");
    const contadorEl = document.getElementById("contador");

    if (atual.tipo === "titulo") {
        tituloEl.innerText = "";
    } else {
        tituloEl.innerText = `${hino.numero} - ${hino.titulo}`;
    }

    if (atual.tipo === "titulo") {
        versoEl.innerHTML = `
            <div class="linha titulo-grande">
                ${hino.numero} - ${hino.titulo}
            </div>
        `;
        ajustarTitulo();
    } else {
        versoEl.innerHTML =
            atual.linhas
                .map(linha => `<div class="linha">${linha}</div>`)
                .join("");

        ajustarTamanho();
    }

    if (atual.tipo === "titulo") {
        contadorEl.innerText = "";
    } else {
        const atualEstrofe = getIndiceEstrofeAtual();
        const totalEstrofes = getTotalEstrofes();

        contadorEl.innerText = `${atualEstrofe}/${totalEstrofes}`;
    }
}

document.addEventListener("keydown", (e) => {
    if(!sequencia.length) return;

    if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        indice++;
        if (indice >= sequencia.length) {
            indice = sequencia.length - 1;
        }
        render();
    }

    if (e.key ==="ArrowRight") {
        indice++;
        if (indice >= sequencia.length) indice = sequencia.length -1;
        render();
    }

    if (e.key === "ArrowLeft") {
        indice--;
        if (indice < 0) indice = 0;
        render();
    }
});

function fullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }

    document.addEventListener("fullscreenchange", () => {
        const btn = document.getElementById("btnFullscreen");

        if (document.fullscreenElement) {
            btn.innerText = "⛶";
        } else {
            btn.innerText = "⛶";
        }
    });
}

function montarSequencia(hino) {
    const lista = [];

    lista.push({
        tipo: "titulo",
        linhas: [hino.titulo]
    });

    hino.estrofes.forEach((estrofe) => {
        lista.push({
            tipo: "estrofe",
            linhas: estrofe
        });

        lista.push ({
            tipo: "refrao",
            linhas: hino.refrao
        });
    });
    return lista;
}

function ajustarTamanho() {
    const versoEl = document.getElementById("verso");

    let fontSize = 15;

    versoEl.style.fontSize = fontSize + "vw";

    while (versoEl.scrollHeight > versoEl.clientHeight && fontSize > 2) {
        fontSize -= 0.2;
        versoEl.style.fontSize = fontSize + "vw";
    }
}

function getIndiceEstrofeAtual() {
    let contador = 0;

    for (let i = 0; i <= indice; i++) {
        if (sequencia[i].tipo === "estrofe") {
            contador++;
        }
    }
    return contador;
}

function getTotalEstrofes() {
    return hino.estrofes.length
}

function ajustarTitulo() {
    const versoEl = document.getElementById("verso");

    let fontSize = 10;
    versoEl.style.fontSize = fontSize + "vw";

    let tentativa = 0;

    while (
        versoEl.scrollWidth > versoEl.clientWidth &&
        fontSize > 2 &&
        tentativa < 30
        ) {
        fontSize -= 0.3;
        versoEl.style.fontSize = fontSize + "vw";
        tentativa++;
    }
}

document.getElementById("btnBuscar")
    .addEventListener("click", buscar);

