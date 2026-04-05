let hino = null;
let indice = 0;

async function buscar() {

    const numero = document.getElementById("numero").value;

    const res = await fetch(`/hinos/${numero}`);

    if (!res.ok) {
        alert("Hino não encontrado");
        return;
    }

    hino = await res.json();

    indice = 0;
    render();
}

function render() {
    document.getElementById("titulo").innerText =
        `${hino.numero} - ${hino.titulo}`;

    document.getElementById("verso").innerText =
        hino.versos[indice];
}

document.addEventListener("keydown", (e) => {
    if(!hino) return;

    if (e.key === " " || e.key === "Spacebar") {
        indice++;
        if (indice >= hino.versos.length) {
            indice = hinos.versos.length - 1;
        }
    }

    if (e.key ==="ArrowRight") {
        indice++;
        if (indice >= hino.versos.length) indice = hino.versos.length -1;
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


document.getElementById("btnBuscar")
    .addEventListener("click", buscar);