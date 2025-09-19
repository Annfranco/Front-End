const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

botao.addEventListener('click', gerador)
url.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        gerador()
    }
})

function gerador() {
    texto = url.value 
    if(texto){
        qr.innerHTML = '' //deixa a div vazia
        code = new QRCode(qr,{
            text:texto, 
            width:200,
            height:200, 
            colorDark: 'rgba(0,0,0,0)',
            colorLight: 'black'
        }   
        ) // objeto da biblioteca que permite a criação do qrcode
    }else{
        qr.innerHTML = '' //limpa tela
    }
}

