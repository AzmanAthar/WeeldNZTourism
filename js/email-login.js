document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let otp = Math.floor(100000 + Math.random() * 900000)

    if (username === "admin" && password === "password") {
      alert('Invalid. Try Again')
    } else {
      redirectToVerification(otp, username)
    }
  });

  function redirectToVerification(otp, username) {
    window.location.href = `verification.html?otp=${otp}&username=${username}`;
  }