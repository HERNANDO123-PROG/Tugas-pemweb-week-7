document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value.trim();
    var website = document.getElementById("website").value.trim();
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var phoneError = document.getElementById("phoneError");
    var websiteError = document.getElementById("websiteError");

    var isValid = true;
   
    // Validasi nama
    if (name === "") {
      isValid = false;
      addErrorClass("name");
      nameError.innerText = "*Wajib di isi";
    } else {
      removeErrorClass("name");
      nameError.innerText = "";
    }

    // Validasi username
    if (username === "") {
      isValid = false;
      addErrorClass("username");
      usernameError.innerText = "*Wajib di isi";
    } else {
      removeErrorClass("username");
      usernameError.innerText = "";
    }

    // Validasi email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      addErrorClass("email");
      emailError.innerText = "Email tidak valid";
    } else {
      removeErrorClass("email");
      emailError.innerText = "";
    }

    // Validasi password
    if (password.length < 6) {
      isValid = false;
      addErrorClass("password");
      passwordError.innerText =
        "Password harus terdiri dari minimal 6 karakter";
    } else {
      removeErrorClass("password");
      passwordError.innerText = "";
    }

    // Validasi nomor telepon
    var phonePattern = /^08[0-9]{9,}$/; // Format nomor telepon yang dimulai dengan "08" dan memiliki minimal 10 digit
    if (!phonePattern.test(phone)) {
        isValid = false;
        addErrorClass("phone");
        phoneError.innerText = "Nomor telepon tidak valid";
    } else {
        removeErrorClass("phone");
        phoneError.innerText = "";
    }

    // Validasi URL
    var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(website)) {
    isValid = false;
    addErrorClass("website");
    websiteError.innerText = "URL tidak valid";
  }   else {
      removeErrorClass("website");
      websiteError.innerText = "";
  }

    if (!isValid) {
      event.preventDefault();
    }else {
      alert("Data Berhasil disubmit")
      resetForm();
    }
  });

function resetForm() {
  document.getElementById("registrationForm").reset();
  var inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'
  );
  inputs.forEach(function (input) {
    input.classList.remove("error");
    var errorElement = input.nextElementSibling;
    if (errorElement.classList.contains("error-message")) {
      errorElement.innerText = "";
    }
  });
}

function addErrorClass(inputId) {
  document.getElementById(inputId).classList.add("error");
}

function removeErrorClass(inputId) {
  document.getElementById(inputId).classList.remove("error");
}
