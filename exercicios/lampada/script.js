var btn = document.getElementById('clicker');
var lamp = document.getElementById('lamp');

btn.onclick = function(){
    if(btn.value === 'Acender'){
        lamp.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
        btn.value ='Apagar';
        btn.innerHTML = 'Apagar';
    }else {
        lamp.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
        btn.value = 'Acender'
        btn.innerHTML = 'Acender'
    }
}