let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boot = document.getElementById('boot');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 1.5 + 'px';
    mountain4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boot.style.top = value + 'px';
    boot.style.left= value * 3 + 'px';
    nouvil.style.fontsize = value + 'px';
    if(scrollY >= 67){
        nouvil.style.fontsize = 67 + 'px';
        nouvil.style.position = fixed + 'px';
        if(scrollY >= 478){
            nouvil.style.display = 'none';
        }
        else{
            nouvil.style.display = 'block' ;
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f);'
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f);'
        }
    }
}




