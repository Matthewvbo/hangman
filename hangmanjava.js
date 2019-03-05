let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const chooseLetter = _ => alphabet[Math.floor(Math.random() * alphabet.length)]

const chosenLetter = chooseLetter()

document.onkeydown = event => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (event.key === chosenLetter) {
      alert('you win')
    } else {
      alert('wrong')
    }
  }
}
