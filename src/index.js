document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tasks").addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete-btn")){
      e.target.parentElement.remove()

    }
   
  })

  document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const inputfield = document.getElementById("new-task-description").value;
    document.getElementById("tasks").innerHTML += `
    <div>
       <li>${inputfield}</li>
       <button type="button" class="delete-btn">x </button>
       </div>
     `;
    document.getElementById("new-task-description").value = "";
  });
});
