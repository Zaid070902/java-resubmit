function reg() {
    let first_name = document.getElementById("Name").value;
    let last_name = document.getElementById("Surname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(username, password, email);
    fetch("https://sht-wrld.herokuapp.com/registration/", {
      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
      }),
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert('Registered')
      window.location = './login.html'
  }
  