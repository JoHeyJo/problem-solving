
function coords(a, b, c, d, res=[]) {

  if (a > c || b > d) return false;
  if (a === c && b === d) return true;

  let eval_a = a + b;
  let eval_b = a + b;

  let trans1 = coords(eval_a, b, c, d, res);
  let trans2 = coords(a, eval_b, c, d, res);


  return trans1 || trans2
}



console.log(coords(1,2,3,6))