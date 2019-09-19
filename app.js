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
    // console.log(e);
    if (e.target.closest('button').className === 'shopping-item-delete') {
      console.log(e.target);
      e.target.closest('li').remove();
    }
  });
}


// function checkListItem() {}

$(addListItem);
$(deleteListItem);
// $(checkListItem);