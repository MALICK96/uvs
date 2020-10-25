const form = document.getElementById("contact-form");


const fname = document.getElementById("fullName").value;

const message = document.getElementById("message").value;

const errorElement = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    
    // let messages = [];
    let patt = /[a-zA-Z]/;
    // check name field and message field

    if (patt.test(fname) && patt.test(message)) {
        alert("Thank you for leaving a us a comment");
        // refresh();

    } else {
        alert("Name and comment most only be compose of english alphabets characters");
        // refresh();
    } 
    e.preventDefault();
    
    function refresh() {
        location.reload();
    }

});