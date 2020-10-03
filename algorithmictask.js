// //88 a) b) 80.	Дано натуральное число n.
// а) Выяснить, входить ли цифра 3 в запись числа n 2
const num = Math.floor(Math.random() * 100);
const ss = (arg) => {
  let arg2 = arg * arg;
  return arg2 % 10 == 3;
};
console.log("Чи входить число в запис числа n2", ss(num));
// б) Поменять порядок цифр числа n на обратный.
const reverseNum = (arg) => {
  arg = arg + "";
  return arg.split("").reverse().join("");
};
console.log("Зміна порядку числа", reverseNum(num));

const maxDivider = () => {};
//322 Найти натуральное число от 1 до 10 000 с максимальной суммой делителей.
const bigNum = Math.floor(Math.random() * 10000);
function listDivisors(n) {
  let small = [];
  let large = [];
  const end = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= end; i++) {
    if (n % i == 0) {
      small.push(i);
      if (i * i != n) large.push(n / i);
    }
  }
  large.reverse();
  return small.concat(large);
}
console.log("Максимальна сума дільників", listDivisors(bigNum));
