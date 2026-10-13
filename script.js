
let curtiu = false;
let curtidas = 0;

const botao = document.getElementById("btnCurtir");
const quantidade = document.getElementById("quantidadeCurtidas");
const mensagem = document.getElementById("mensagem");
const publicacao = document.querySelector(".publicacao");

function alternarCurtida() {
    if (curtiu == false) {
        curtidas++;
        curtiu = true;

        botao.textContent = "Descurtir";
        mensagem.textContent = "Você curtiu esta publicação!";

        publicacao.classList.add("curtida");
        botao.classList.add("descurtir");
    } else {
        curtidas--;
        curtiu = false;

        botao.textContent = "Curtir";
        mensagem.textContent = "Você removeu sua curtida.";

        publicacao.classList.remove("curtida");
        botao.classList.remove("descurtir");
    }

    quantidade.textContent = curtidas;
}

botao.addEventListener("click", alternarCurtida);
