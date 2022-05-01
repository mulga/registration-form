registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let fatherName = document.getElementById("fatherName").value;
  let address = document.getElementById("address").value;
  let gender = document.getElementById("male");
  let state = document.getElementById("state");
  let city = document.getElementById("city");
  let dob = document.getElementById("dob").value;
  let pincode = document.getElementById("pincode").value;
  let course = document.getElementById("course");
  let mailid = document.getElementById("mail").value;

  let registerForm = document.getElementById("registerForm");

  if (male.checked) {
    document.getElementById("genderResult").innerHTML = "male";
  } else if (female.checked) {
    document.getElementById("genderResult").innerHTML = "female";
  }

  document.getElementById("nameResult").innerHTML = name;
  document.getElementById("fatherResult").innerHTML = fatherName;
  document.getElementById("addressResult").innerHTML = address;
  stateResult.innerHTML = state.options[state.selectedIndex].textContent;
  cityResult.innerHTML = city.options[city.selectedIndex].textContent;
  //   document.getElementById("cityResult").innerHTML = city;
  document.getElementById("dobResult").innerHTML = dob;
  document.getElementById("pincodeResult").innerHTML = pincode;

  courseResult.innerHTML = course.options[course.selectedIndex].textContent;
  document.getElementById("emailIdResult").innerHTML = mailid;
  document.querySelector("#results").classList.add = "active";
  document.querySelector(".result-wrapper").style.display = "flex";

  registerForm.style.display = "none";
});
