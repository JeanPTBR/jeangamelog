const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "ç", "ã", "õ", "á"
]

function Escrever() {
    let nome = document.getElementById("nome").value
    let escrever_nome = ""
    for (x = 0; x < nome.length; x++) {
        let letra_nome = nome[x]
        for (i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] == nome[x]) {
            escrever_nome += alfabeto[i]
        }
        if (nome[x] === " ") {
            escrever_nome += " "
        }
        }
    }
    let escrever_nome_formatado = ""
    escrever_nome = escrever_nome.split(" ").filter(item => item !== "") // Para filtrar cada item da lista e tirar os espaços
    for (sobrenome = 0; sobrenome < escrever_nome.length; sobrenome++) {
        escrever_nome_formatado += " " + escrever_nome[sobrenome]
    }
    alert(`Escrevendo o nome com array (n sei pra q kkk):\n${escrever_nome_formatado}`)
}
