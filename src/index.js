var setaEsquerda = document.getElementById('seta-esquerda')
var leonardo = document.getElementById('depoimentoleonardo')
var samantha = document.getElementById('depoimentosamantha')
var bruna = document.getElementById('depoimentobruna')
var setaDireita = document.getElementById('seta-direita')

function RolarParaDireita() {
  setaEsquerda.style.color = "#EAECE5"
  setaEsquerda.style.cursor = "pointer"
  leonardo.style = "display:none"
  bruna.style = "display:flex"
  setaDireita.style.color = "#247BA0"
  setaDireita.style.cursor = "default"
}

function rolarParaEsquerda() {
  setaEsquerda.style = "color: #247BA0"
  setaEsquerda.style.cursor = "default"
  leonardo.style = "display: flex"
  bruna.style = "display: none"
  setaDireita.style = "color #EAECE5"
  setaDireita.style.cursor = "pointer"
}
