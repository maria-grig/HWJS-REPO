"use strict";

// Задача № 1.1

function solveEquation(a, b, c) {
  let radical = [];

  let d = (b**2-4*a*c);
  if (d > 0){
    radical.push((-b + Math.sqrt(d) )/(2*a));
    radical.push((-b - Math.sqrt(d) )/(2*a));
  }
  if (d === 0){
    radical.push(-b/(2*a));
  }
  return radical;
}