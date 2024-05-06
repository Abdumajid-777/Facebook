let loginPageLinks = document.querySelectorAll("#login__page-link");
let login__page = document.querySelectorAll('#login__page');
let input = document.querySelectorAll('#login__page input');

loginPageLinks.forEach(function (item, index) {
    item.addEventListener('click', function () {
        loginPageLinks.forEach(function (element) {
            element.classList.remove("active");
        });

        item.classList.add("active");

        login__page.forEach(function (page) {
            page.classList.remove("open");
        });

        login__page[index].classList.add("open");
    });
});

function submit() {
    let loginInput = document.querySelector('input[name="login"]');
    let passwordInput = document.querySelector('input[name="password"]');
    let nameInput = document.querySelector('input[name="name"]');
    let lnameInput = document.querySelector('input[name="lname"]');
    let emailInput = document.querySelector('input[name="email"]');
    let phoneInput = document.querySelector('input[name="phone"]');

    let loginValue = loginInput.value;
    let passwordValue = passwordInput.value;
    let nameValue = nameInput.value;
    let lnameValue = lnameInput.value;
    let emailValue = emailInput.value;
    let phoneValue = phoneInput.value;

    fetch("https://myblog.education-online.uz/auth/registration", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "login": loginValue,
            "password": passwordValue,
            "name": nameValue,
            "lname": lnameValue,
            "email": emailValue,
            "phone": phoneValue
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}