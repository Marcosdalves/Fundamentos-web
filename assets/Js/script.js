var nome = document.querySelector('#nome') //busca um elemento que está no html que esta dentro do imput e é um id/*
var okNome = false

function validarNome(){
    
    
    let txtNome = document.getElementById('txtNome')
        if(nome.value.length < 3){
           // alert('Olá Mundo!')//
            txtNome.innerHTML = 'Nome inválido'
            txtNome.style.color = 'red'
            okNome = false
        }else{
            txtNome.innerHTML ='Ok, continue.'
            txtNome.style.color = 'blue'
            okNome = true
        }
    }

function enviar(){
    if(okNome == true){
        alert('Mensagem enviada com sucesso')
    }else{
        alert('Preencha corretamente.')


    }




}