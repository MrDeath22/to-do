let form = document.getElementById('formAdd');
let itemList = document.getElementById('list');
let textType = document.getElementById('inp');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e) {
   e.preventDefault();
   let newItem = textType.value;
   let li = document.createElement('li');

   li.className = 'item';
   li.appendChild(document.createTextNode(newItem));

   itemList.appendChild(li);

   textType.value = ''; 

   let delBtn = document.createElement('button');

   delBtn.className = 'btn-del delete';
   delBtn.appendChild(document.createTextNode('X'));

   li.appendChild(delBtn);
}

let checkItem = document.querySelector('.item');

checkItem.addEventListener('click', itemCheck);

function itemCheck(e) {
   if (!e.target.classList.contains('cl-green')) {
      let li = e.target
      checkItem.classList.add("cl-green")
   }
}

// remove item

function removeItem(e) {
   if (e.target.classList.contains('delete')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
   }
}


