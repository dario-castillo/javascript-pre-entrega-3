const tipoDibujo = [
    {estilo: 'Dibujo a lápiz'},
    {estilo: 'Ilustración en acrílico'},
    {estilo: 'Ilustración al óleo'},
    {estilo: 'Ilustración digital'},
    {estilo: 'Retrato a lápiz'},
    {estilo: 'Paisaje al óleo'},
]

const formuNombre = document.querySelector("#nombre")
const formuEdad = document.querySelector("#edad")
const formuTipoDibujo = document.querySelector("#tipoDibujo")
const formuEmail = document.querySelector("#email")
const dibujoPedido = document.querySelector("span#dibujoPedido")


function cargarTipoDibujo() {
    if (tipoDibujo.length > 0) {
        tipoDibujo.forEach((dibujo)=> {
            formuTipoDibujo.innerHTML += `<option>${dibujo.estilo}</option>`
        })
    }
}
cargarTipoDibujo()

const botonEnviar = document.querySelector("button#botonEnviar")

function recuperarDatosFormu() {
    formuNombre.value = localStorage.getItem("nombre")
    formuEdad.value = localStorage.getItem("edad")
    formuTipoDibujo.value = localStorage.getItem("dibujo")
    formuEmail.value = localStorage.getItem("email")
}
recuperarDatosFormu()

function guardarFormuDibujos() {
    const datosPedidosDibujos = {
        nombre: formuNombre.value,
        edad: formuEdad.value,
        dibujo: formuTipoDibujo.value,
        email: formuEmail.value
    }
    localStorage.setItem("formuDibujos", JSON.stringify(datosPedidosDibujos))

    dibujoPedido.innerText = datosPedidosDibujos.dibujo

    console.log(datosPedidosDibujos)
}

botonEnviar.addEventListener("mousemove",()=> botonEnviar.title = "Presiona para enviar")
botonEnviar.addEventListener("click", guardarFormuDibujos)