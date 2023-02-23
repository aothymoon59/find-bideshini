const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  // set gender
  const genderTag = document.getElementById("gender");
  genderTag.innerText = user.results[0].gender;

  // set name
  const name = `${(user.results[0].name.first, user.results[0].name.title)} ${
    user.results[0].name.first
  }  ${user.results[0].name.last}`;
  document.getElementById("name").innerText = name;

  // set image profile
  document.getElementById("profile-img").src = user.results[0].picture.large;

  // set email
  document.getElementById("email").innerText = user.results[0].email;
  // set phone
  document.getElementById("phone").innerText = user.results[0].phone;
  // set phone
  const address = `${user.results[0].location.city}, ${user.results[0].location.country}`;
  document.getElementById("address").innerText = address;

  // console.log(user.results[0]);
};

// loadUser();
