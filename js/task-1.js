const categories = document.querySelectorAll(".item");
console.log(categories);

for (let i = 0; i < categories.length; i++) {}
console.log("кількість категорій:", categories.length);

for (let item of document.querySelectorAll(".item")) {
  let title = item.firstElementChild.textContent;
  let countLi = item.getElementsByTagName("li").length;
  console.log("h2:", title);
  console.log("кількість елементів у категорії:", countLi);
}
