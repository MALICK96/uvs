const form = document.getElementById("contact-form");

const fname = document.getElementById("fullName");

const message = document.getElementById("message");

document.body.addEventListener("load", function() {
    fname.focus();
    message.focus();
});

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    if (fname.value === "" || message.value === "") {
        alert("Please! Provide us your name and leave a little comment");
        keepFocus();
    } else {
        alert("Thank you for contacting us");
    }


});

function keepFocus() {
    fname.focus();
    message.focus();
}

