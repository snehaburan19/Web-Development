var h2=document.querySelector('h2');
var box=document.querySelector('#box');
var btn=document.querySelector('button');

let arr = ['CSK', 'RCB', 'KXIP', 'MI', 'KKR', 'SRH', 'GT', 'DD', 'RR']

btn.addEventListener('click', function(){
    let num=Math.floor(Math.random()*arr.length)
    h2.innerHTML='${arr[num]}';
    h2.style.color='black';
    console.log(arr[num]);
})

var box=document.querySelector('#box');
var btn=document.querySelector('button');

function changebg(){

    var c1 = Math.floor(Math.random()*256);

    var c2 = Math.floor(Math.random()*256);

    var c3 = Math.floor(Math.random()*256);
    
    console.log(c1,c2,c3);

    box.style.backgroundColor='rgb(${c1} ${c2} ${c3})';
}

btn.addEventListener('click', changebg);