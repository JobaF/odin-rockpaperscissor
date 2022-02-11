const computerPlay = () => {
  const random = Math.floor(Math.random() * 3)
  return random == 0 ? 'Rock' : random === 1 ? 'Paper' : 'Scissor'
}

console.log(computerPlay)
