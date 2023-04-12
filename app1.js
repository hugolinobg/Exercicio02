let firstNumber = prompt("Digita o primeiro número")
let secondNumber = prompt("Digita o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber, secondNumber) => {
  let result = firstNumber + secondNumber
  return result
}

const subtraction = (firstNumber, secondNumber) => {
  let result = firstNumber - secondNumber
  return result
}

const multiplication = (firstNumber, secondNumber) => {
  let result = firstNumber * secondNumber
  return result
}

const division = (firstNumber, secondNumber) => {
  let result = firstNumber / secondNumber
  return result
}

const restOfDivision = (firstNumber, secondNumber) => {
  let result = firstNumber % secondNumber
  return result
}

alert(`A soma dos dois números: ${sum(firstNumber, secondNumber)}`)

alert(`A subtração dos dois números: ${subtraction(firstNumber, secondNumber)}`)

alert(
  `A multiplicação dos dois números: ${multiplication(
    firstNumber,
    secondNumber
  )}`
)

alert(`A divisão dos dois números: ${division(firstNumber, secondNumber)}`)

alert(
  `O resto da divisão dos dois números: ${restOfDivision(
    firstNumber,
    secondNumber
  )}`
)

if (restOfDivision == 0) {
  alert(
    `Verifique se a soma dos dois números é par: ${sum(
      firstNumber,
      secondNumber
    )}`
  )
} else {
  alert(
    `Verifique se a soma dos dois números é ímpar: ${sum(
      firstNumber,
      secondNumber
    )}`
  )
}

if (firstNumber === secondNumber) {
  alert(`Verifique se os dois números inseridos são Iguais`)
} else {
  alert(`Verifique se os dois números inseridos são Diferentes`)
}
