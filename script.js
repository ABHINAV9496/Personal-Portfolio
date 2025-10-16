let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        skills: document.getElementById("skills").value, 
        message: document.getElementById("textarea").value,
    };

    emailjs.send("service_t4t3oda", "template_q5z95wc", parms)
    .then(function(response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
    });
}