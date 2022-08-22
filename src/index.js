document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const inputfield = document.getElementById("new-task-description").value;
    document.getElementById('tasks').innerHTML += `
       <li>${inputfield}</li>

 
 
 `
    document.getElementById("new-task-description").value = ''

  })



});
