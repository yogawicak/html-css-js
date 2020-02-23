

const p4 = document.querySelectorAll('#b p')[0];
p4.style.backgroundColor = 'orange';

let li2 = document.querySelector('li:nth-child(2)')
li2.style.backgroundColor = 'cyan'

let blockSectionB = document.getElementById('b');
var li1 = blockSectionB.getElementsByTagName('li')[0]
li1.innerHTML = 'Diganti dari Dom'

let blockSectionA = document.getElementById('a');
var p1 = blockSectionA.getElementsByTagName('p')[0]
p1.classList.add('label')
p1.classList.toggle('label2',true)

function bikinElementButtonSecA(element,text) {
    let a = document.createElement(element);
    let b = document.createTextNode(text);
    a.appendChild(b);
    let c = blockSectionA;
    c.appendChild(a);
}

function insertElementSecA() {
    //cari node childnya
    let node = blockSectionA.getElementsByTagName('p')[2];
    //bikin elemen baru
    let a = document.createElement('p');
    let b = document.createTextNode('Paragraf tambahan DOM');
    a.appendChild(b)
    blockSectionA.insertBefore(a, node);
    return `anda berhasil menambahkan element`;
}

bikinElementButtonSecA('button','add list baru');

function over() {
    let a = document.getElementsByTagName('h1')[0]
    a.innerHTML = 'mouseover event dom'
}
function out() {
    document.getElementsByTagName('h1')[0].innerHTML = 'Hello World'
}


function createNewListSecA() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let node = blockSectionA.getElementsByTagName('button')[0];
    ul.appendChild(li)
    li.innerHTML = 'new list from dom when click button'
    blockSectionA.insertBefore(ul,node)
};

document.getElementsByTagName('button')[0].addEventListener('click',() => createNewListSecA())