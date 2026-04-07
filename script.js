const screenValue = document.querySelector(".input-box");
const cel_fah = document.getElementById("cel-fah");
const fah_cel = document.getElementById("fah-cel");
const conversionResult = document.querySelector(".conversionResult");

function convert() {
  if (screenValue.value === "" && (cel_fah.checked || fah_cel.checked)) {
    screenValue.classList.add("no-input");
    screenValue.placeholder = "Space cannot be empty";
  } else {
    let result;

    if (cel_fah.checked) {
      result = celciusToFahrenheit();
      conversionResult.innerHTML = `${result.toFixed(2)}°F`;
    } else if (fah_cel.checked) {
      result = fahrenheitToCelcius();
      conversionResult.innerHTML = `${result.toFixed(2)}°C`;
    }
  }
}

screenValue.addEventListener("input", () => {
  conversionResult.innerHTML = "";
});

screenValue.addEventListener("click", () => {
  screenValue.classList.remove("no-input");
  screenValue.placeholder = "";
});

function celciusToFahrenheit() {
  const num = Number(screenValue.value);
  const result = num * (9 / 5) + 32;

  return result;
}

function fahrenheitToCelcius() {
  const num = Number(screenValue.value);
  const result = (num - 32) * (5 / 9);

  return result;
}
