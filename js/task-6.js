function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const destroy = document.querySelector("button[data-destroy]");
const create = document.querySelector("button[data-create]");
const inputNumber = document.querySelector("input");

function createBoxes(amount) {
  amount = inputNumber.value;
  destroyBoxes();
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
      const elemBox = document.createElement("div");

      boxes.append(elemBox);
      size += 10;
      elemBox.classList = "item";
      elemBox.style.width = `${size}px`;
      elemBox.style.height = `${size}px`;
      elemBox.style.marginRight = "30px";
      elemBox.style.marginBottom = "30px";
      elemBox.style.backgroundColor = getRandomHexColor();
    }
  } else {
    alert("Введіть число в діапазоні від 1 до 100");
  }
  inputNumber.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
destroy.addEventListener("click", destroyBoxes);
create.addEventListener("click", createBoxes);
