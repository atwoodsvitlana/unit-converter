const convertBtn = document.getElementById("convert-btn");

const resultLength = document.getElementById("result-length");
const resultVolume = document.getElementById("result-volume");
const resultMass = document.getElementById("result-mass");
const input = document.getElementById("input");

convertBtn.addEventListener("click", () => {
  let userInput = Number(input.value);
  let feet = (userInput * 3.281).toFixed(3);
  let meter = (userInput / 3.281).toFixed(3);
  let liter = (userInput / 0.264).toFixed(3);
  let gallon = (userInput * 0.264).toFixed(3);
  let pound = (userInput * 2.204).toFixed(3);
  let kilo = (userInput / 2.204).toFixed(3);
  resultLength.innerText = `${userInput} meters = ${feet} feet | ${userInput} feet = ${meter} meters`;
  resultVolume.innerText = `${userInput} liters = ${gallon} gallons | ${userInput} gallons = ${liter} liters`;
  resultMass.innerText = `${userInput} kilos = ${pound} pounds | ${userInput} pounds = ${kilo} kilos`;
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
