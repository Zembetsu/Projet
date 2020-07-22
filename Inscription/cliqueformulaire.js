const send = (event) => {
    event.preventDefault()
    for(let i = 0; i < 5; i++)
        console.log(event.target[i].value)
    }

document.querySelector('#monForm').addEventListener('submit', send)
