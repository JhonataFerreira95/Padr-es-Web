const imagembotatrocadetema = document.querySelector(".botao-alterar-tema");
const botaoalterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");


botaoalterartema.addEventListener("click", () => {
    const modoescuroestaativo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")
console.log("aqui");
    if (modoescuroestaativo) {
        imagembotatrocadetema.setAttribute("src", "./black-hole.svg")
    } else {
        imagembotatrocadetema.setAttribute("src", "./black-hole (1).svg")
    }
});


const btn = document.getElementById("botao");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");

btn.addEventListener("click", () => {
    const adventurerName = input.value;
    h3.innerText = `Hello ${adventurerName}, are you ready to grind in hystria ruins?`;
});