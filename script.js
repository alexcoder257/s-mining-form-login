// Hàm chuyển đổi form hiển thị
function showForm(formType) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.add("hidden");

    document.getElementById(formType + "Form").classList.remove("hidden");
}

// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Xử lý đăng nhập
function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!validateEmail(email)) {
        alert("Invalid email format!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    alert("Login successful!");
}

// Xử lý đăng ký
function handleRegister() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const termsChecked = document.getElementById("termsCheckbox").checked;

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the Terms of Service!");
        return;
    }

    alert("Registration successful!");
}

// Xử lý quên mật khẩu
function handleForgotPassword() {
    const email = document.getElementById("forgotEmail").value;

    if (!validateEmail(email)) {
        alert("Invalid email format!");
        return;
    }

    alert("A password reset link has been sent to your email!");
}

function togglePassword() {
    const passwordInput = document.getElementById("loginPassword");
    const toggleIcon = document.getElementById("togglePassword");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.src = "assets/icons/eye-off.svg"; // Đổi icon thành "ẩn"
    } else {
      passwordInput.type = "password";
      toggleIcon.src = "assets/icons/eye.svg"; // Đổi icon thành "hiện"
    }
  }
  
  function toggleRegisterPassword() {
    const passwordInput = document.getElementById("registerPassword");
    const toggleIcon = document.getElementById("toggleRegisterPassword");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.src = "assets/icons/eye-off.svg"; // Chuyển sang icon ẩn
    } else {
      passwordInput.type = "password";
      toggleIcon.src = "assets/icons/eye.svg"; // Chuyển sang icon hiện
    }
  }
  