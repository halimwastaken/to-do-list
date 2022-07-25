

var input = $("#input")
var todos = $("#todos")

function submitForm() {
    clickCounter()
    
  }
  function clickCounter() {
   
    var inputlength = input.val().length
    var inputvalue = input.val()
    if(inputlength > 0){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
        localStorage.setItem(`todo-${localStorage.clickcount}`, inputvalue)
        todos.append(`${inputvalue}`)
    }
    else{
        alert("boş geçemezsiniz.")
    }
    
    
  }

todos.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todos.remove();
});

