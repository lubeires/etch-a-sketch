const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear");
const eraserButton = document.querySelector(".eraser");
const sizeDisplay = document.querySelector("span");
const sizeRange = document.querySelector(".size input");
const colorPicker = document.querySelector(".color");
let color = "#ededed";

clearButton.addEventListener("click", () => setGrid(sizeRange.value));

eraserButton.addEventListener("click", () => {
  eraserButton.classList.toggle("active");
  color = eraserButton.classList.contains("active") ? "none" : "#ededed";
});

sizeRange.addEventListener("input", () => {
  sizeDisplay.textContent = `${sizeRange.value}x${sizeRange.value}`;
});

sizeRange.addEventListener("change", () => {
  setGrid(sizeRange.value);
});

colorPicker.addEventListener("input", () => {
  color = colorPicker.value;
});

const setGrid = (size = 16) => {
  grid.innerHTML = "";

  grid.style.gridTemplateColumns = `${"1fr ".repeat(size)}`;
  grid.style.gridTemplateRows = `${"1fr ".repeat(size)}`;

  for (let i = 0; i < size ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.style.background = "none";
    grid.appendChild(pixel);
    pixel.addEventListener("mouseover", () => (pixel.style.background = color));
  }
};

setGrid();
