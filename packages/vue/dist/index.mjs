const t = "1111", c = "2222";
function f() {
  console.log("fn");
}
function e(n, o) {
  return n + o;
}
export {
  t as a,
  e as add,
  c as b,
  f as fn
};
