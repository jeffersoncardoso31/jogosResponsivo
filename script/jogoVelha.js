let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let squares = document.querySelectorAll('.cardJogoVelha');
let player = [];
let simbolos = ['X', 'O'];
let reiniciar = document.getElementById('reiniciarVelha');
let iniciar = document.querySelector('#enviarPlayer');
let jogador = []
let telaPreta = document.querySelector('.telaPreta');

iniciar.addEventListener('click',()=>{
    jogador = document.querySelectorAll('.players');
    let telaCentralizar = document.querySelector('#centralizarTela')
    if(jogador[0].value == '' || jogador[1].value == ''){
        alert('Preencha os dois Jogadores')  
    }else{
    player[0] = jogador[0].value
    player[1] = jogador[1].value
    telaPreta.style.display = 'none'
    telaCentralizar.style.display = 'none'
}
})

reiniciar.addEventListener('click',()=>{
    location.reload()
})

squares.forEach((square)=>{
    square.addEventListener('click', ondeClicou)
})

function ondeClicou(event){
    let square = event.target
    let posicao = square.id
    
    if(movimento(posicao)){
        let p = document.createElement('p')
        p.innerText = `${player[playerTime].toUpperCase()} VENCEU !!!`
        let ganhador = document.getElementById('ganhador')
        ganhador.appendChild(p)
        telaPreta.style.display = 'block'
        let resultado = document.querySelector('#resultado');
        resultado.style.display = 'block'
    }
    updateSquares(posicao)
}

function movimento(posicao){
    if(gameOver){
        return;
    }
    if(board[posicao] == ''){
        board[posicao] = simbolos[playerTime]

        gameOver = vitoria()
        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }
    return gameOver
}
function updateSquares(posicao){
    let square = document.getElementById(posicao.toString());
    let simbolo = board[posicao]
    square.innerHTML = `<p>${simbolo}</p>`
}
function vitoria(){
    let posVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < posVitoria.length; i++){
        let seq = posVitoria[i];
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]
       
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            
            return true
        }
    }
    return false
}


