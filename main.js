const griffe_droite = document.querySelector('#griffe_droite');
const griffe_gauche = document.querySelector('#griffe_gauche');

const login = document.querySelector('.link.first');
const register = document.querySelector('.link.second');


login.addEventListener("mouseenter", ()=>{
    griffe_gauche.classList.add('active');
})
login.addEventListener("mouseleave", ()=>{
    griffe_gauche.classList.remove('active');
})

register.addEventListener("mouseenter", ()=>{
    griffe_droite.classList.add('active');
})
register.addEventListener("mouseleave", ()=>{
    griffe_droite.classList.remove('active');
})

