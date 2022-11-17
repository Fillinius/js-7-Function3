function getDivisors(number = 1) {
  if (!Number.isInteger(number) || number < 1) {
    alert(`${number} должен быть целым числом и больше нуля!`)
    return
  }

  let half = Math.floor(number / 2),
    count = 1
  for (let i = 1; i <= half; i++) {
    if (!(number % i)) ++count
  }

  return count
}
console.log(getDivisors(0))
console.log(getDivisors(-1))
console.log(getDivisors(0.1))
console.log(getDivisors(4)) //  = 3  // 1, 2, 4
console.log(getDivisors(5)) //   = 2  // 1, 5
console.log(getDivisors(12)) //  = 6  // 1, 2, 3, 4, 6, 12
console.log(getDivisors(30)) //  = 8  // 1, 2, 3, 5, 6, 10, 15, 30
