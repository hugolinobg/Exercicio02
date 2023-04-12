let students = [
  {
    name: "Letícia",
    firstNote: 8.5,
    secondNote: 8.0,
  },
  {
    name: "João",
    firstNote: 9.5,
    secondNote: 7.0,
  },
  {
    name: "Ana",
    firstNote: 7.5,
    secondNote: 5.0,
  },
  {
    name: "Pedro",
    firstNote: 6.5,
    secondNote: 7.5,
  },
  {
    name: "Maria",
    firstNote: 9.5,
    secondNote: 5.0,
  },
  {
    name: "Maycon",
    firstNote: 7.5,
    secondNote: 10,
  },
]

const calculateAverage = (student) => {
  let result = (student.firstNote + student.secondNote) / 2
  return result
}

for (let student of students) {
  let resultMenssage = calculateAverage(student)
  let average = resultMenssage >= 7

  if (average) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${resultMenssage} \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`
    )
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${resultMenssage} \nNão foi dessa vez, ${student.name}! Tente novamente!`
    )
  }
}
