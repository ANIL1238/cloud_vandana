document.getElementById("submit-button").addEventListener("click", function () {
    // Get form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Display values in the popup
    document.getElementById("popup-first-name").textContent = firstName;
    document.getElementById("popup-last-name").textContent = lastName;
    document.getElementById("popup-date-of-birth").textContent = dateOfBirth;
    document.getElementById("popup-country").textContent = country;
    document.getElementById("popup-gender").textContent = Array.from(gender, g => g.value).join(", ");
    document.getElementById("popup-profession").textContent = profession;
    document.getElementById("popup-email").textContent = email;
    document.getElementById("popup-mobile").textContent = mobile;

    // Show the popup and overlay
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function () {
    // Hide the popup and overlay
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    // Reset the form
    document.getElementById("survey-form").reset();
});

document.getElementById("reset-button").addEventListener("click", function () {
    // Reset the form
    document.getElementById("survey-form").reset();
});