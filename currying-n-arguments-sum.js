function nArgumentsSum(...args) {
  function iterateRestArgs(...restArgs) {
    args = [...args, ...restArgs];
    if (restArgs.length) {
      return iterateRestArgs;
    } else {
      return args.reduce((acc, item) => (acc += item), 0);
    }
  }

  if (args.length) {
    return iterateRestArgs;
  } else {
    return 0;
  }
}

console.log(nArgumentsSum(1, 2, 3, 4, 5)());
console.log(nArgumentsSum(1)(2, 3, 4, 5)());
console.log(nArgumentsSum(1, 2)(3)(4)(5)());
