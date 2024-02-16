const nameUser = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

function changeName() {
  const value = nameUser.value.trim();

  output.textContent = value === "" ? "Anonymous" : value;
}
nameUser.addEventListener("input", changeName);
