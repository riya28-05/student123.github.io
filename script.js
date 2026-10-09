// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}


// EXAMINATION RESULTS DEMO FORM

const resultForm = document.getElementById("resultForm");

if (resultForm) {
    resultForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("studentName").value.trim();
        const roll = document.getElementById("rollNumber").value.trim();
        const semester = document.getElementById("semester").value;

        const message = document.getElementById("resultMessage");

        message.textContent =
            "Demo request received for " + name +
            ". Roll Number: " + roll +
            ". Semester: " + semester +
            ". This website is a demo and does not contain official marks.";

        message.classList.add("show");
    });
}
