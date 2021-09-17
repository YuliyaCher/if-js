const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const prop = props1[i];
    const areObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object';

    if ((!areObjects && (object1[prop] !== object2[prop]))
    || (areObjects && !deepEqual(object1[prop] && object2[prop]))) {
      return false;
    }
  }
  return true;
};
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
