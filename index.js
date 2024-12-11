const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const tempSlider = document.getElementById("tempSlider");

let temp;

textBox.addEventListener("input", () => {
    if (textBox.value === "0") {
        textBox.value = "0";
    }
});


function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)}°C`;
    } else {
        result.textContent = "Please select a unit to convert.";
    }
}

function updateSlider(value) {
    textBox.value = value;
    if (toFahrenheit.checked || toCelsius.checked) {
        convert();
    }
}
