let body = document.querySelector('body')
let arrElems = []

function createElem(){
    let tag = document.querySelector('.tag')
let text = document.querySelector('.text')
let elem = document.createElement(tag.value)
elem.textContent = text.value
body.appendChild(elem)
setTimeout(()=> body.removeChild(elem), 5000)
arrElems.push (elem)
console.log(arrElems)

}
function DeleteElem(){
    document.getElementById("remove").onclick = function() {
        var node = document.getElementById("register");
        node.parentNode.removeChild(node);
    }
}

let button = document.querySelector('.button')
button.addEventListener('click', createElem)
setInterval(()=> body.removeChild(arrElems[0]),5000)
