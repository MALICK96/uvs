

document.addEventListener("DOMContentLoaded", function(e) { 
    const name = document.getElementById("fname");
    const message = document.getElementById("message");
    const form = document.getElementById("contact-form");
    let patt = /^[a-zA-Z ]+$/;

    name.addEventListener("blur", function() {
        if (patt.test(name.value)) {
        document.getElementById("fname").classList.add("success");
        } else {
            document.getElementById("fname").classList.add("error");
        }
    });


    function checkName(name) {
        return patt.test(name);
    }

   function checkMessage(str) {
        return patt.test(str);
    }

    form.addEventListener("submit", function(e) {
        let res1 = checkName(document.getElementById("fname").value);
        let res2 = checkMessage(document.getElementById("message").value);

        if (res1 && res2) {
            alert("Thank you for leaving Us a message");
        } else {
            alert("Please! Enter only alphabet character in the fields");
            e.preventDefault();
        }
    });


});
  

