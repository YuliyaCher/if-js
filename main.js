// Напишите функцию sum, которая возвращает сумму чисел
function sum(a) {
  return function (b) {
      return a + b;
  };
}
console.log(sum(2)(3));



// Покрасьте абзацы по клику
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const p = document.querySelectorAll('p');
function changeColor() {
  let i = 0;
  return function (e) {
    e.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
    i = 0;
    }
  };
};

p.forEach((item) => {
  const color = changeColor();
  item.addEventListener('click', color);
  });
