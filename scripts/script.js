const display = document.getElementById('display')
const number = document.querySelectorAll('button')
const btn_color = document.getElementById('btn-color')
const operadores = ['+', '-', '/', 'x', '=', 'DEL', 'RESET']

const colores = ['#29ffc6','#74ebd5', '#667db6', '#29ffc6','#acb6e5', '#e1eec3', '#29ffc6', '#f05053', '#E2E2E2', '#22c1c3', '#fdbb2d', '#C9D6FF', '#d9a7c7', '#fffcdc']


let num1 = ''           // Primera selecion del usuario
let num2 = ''           // Segunda seleccion del usuario
let operador = '' 
let result = ''


const calcular = () => {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

   if (operador === '+') {
       result = num1 + num2
   } else if (operador === '-') {
       result = num1 - num2
   } else if (operador === '/') {
       result = num1 / num2
   } else if (operador === 'x')  {
       result = num1 * num2 
   } else {
       return
   }
    
    display.innerText = result
    num1 = result
    num2 = ''
}


number.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)

        const { innerText: numeros } = button
        const newOperador = operadores.includes(numeros)


        if (num1 && newOperador) {
            num2 && calcular()
            operador = numeros
        } 

        else if (!operador) {
            display.innerText = num1 += numeros 
        } 
        
        else if (operador) {
            display.innerText = num2 += numeros
        }

        else if (numeros !== '=') {
            display.innerText += numeros
        }

        if (numeros === 'RESET') {
            num1 = num2 = operador = ''
            return display.innerText = ''   
        } 
        
        else if (numeros === 'DEL') {
            display.innerText = display.innerText.slice(0, -1)
        }

        else if (numeros === '.' && num1.includes('.')) {
            return
        }

        if (!num2 && numeros === '=') return


        //  if (num1 === '.' && num2.includes('.')) return
    // console.log(newOperador)
    console.log(typeof numeros)
        
    })
     
})


// Cambio de color.
btn_color.addEventListener('click', () => {

    const body = document.querySelector('body')
    const random = colores[Math.floor(Math.random() * colores.length)]

    body.style.background = random

})




