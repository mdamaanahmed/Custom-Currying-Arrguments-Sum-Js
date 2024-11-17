function sum(...args) {
  function iterateRestArgs(...restArgs) {
    args = [...args, ...restArgs];
    if (args.length === 5) {
      return args.reduce((acc, item) => (acc += item), 0);
    } else {
      return iterateRestArgs;
    }
  }

  if (args.length === 5) {
    return args.reduce((acc, item) => (acc += item), 0);
  } else {
    return iterateRestArgs;
  }
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1, 2)(3)(4)(5));
