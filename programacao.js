    let cliques1 = 0;
    let cliques2 = 0;
    let cliques3 = 0;
    let numero = '';
    let numero2 = '';
    let operadores = ['+', '-', '*', '=', '/', '÷'];
    if (cliques1== 0) {
        numero = '';
    }
    
    function CliqueNumero(digitoaqui) {
        EfeitoSonoro();
        var digito = document.getElementById(digitoaqui);
        digito = String(digitoaqui).slice(-1);
        if (cliques1>= 1) {
            numero += digito;
            document.getElementById("OutPut").innerHTML = numero
            cliques3++;
        } else {
            numero = digito;
            document.getElementById("OutPut").innerHTML = numero
            cliques1++;
        }

        
        if (cliques1 > 10 || cliques3 > 10 || numero.trim().length >= 15) {
            numero = '';
            document.getElementById("OutPut").innerHTML = '<font size="6">Número grande!'
            cliques1= 0;
            cliques2 = 0;
            cliques3 = 0;
        }
        if (numero.startsWith('0')) {
            numero = '';
            cliques1= 0;
            cliques2 = 0;
            cliques3 = 0;
            document.getElementById("OutPut").innerHTML = ''
        }
        /*console.log('Cliques1: ', cliques1)*/
        /*console.log('Cliques3: ', cliques3)*/

    }
    let operacao = '';
    function Operacoes(operacaoaqui) {
        EfeitoSonoro();
        let d_operacao = document.getElementById(operacaoaqui);
        operacao = String(operacaoaqui).split('_')[1]
        if (operacao == 'mais') {
            operacao = '+';
            document.getElementById("OutPut").innerHTML = '+'
        }
        if (operacao == 'menos') {
            operacao = '-';
            document.getElementById("OutPut").innerHTML = '-'
        }
        if (operacao == 'multiplicacao') {
            operacao = '*';
            document.getElementById("OutPut").innerHTML = '*'
        }
        if (operacao == 'divisao') {
            operacao = '/';
            document.getElementById("OutPut").innerHTML = '÷'
        }

        cliques2++;
        numero = (`${numero} ${operacao} ${numero2}`) // .trim() é mesma coisa do .strip() em python, tira os espaços em branco atrás e na frente
        /*console.log('cliques2: ', cliques2)*/
        let doisSimbolos = /\D{2,}/g // Expressão regular para verificar se tem 2 simbolos seguidos --> "/" delimita a expressão | \D qualquer simbolo | {2,} dois ou mais simbolos | "/g" verifica na string inteira
        let doisNumeros = /\d{2}/
        let expErradaParticionada = numero.split(' ')[0] + (` ${operacao}  ${operacao}`)
        if (expErradaParticionada == numero.trim()) {
            document.getElementById("OutPut").innerHTML = '<font size="6">Dígito Inválido!'
            AudioErro();
            numero = '';
            cliques1 = 0;
            cliques2 = 0;
            cliques3 = 0;
        }
        if (doisSimbolos.test(numero) == true && doisNumeros.test(numero) == false && (numero.split(' ')[0] + operacao) == false){ // .test() irá testar e retornar true or false
            document.getElementById("OutPut").innerHTML = '<font size="6">Dígito Inválido!' // numero.split(' ')[0] vai pegar o numero e somar com o operador, se for false vai dar erro
            AudioErro();
            numero = '';
            cliques1 = 0;
            cliques2 = 0;
            cliques3 = 0;
        }


        
        
    }
    function ResultadoOperacao(){
        for (i = 0; i < numero.length; i++) {
            let ANumeros = /(.)/g
            let Lnumero = numero.trim().match(ANumeros)
            for (x = 0; x < 6; x++) {
                if (String(Lnumero).endsWith(operadores[x])){
                    document.getElementById("OutPut").innerHTML = '<font size="6">Dígito Inválido!'
                    AudioErro();
                    numero = '';
                    cliques1 = 0;
                    cliques2 = 0;
                    cliques3 = 0;
                }
            }
        }
        EfeitoSonoro();
        if (cliques1>= 1 && cliques3 >= 1) {
            
            let resultado = eval(numero) // eval() interpreta a string como uma expressão matemática
            let resultPVirgula = String(resultado).split('.')[1]
            if (String(resultPVirgula).length > 10) {
                document.getElementById("OutPut").innerHTML = resultado.toFixed(10)
            } else {
                document.getElementById("OutPut").innerHTML = resultado
            }
            cliques1 = 0;
            cliques2 = 0;
            cliques3 = 0;
        }

    }
    function LimparDigitos(){
        EfeitoSonoro();
        numero = '';
        cliques1 = 0;
        cliques2 = 0;
        cliques3 = 0;
        document.getElementById("OutPut").innerHTML = ''
    }

    function aumentarImgDigitos(digitoaqui) {
        const Digito = document.getElementById(digitoaqui);
        Digito.style.transform = 'scale(1.04)';
    }
    function reduzirImgDigito(digitoaqui) {
        const Digito = document.getElementById(digitoaqui);
        Digito.style.transform = 'scale(1)';
    }

    function EfeitoSonoro(){
        var efeito_sonoro = new Audio('audios/audioCurtoEditado.m4a');
        efeito_sonoro.play()
    }
    function AudioErro() {
        var audio_erro = new Audio('audios/audioErro.m4a');
        audio_erro.play();
    }
    const imagens = document.querySelectorAll('img'); // cria uma variável constante (não muda) para pegar todas tags <img>
    for (i = 0; i < imagens.length; i++) { // loop para iterar sobre cada imagem.
        imagens[i].draggable = false; // .draggable é um atributo para configurar se algo é arrastável ou não.
    }


document.addEventListener('DOMContentLoaded', () => { // Para remover a marca d'água do 000WebHost
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
   if(disclaimer){
       disclaimer.remove();
   }  
 });document.addEventListener('DOMContentLoaded', () => {
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
   if(disclaimer){
       disclaimer.remove();
   }  
 });