const shoppingList = document.querySelector('ul.list');
const input = document.querySelector('input');
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  let newItem = input.value;
  input.value = '';

  let listItem = document.createElement('li');
  //let itemText = document.createElement('span');
  let deleteBtn = document.createElement('button');

  listItem.textContent = newItem;
  deleteBtn.textContent = 'Delete';

  if (!newItem) {
    alert("Please enter an item.")
  } else {
    shoppingList.prepend(listItem);
    listItem.appendChild(deleteBtn);
    listItem.classList.add('list-item');
    deleteBtn.classList.add('delete');
  }

  deleteBtn.addEventListener('click', () => {
    shoppingList.removeChild(listItem)
  });

  input.focus();
});


  








