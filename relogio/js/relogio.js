//Dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//Eventos

setInterval(relogio, 1000)


//Função

function relogio() {
    hoje = new Date()

    hr = hoje.getHours()
    min = hoje.getMinutes()
    seg = hoje.getSeconds()

    if(seg < 10) {
        seg = '0' + seg
    }

    if(min < 10) {
        min = '0' + min
    }

    if(hr < 10) {
        hr = '0' + hr
    }
    
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}
