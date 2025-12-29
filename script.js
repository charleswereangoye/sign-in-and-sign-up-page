// Select elements
const title = document.getElementById("title");
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const form = document.querySelector("form");
const inputGroup = document.querySelector(".input_group");

// Function to show Sign Up form
function showSignUp() {
    title.textContent = "Sign Up";

    inputGroup.innerHTML = `
        <div class="input_field">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Name">
        </div>
        <div class="input_field">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email">
        </div>
        <div class="input_field">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password">
        </div>
        <p>Lost password <a href="#">Click Here</a></p>
    `;
}

// Function to show Sign In form
function showSignIn() {
    title.textContent = "Sign In";

    inputGroup.innerHTML = `
        <div class="input_field">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email">
        </div>
        <div class="input_field">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password">
        </div>
        <p>Forgot password? <a href="#">Click Here</a></p>
    `;
}

// Event listeners
signupBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page reload
    showSignUp();
});

signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSignIn();
});
