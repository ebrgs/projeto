const bloco = document.querySelector(".bloco")
const mudar = document.querySelector(".btn_mudar")
const blocologin = document.querySelector(".bloco_login")
const blocoCadastro = document.querySelector(".bloco_cadastro")

function mudarCadastro() {
    mudar.addEventListener("click", () => {
        bloco.classList.toggle("mudar")
        blocologin.classList.toggle("mostrar")
        blocoCadastro.classList.toggle("mostrar")
    })
}
mudarCadastro()