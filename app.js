'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const ul = GI.createElement('ul')
document.body.appendChild(ul)
to_do.forEach(item=>{
    const li = GI.createElement('li')
    const checkbox = GI.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', item)
    
    checkbox.addEventListener('change', ()=>{
       if(checkbox.checked){
        checkbox.classList.add('text-checked') 
       } else checkbox.classList.remove('text-checked')
    })
    ul.appendChild(li)
    ul.appendChild(checkbox)
    li.innerHTML = li.innerHTML + item
})
