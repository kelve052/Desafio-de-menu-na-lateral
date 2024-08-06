const btnSumir = document.getElementById('sumir')
const btnAparecer = document.getElementById('aparecer')
const menu = document.getElementById('menu')

const listaLabels = document.getElementsByClassName('labels')

btnSumir.addEventListener('click',(e)=>{
    
    for(c=0; c < listaLabels.length; c++){
        listaLabels[c].style.width = '0'
        listaLabels[c].style.color = 'transparent'
        menu.style.width = '70px'
        menu.style.paddingLeft = '4px'
    } 
    btnSumir.style.display = 'none'
    btnAparecer.style.display = 'block'
})

btnAparecer.addEventListener('click',(e)=>{
    document.getElementById('botao-fechar-menu').style.paddingLeft = '0px'
    for(c=0; c < listaLabels.length; c++){
        listaLabels[c].style.width = '100%'
        listaLabels[c].style.color = '#FFF'
        menu.style.width = '300px'
    }
    btnSumir.style.display = 'block'
    btnAparecer.style.display = 'none'
})