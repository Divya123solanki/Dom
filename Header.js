

let mainDiv = document.getElementById("mainDiv");
let nav = document.createElement("navdiv");
nav.setAttribute("class", "container-fluid d-flex align-items-center bg-primary");

// Logo Div
let logodiv = document.createElement("div");
logodiv.setAttribute("class", "col-3");
let img = document.createElement("img");
img.src = "image1.jpg";
img.setAttribute("style", "height:50px; width:50px;");
logodiv.appendChild(img);

// Search Div
let search = document.createElement("div");
search.setAttribute("class", "col-6");
let ip = document.createElement("input");
ip.setAttribute("type", "text");
ip.setAttribute("placeholder", "Search...");
ip.setAttribute("style", "width:100%; padding:5px;");
search.appendChild(ip);

// Options Div
let optionDiv = document.createElement("div");
optionDiv.setAttribute("class", "col-3 text-end"); 
let btn1 = document.createElement("button");
btn1.innerText = "Sign-In";
btn1.setAttribute("style", "margin-right:10px;");
let btn2 = document.createElement("button");

//add event listener
btn2.addEventListener("click", signup);
btn2.innerText = "Sign-Up";
btn2.setAttribute("style", "padding:5px 10px;");



optionDiv.appendChild(btn1);
optionDiv.appendChild(btn2);

// Append to nav
nav.appendChild(logodiv);
nav.appendChild(search);
nav.appendChild(optionDiv);
mainDiv.appendChild(nav);


 // Function to create the signup form
 function signup() {
    let formDiv = document.createElement("div");
    formDiv.setAttribute("class", "container mt-5");

    let heading = document.createElement("h2");
    heading.classList.add("text-center");
    heading.innerText = "Sign Up";

    let form = document.createElement("form");
    form.setAttribute("class", "mt-4");

    // Username Input
    let usernameDiv = document.createElement("div");
    usernameDiv.setAttribute("class", "mb-3");
    let usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "username");
    usernameLabel.classList.add("form-label");
    usernameLabel.innerText = "Username";
    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("id", "username");
    usernameInput.setAttribute("class", "form-control");
    usernameInput.setAttribute("placeholder", "Enter your username");
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    // Email Input
    let emailDiv = document.createElement("div");
    emailDiv.setAttribute("class", "mb-3");
    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.classList.add("form-label");
    emailLabel.innerText = "Email";
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter your email");
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    // Password Input
    let passwordDiv = document.createElement("div");
    passwordDiv.setAttribute("class", "mb-3");
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.classList.add("form-label");
    passwordLabel.innerText = "Password";
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter your password");
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    // Submit Button
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary w-100");
    submitButton.innerText = "Sign Up";

    // Back Button
    let backButton = document.createElement("button");
    backButton.setAttribute("type", "button");
    backButton.setAttribute("class", "btn btn-secondary w-100 mt-3");
    backButton.innerText = "Back";
    backButton.addEventListener("click", function () {
      createNavBar(); // Go back to the main page
    });

    // Append everything to the form
    form.appendChild(usernameDiv);
    form.appendChild(emailDiv);
    form.appendChild(passwordDiv);
    form.appendChild(submitButton);
    form.appendChild(backButton);

    // Append the form and heading to formDiv
    formDiv.appendChild(heading);
    formDiv.appendChild(form);

    // Clear mainDiv and append the signup form
    // mainDiv.innerHTML = "";
    mainDiv.appendChild(formDiv);
  }

  // Initialize the main navigation bar
  createNav();