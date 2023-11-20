function iniciar() {

setInterval(()=>{const horario = new Date()

const hora = horario.getHours()
const minutos = horario.getMinutes()
const segundos = horario.getSeconds()

const horaCompleta = `${hora}:${minutos}:${segundos}`

const divHorario = document.getElementById('horario').innerText = horaCompleta

})
}

function checar(){
    const velocidade = document.getElementById('velocidade').value
    const velocidadeMaxima = 80
    document.getElementById('velocidade-atual').innerText = `VELOCIDADE ATUAL: ${velocidade} Km/h`

    if ( velocidade > velocidadeMaxima) {
        document.getElementById('alerta').innerText = 'Velocidade maxima ultrapassada!'
    } 
    
}

function limpar(){
    document.getElementById('velocidade').value = ``
    document.getElementById('velocidade-atual').innerText= ``
    document.getElementById('alerta').innerText = ``
}
