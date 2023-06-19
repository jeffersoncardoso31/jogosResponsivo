let btn = document.getElementById('iconMenu')

btn.addEventListener('click',(e)=>{
    let links = document.querySelector('.menuMobile')
    let btnMenu = e.target
    if(btnMenu.innerText == 'menu'){
        links.style.left = '0'
        btnMenu.innerText = 'close'
    }else{
        links.style.left = '-920px'
        btnMenu.innerText = 'menu'
    }
})