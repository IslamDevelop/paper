
const choice = ['камень','ножницы','бумага'];

function computerSelection () {

    const index = Math.floor(Math.random() * 3);
    return choice[index];
    }
    let computer = computerSelection()
    console.log(computer);
 
    const button = document.querySelector('#one')
    const button2 = document.querySelector('#two')
    const button3 = document.querySelector('#three')
    let playerSelection = ""
    
    function game (playerSelection, computer) {
        if ((playerSelection === "камень" && computer === "ножницы") || 
        (playerSelection === "ножницы" && computer === "бумага") || 
        (playerSelection === "бумага" && computer === "камень")
    ) {
        return "Победа"
    } else {
        return "Проигрыш"
    }
}
function buttons () {
    playerSelection = choice[0]
    computer = computerSelection()
    console.log(playerSelection)
    return alert(`Вы выбрали камень \nПротивник выбрал ${computer} \n${game(playerSelection,computer)}`)
}
button.addEventListener('click', buttons)

function buttons1 () {
    playerSelection = choice[1]
    computer = computerSelection()
    console.log(playerSelection)
    return alert(`Вы выбрали ножницы \nПротивник выбрал ${computer} \n${game(playerSelection,computer)}`)
}
button2.addEventListener('click', buttons1)

function buttons2 () {
    playerSelection = choice[2]
    computer = computerSelection()
    console.log(playerSelection)
    return alert(`Вы выбрали бумагу \nПротивник выбрал ${computer} \n${game(playerSelection,computer)}`)
}
button3.addEventListener('click', buttons2)


