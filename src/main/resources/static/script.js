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

    const atual = sequencia[indice];

    console.log("slide atual: ", atual);

    document.getElementById("titulo").innerHTML =
        `${hino.numero} - ${hino.titulo}`;

    document.getElementById("verso").innerHTML =
        atual.linhas.join("<br>");
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


document.getElementById("btnBuscar")
    .addEventListener("click", buscar);