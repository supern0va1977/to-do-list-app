function newItem(){

//javascript
//1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert("You must write something!");
  } else {
      $('#list').append(li);
  }

 //2. Crossing out an item from the list of items:
  li.on('dblclick', function crossOut() {
      li.addClass('strike');
  });


 //3(i). Adding the delete button "X":
   let crossOutButton = $('<crossOutButton> x </crossOutButton>');
   li.append(crossOutButton);
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
 	crossOutButton.on('click', function deleteListItem() {
      li.addClass('delete');
    });

 // 4. Reordering the items:
   $('#list').sortable();
}
