function BMI() {
  let gewicht = document.querySelector("#gewicht").value;
  gewicht = parseFloat(gewicht);

  let grosse = document.querySelector("#grosse").value;
  grosse = parseFloat(grosse);

  grosse = grosse / 100;

  let BMI = gewicht / (grosse * grosse);

  BMI = BMI.toFixed(1);

  document.querySelector("#ausgabe").innerHTML = BMI + " BMI";
}
