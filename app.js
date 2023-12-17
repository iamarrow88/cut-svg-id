const button = document.querySelector("#button");
const textarea = document.querySelector("#refs");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const data = textarea.value;
  const regexp = /#[A-z,-]+/g;
  const ids = [...data.matchAll(regexp)]
  let str = '';
  ids.forEach(id => {
    str += `<span>${id}</span>`;
  })
  output.insertAdjacentHTML('afterbegin', str);
})


