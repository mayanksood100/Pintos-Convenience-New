console.log("Hello");

$(document).ready(function () {
  $(".contact100-form-btn").click(function (event) {
    console.log("Clicked Button");

    let firstname = $("#first-name").val();
    let lastname = $("#last-name").val();
    let email = $("#email").val();
    let phoneNumber = $("#phone").val();
    let message = $("#message").val();

    if (firstname.length > 3) {
      console.log("First-Name is valid");
    } else {
      event.preventDefault();
      console.log("First Name is invalid");
    }

    if (lastname.length > 3) {
      console.log("Last-Name is valid");
    } else {
      event.preventDefault();
      console.log("Last Name is invalid");
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      console.log("Email is valid");
    } else {
      event.preventDefault();
      console.log("Email is invalid");
    }

    if (phoneNumber.length === 10) {
      console.log("Phone Number is valid");
    } else {
      event.preventDefault();
      console.log("Phone Number is invalid");
    }

    if (message.length > 10) {
      console.log("Message is valid");
    } else {
      event.preventDefault();
      console.log("Message is invalid");
    }
  });
});
