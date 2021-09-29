const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
      next() {
        if (this.current === undefined) {
          this.current = 0;
        }
        if (this.current < this.data.length) {
          return {
            done: false,
            value: this.data[this.current++],
          };
        }
        if (this.current === this.data.length) {
          this.current = 0;
          return this.next();
        };
      }
    };
const changeColorP = (item) => (event) => {
  event.target.style.color = (item).next().value;
};

const p = document.querySelectorAll('p');

p.forEach((item) => {
  const iter = colors[Symbol.iterator]();
  item.addEventListener('click', changeColorP(iter));
});
