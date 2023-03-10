function qs(etiqueta) {
    return document.querySelector(etiqueta)
}

function qsAll(etiqueta) {
    return document.querySelectorAll(etiqueta)
}

/*  
    a --> ai
    e --> enter
    i --> imes
    o --> ober
    u --> ufat

*/

window.addEventListener('load', () => {
    let texto = qs('#textarea');
    let botonEncriptar = qs("#encriptar");
    let botonDesencriptar = qs("#desencriptar");
    let resultadoTexto = qs(".resultado__inexistente")
    let alerta = qs("#alerta");
    let contenedorResultado = qs("#resultado__ok")
    let contenedorCopiar = qs(".contenedor__copiar")
    let textoResultado = qs("#texto")
    let botonCopiar = qs("#copy")


    console.log(texto);
    console.log(alerta);
    console.log(contenedorResultado);


    const mostrarResultado = (texto) => {
        resultadoTexto.style.display = "none";
        alerta.style.display = "none";
        textoResultado.style.display = "block"
        contenedorResultado.innerHTML = texto
        contenedorCopiar.classList.add("texto__resultado")
        contenedorResultado.classList.add("texto__p")
        contenedorCopiar.style.display = "block"
    }

    const encriptar = () => {
        let textoAEncriptar = texto.value.toLowerCase();
        textoAEncriptar = textoAEncriptar.replace(/e/img, "enter");
        textoAEncriptar = textoAEncriptar.replace(/o/img, "ober");
        textoAEncriptar = textoAEncriptar.replace(/i/img, "imes");
        textoAEncriptar = textoAEncriptar.replace(/a/img, "ai");
        textoAEncriptar = textoAEncriptar.replace(/u/img, "ufat");
        mostrarResultado(textoAEncriptar)
    }

    const desencriptar = () => {
        let textoAEncriptar = texto.value.toLowerCase();
        textoAEncriptar = textoAEncriptar.replace(/enter/img, "e");
        textoAEncriptar = textoAEncriptar.replace(/ober/img, "o");
        textoAEncriptar = textoAEncriptar.replace(/imes/img, "i");
        textoAEncriptar = textoAEncriptar.replace(/ai/img, "a");
        textoAEncriptar = textoAEncriptar.replace(/ufat/img, "u");
        mostrarResultado(textoAEncriptar)
    }


    const copiar = (str) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(str)
        }
        return Promise.reject("The Clipboard API is not available.");
    };

    botonEncriptar.addEventListener("click", () => {
        if (texto.value !== "") {
            encriptar()
        } else {
            alert("Ingrese un texto")
        }
    })

    botonDesencriptar.addEventListener("click", () => {
        if (texto.value !== "") {
            desencriptar()
        } else {
            alert("Ingrese un texto")
        }
    })

    botonCopiar.addEventListener('click', () => {
        copiar(contenedorResultado.value)
    })

})