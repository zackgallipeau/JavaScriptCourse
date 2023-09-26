// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [5, 16, -3, -1, 14, -12, -30, 28];

let minTemperature = temperatures[0];
let maxTemperature = temperatures[0];
let tempAmplitude;

function calcTempAmplitude(temp1, temp2) {
  let allTemp = temp1.concat(temp2);
  for (let i = 0; i < allTemp.length; i++) {
    if (isNaN(allTemp[i])) {
      i++;
    }
    if (allTemp[i] > maxTemperature) {
      maxTemperature = allTemp[i];
    } else if (allTemp[i] < minTemperature) {
      minTemperature = allTemp[i];
    }
  }
  return (tempAmplitude = maxTemperature - minTemperature);
}

calcTempAmplitude(temperatures, temperatures2);
console.log(maxTemperature);
console.log(minTemperature);
console.log(tempAmplitude);
