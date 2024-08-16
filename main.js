const ota = document.querySelector(".ota");
fetch("https://dummyjson.com/users")
.then(res => res.json())
.then(data =>{
    data.users.forEach(element => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("cards");
        const Name = document.createElement("h2");
        const gender = document.createElement("p");
        const Age = document.createElement("p");
        const Email = document.createElement("p");
        Name.textContent = element.firstName;
        gender.textContent = `Gender:${element.gender}`;
        Age.textContent = `Age:${element.age}`;
        Email.textContent = `Email:${element.email}`;
        wrapper.append(Name,gender,Age,Email);
        ota.appendChild(wrapper)
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    const userCount = document.querySelectorAll(".form__input")[0].value;
    const ageLimit = document.querySelectorAll(".form__input")[1].value;
    const nameSearch = document.querySelectorAll(".form__input")[2].value.toLowerCase(); // Name search value

    // Clear previous results
    ota.innerHTML = "";

    // Fetch the users data
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
        // Filter and limit the number of users based on input
        let filteredUsers = data.users;

        // Filter by age limit
        if (ageLimit) {
            filteredUsers = filteredUsers.filter(user => user.age <= ageLimit);
        }

        // Filter by name
        if (nameSearch) {
            filteredUsers = filteredUsers.filter(user => user.firstName.toLowerCase().includes(nameSearch));
        }

        // Limit the number of users
        if (userCount) {
            filteredUsers = filteredUsers.slice(0, userCount);
        }

        // Display the filtered users
        filteredUsers.forEach(element => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("cards");
            const Name = document.createElement("h2");
            const gender = document.createElement("p");
            const Age = document.createElement("p");
            const Email = document.createElement("p");
            Name.textContent = element.firstName;
            gender.textContent = `Gender: ${element.gender}`;
            Age.textContent = `Age: ${element.age}`;
            Email.textContent = `Email: ${element.email}`;
            wrapper.append(Name, gender, Age, Email);
            ota.appendChild(wrapper);
        });
    });
});
