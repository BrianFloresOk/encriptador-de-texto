function qs (etiqueta) {
    return document.querySelector(etiqueta)
}

function qsAll (etiqueta) {
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



    console.log(texto);
    console.log(alerta);
    console.log(contenedorResultado);


    const mostrarResultado = (texto) => {
        resultadoTexto.style.display = "none";
        alerta.style.display = "none";
        contenedorResultado.innerHTML = texto
    }

    const encriptar = () => {
        let textoAEncriptar = texto.value.toLowerCase();
        textoAEncriptar = textoAEncriptar.replace(/e/i, "enter");
        textoAEncriptar = textoAEncriptar.replace(/i/i, "imes");
        textoAEncriptar = textoAEncriptar.replace(/o/i, "ober");
        textoAEncriptar = textoAEncriptar.replace(/a/i, "ai");
        textoAEncriptar = textoAEncriptar.replace(/u/i, "ufat");
        mostrarResultado(textoAEncriptar)
    }

    const desencriptar = () => {
        let textoAEncriptar = texto.value.toLowerCase();
        textoAEncriptar = textoAEncriptar.replace(/enter/i, "e");
        textoAEncriptar = textoAEncriptar.replace(/imes/i, "i");
        textoAEncriptar = textoAEncriptar.replace(/ober/i, "o");
        textoAEncriptar = textoAEncriptar.replace(/ai/i, "a");
        textoAEncriptar = textoAEncriptar.replace(/ufat/i, "u");
        mostrarResultado(textoAEncriptar)
    }

    botonEncriptar.addEventListener("click", () => {
        if(texto.value !== "") {
            encriptar()
        } else {
            alert("Ingrese un texto")
        }
    })

    botonDesencriptar.addEventListener("click", () => {
        if(texto.value !== "") {
            desencriptar()
        } else {
            alert("Ingrese un texto")
        }
    })

})