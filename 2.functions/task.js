"use strict";

// Задание 1

function getArrayParams(arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] < min)
    {
      min = arr[i]
    }
    if (arr[i] > max){
      max = arr[i]
    }
      sum += arr[i];
  }
    let avg = sum / arr.length;
    return { min: min, max: max, avg: Number (avg.toFixed(2)) };
}