const computerPlay = () => {
  const random = Math.floor(Math.random() * 3)
  return random == 0 ? 'rock' : random === 1 ? 'paper' : 'scissor'
}

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionInsensitive = playerSelection.toLowerCase()
  const computerSelectionInsensitive = computerSelection.toLowerCase()
  const whoWon = whoWins(
    playerSelectionInsensitive,
    computerSelectionInsensitive,
  )
  const firstUpperPlayer =
    playerSelectionInsensitive.charAt(0).toUpperCase() +
    playerSelectionInsensitive.slice(1)
  const firstUpperComputer =
    computerSelectionInsensitive.charAt(0).toUpperCase() +
    computerSelectionInsensitive.slice(1)
  if (whoWon === 'draw') {
    return 'Draw! Both players chose ' + firstUpperComputer + '.'
  } else if (whoWon === 'player') {
    return (
      'Player wins! ' + firstUpperPlayer + ' beats ' + firstUpperComputer + '.'
    )
  } else if (whoWon === 'computer') {
    return (
      'Computer wins! ' +
      firstUpperComputer +
      ' beats ' +
      firstUpperPlayer +
      '.'
    )
  }
}

const whoWins = (playerSelection, computerSelection) => {
  const playerSelectionInsensitive = playerSelection.toLowerCase()
  const computerSelectionInsensitive = computerSelection.toLowerCase()

  if (playerSelectionInsensitive === 'rock') {
    switch (computerSelectionInsensitive) {
      case 'rock':
        return 'draw'
      case 'paper':
        return 'computer'
      case 'scissor':
        return 'player'
    }
  } else if (playerSelectionInsensitive === 'paper') {
    switch (computerSelectionInsensitive) {
      case 'rock':
        return 'player'
      case 'paper':
        return 'draw'
      case 'scissor':
        return 'computer'
    }
  } else if (playerSelectionInsensitive === 'scissor') {
    switch (computerSelectionInsensitive) {
      case 'rock':
        return 'computer'
      case 'paper':
        return 'player'
      case 'scissor':
        return 'draw'
    }
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('What do you chose?')
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }
}

game()
