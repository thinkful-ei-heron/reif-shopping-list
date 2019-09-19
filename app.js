'use strict';
const list = $('ul');

function addListItem() {
  $('#submitButton').on('click', e => {
    e.preventDefault();
    let listItemName = $('#shopping-list-entry').val();
    if (listItemName) {
      // console.log(listItemName);
      let newListItem = `
      <li>
        <span class="shopping-item">${listItemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `;
      $('.shopping-list').prepend(newListItem);
      $('#shopping-list-entry').val('');
    }
  });
}

function deleteListItem() {
  list.on('click', e => {
    e.preventDefault();
    if (e.target.closest('button').className === 'shopping-item-delete') {
      console.log(e.target);
      e.target.closest('li').remove();
    }
  });
}

function checkListItem() {
  list.on('click', e => {
    e.preventDefault();
    let beta = e.target.closest('li');
    if (e.target.closest('button').className === 'shopping-item-toggle') {
      // console.log(e.target.closest('li'));
      // console.log(beta.firstChild.nextSibling);
      $(beta.firstChild.nextSibling).toggleClass('shopping-item__checked');
    }
  });
}

$(addListItem);
$(deleteListItem);
$(checkListItem);