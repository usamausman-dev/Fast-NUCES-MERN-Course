function addTodo() {

    var input_text = document.getElementById('text-input').value
    // console.log("running", input_text)

    var todolist = document.getElementById('todos');
    var todoItem = document.createElement('li')
    todoItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')


    //created span tag
    var spanText = document.createElement('span');
    var todoText = document.createTextNode(input_text);
    spanText.appendChild(todoText);

    //created button
    var delete_btn = document.createElement('button');
    delete_btn.setAttribute('class', 'btn btn-danger');
    delete_btn.setAttribute('onclick','deleteTodo(event)')
    var delete_btn_text = document.createTextNode('delete');
    delete_btn.appendChild(delete_btn_text);

    todoItem.appendChild(spanText);
    todoItem.appendChild(delete_btn);
    todolist.appendChild(todoItem)

    document.getElementById('text-input').value=""
}


function deleteTodo(e){
    // console.log(e.target.parentNode)
    e.target.parentNode.remove()
  
  
}

