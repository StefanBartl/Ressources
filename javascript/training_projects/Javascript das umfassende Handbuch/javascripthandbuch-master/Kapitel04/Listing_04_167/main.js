function logNames() {
  console.log(arguments); // Ausgabe: { '0': 'Max', '1': 'Moritz' }
  /* Fehler: arguments ist kein Array arguments.forEach(function(argument) {
	  console.log(argument);
	});
  */
}
logNames("Max", "Moritz");
