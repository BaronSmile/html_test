const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  selected.classList.toggle('focus');
});

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest(`.selected`)) {
    optionsContainer.classList.remove("active");
    selected.classList.remove('focus');
  }
});


optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    selected.classList.remove('focus');
  });
});


const updateValues = function () {
  document.getElementById('rangeValue').innerHTML = document.querySelector('#formRange').value + '%';
}
window.onload = updateValues;
document.getElementById('formRange').oninput = updateValues;

const menuBtn = document.getElementById('menu-toggle')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("header__menu_active")
})