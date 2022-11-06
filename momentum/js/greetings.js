const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const logoutForm = document.querySelector("#logout-form");
// const logoutBtn = document.querySelector("#logout-form input");
// const todo = document.querySelector(".todo");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Wellcome! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    // logoutForm.classList.remove(HIDDEN_CLASSNAME);
    // todo.classList.remove(HIDDEN_CLASSNAME);
}

// function logoutClick() {
//     localStorage.removeItem(USERNAME_KEY);
//     logoutForm.classList.add(HIDDEN_CLASSNAME);
//     todo.classList.add(HIDDEN_CLASSNAME);
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginInput.value = null;
//   }


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername); 
    // todo.classList.remove(HIDDEN_CLASSNAME);
    // logoutForm.classList.remove(HIDDEN_CLASSNAME);
}
 
// logoutBtn.addEventListener("click", logoutClick);