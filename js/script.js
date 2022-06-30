
let shoppingList = [];
const btn = document.querySelector('.btn')

btn.addEventListener('click', addItems);
  function addItems(){
    let addItems = shoppingList.map(item => `<li class='list-item'>${item}</li>`).join('\n');
    document.querySelector('ul.list').innerHTML = addItems;
}


let input = document.querySelector('input');

btn.addEventListener("click", () => {
    shoppingList.unshift(input.value + `<button class='delete'>delete</button>`);
    input.value = ''
    addItems();
});
