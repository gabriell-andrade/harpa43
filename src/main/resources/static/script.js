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

    document.getElementById("titulo").innerHTML =
        `${hino.numero} - ${hino.titulo}`;

    document.getElementById("verso").innerHTML =
        atual.linhas
            .map(linha => `<div class="linha">${linha}</div>`)
            .join("");

    ajustarTamanho();
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
    document.documentElement.requestFullscreen();
}

function montarSequencia(hino) {
    const lista = [];

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

    const linhas = versoEl.children.length;

    if (linhas >= 5) {
        versoEl.style.fontSize = "5vw";
    } else if (linhas === 4) {
        versoEl.style.fontSize = "6vw";
    } else if (linhas === 3) {
        versoEl.style.fontSize = "8vw";
    } else {
        versoEl.style.fontSize = "10vw";
    }
}


document.getElementById("btnBuscar")
    .addEventListener("click", buscar);