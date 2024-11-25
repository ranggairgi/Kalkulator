let display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "0";
}

function backspace() {
  const currentText = display.textContent.replace(/,/g, ""); // Hilangkan koma sebelum manipulasi
  const updatedText = currentText.slice(0, -1) || "0";
  display.textContent = formatNumber(updatedText);
}

function appendNumber(number) {
  const currentText = display.textContent.replace(/,/g, ""); // Hilangkan koma sebelum manipulasi
  if (currentText === "0") {
    display.textContent = formatNumber(number);
  } else {
    display.textContent = formatNumber(currentText + number);
  }
}

function appendOperator(operator) {
  const currentText = display.textContent.replace(/,/g, ""); // Hilangkan koma sebelum manipulasi
  const lastChar = currentText.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.textContent = formatNumber(currentText.slice(0, -1)) + operator;
  } else {
    display.textContent = formatNumber(currentText) + operator;
  }
}

function calculate() {
  try {
    const result = eval(display.textContent.replace(/,/g, "").replace("÷", "/").replace("×", "*"));
    display.textContent = formatNumber(result.toString());
  } catch (error) {
    display.textContent = "Error";
  }
}

// Fungsi untuk memformat angka dengan pemisah ribuan
function formatNumber(value) {
  if (isNaN(value)) return value; // Jika bukan angka, kembalikan tanpa format
  const [integer, decimal] = value.split(".");
  const formattedInteger = new Intl.NumberFormat().format(integer);
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
}
