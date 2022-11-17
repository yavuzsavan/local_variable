// let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
// let counterDOM = document.querySelector("#counter");
// let increaseBtn = document.querySelector("#increase");
// let decreaseBtn = document.querySelector("#decrease");

// counterDOM.innerHTML = counter;

// increaseBtn.addEventListener("click", clickEvent)
// decreaseBtn.addEventListener("click", clickEvent)

// function clickEvent(){
//     // console.log(this.id)
//     this.id == "increase" ? counter++ :counter--;
//     localStorage.setItem("counter", counter);
//     counterDOM.innerHTML = counter;
// }


// ------------------------------------------------

let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunc = (title, message, className="warning") => 
`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title} </strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`;

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username");
    const SCORE = document.querySelector("#score");

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = "";
        SCORE.value = "";
    } else {
        alertDOM.innerHTML = alertFunc(
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger");
    }

}


let userListDOM = document.querySelector("#userList");
const addItem = (username, score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${username} 
    <span class="badge badge-primary badge-pill">${score}</span>`;
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    userListDOM.append(liDOM);
}


