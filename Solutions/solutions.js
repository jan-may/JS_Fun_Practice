const identity = (x) => x;
const addb = (a, b) => a + b;
const subb = (a, b) => a - b;
const mulb = (a, b) => a * b;
const minb = (a, b) => (a < b ? a : b);
const maxb = (a, b) => (a > b ? a : b);
const add = (...nums) => nums.reduce((a, b) => a + b);
const sub = (...nums) => nums.reduce((a, b) => a - b);
const mul = (...nums) => nums.reduce((a, b) => a * b);
const min = (...nums) => nums.reduce((a, b) => (a < b ? a : b));
const max = (...nums) => nums.reduce((a, b) => (a > b ? a : b));

const addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums[0] + addRecurse(...nums.slice(1));
};

const mulRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums[0] * mulRecurse(...nums.slice(1));
};

const minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums[0] < minRecurse(...nums.slice(1)) ? nums[0] : minRecurse(...nums.slice(1));
};

const maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums[0] > maxRecurse(...nums.slice(1)) ? nums[0] : maxRecurse(...nums.slice(1));
};

const not = (fn) => {
  return (...args) => !fn(...args);
};

const acc = (fn, initial) => {
  return (...args) => {
    return args.length === 0 ? initial : fn(args[0], acc(fn, initial)(...args.slice(1)));
  };
};

const fill = (n) => new Array(n).fill(n);
const set = (...args) => {
  // return [...new Set(args)];
  let arr = [];
  args.forEach((arg) => {
    if (arr.indexOf(arg) === -1) arr.push(arg);
  });
  return arr;
};
const identityf = (x) => () => x;

const addf = (a) => (b) => a + b;

const liftf = (fn) => (a) => (b) => fn(a, b);

const pure = (x, y) => {
  let arr = [];
  y++;
  arr.push(y);
  arr.push(x * y);
  return arr;
};

const inc = (x) => ++x;

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  //   accPartial,
  // accRecurse,
  fill,
  // fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  //   curryb,
  //   curry,
  inc,
  //   twiceUnary,
  //   doubl,
  //   square,
  //   twice,
  //   reverseb,
  //   reverse,
  //   composeuTwo,
  //   composeu,
  //   composeb,
  //   composeTwo,
  //   compose,
  //   limitb,
  //   limit,
  //   genFrom,
  //   genTo,
  //   genFromTo,
  //   elementGen,
  //   element,
  //   collect,
  //   filter,
  //   filterTail,
  //   concatTwo,
  //   concat,
  //   concatTail,
  //   gensymf,
  //   gensymff,
  //   fibonaccif,
  //   counter,
  //   revocableb,
  //   revocable,
  //   extract,
  //   m,
  //   addmTwo,
  //   addm,
  //   liftmbM,
  //   liftmb,
  //   liftm,
  //   exp,
  //   expn,
  //   addg,
  //   liftg,
  //   arrayg,
  //   continuizeu,
  //   continuize,
  //   vector,
  //   exploitVector,
  //   vectorSafe,
  //   pubsub,
  //   mapRecurse,
  //   filterRecurse,
};
