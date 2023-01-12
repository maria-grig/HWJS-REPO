"use strict";

// Задача № 1.1

function solveEquation(a, b, c) {
  let arr;

  arr = [];
  let d = (b**2-4*a*c);
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  if (d === 0){
    arr.push(-b/(2*a));
  }
  return arr;
}