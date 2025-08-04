const input = document.getElementById("input");
const toggle = document.getElementById("toggle-mode");

function append(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
