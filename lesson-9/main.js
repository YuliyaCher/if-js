const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
};
  colors[Symbol.iterator] = function () {
    let current = 0;
    const { data } = this;
    let last = this.data.length;
    return {
      next() {
        if (current < last) {
          return {
          done: false,
          value: data[current++]
        };
      }
      current = 0;
          return {
            done: false,
            value: data[current++],
          };
        },
      };
    };
const changeColorP = (item) => (event) => {
  event.target.style.color = item.next().value;
};

const p = document.querySelectorAll('p');

p.forEach((item) => {
  const iter = colors[Symbol.iterator]();
  item.addEventListener('click', changeColorP(iter));
});
