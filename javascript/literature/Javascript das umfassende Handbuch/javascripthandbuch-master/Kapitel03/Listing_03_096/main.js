'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Vor der Schleife.');
let i = 0; // Zählervariable initialisieren.
while(i < numbers.length) { // Iteriere über ...
  const number = numbers[i]; // ... das Zahlenarray.
  if (number % 2 === 1) { // Wenn eine Zahl ungerade ist ...
    console.log('Ungerade Zahl gefunden.'); // ... gebe Meldung aus ...
    break; // ... und breche die Schleife ab.
  } // Ansonsten ...
  console.log(number); // ... gebe die Zahl aus ...
  i++; // ... und erhöhe die Zählervariable.
}
console.log('Nach der Schleife.');