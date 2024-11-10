document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    var resumeDetails = document.getElementById("resume-details");
    var resetButton = document.getElementById("reset-button");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var degree = document.getElementById("degree").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var resumeContent = "\n        <h3>".concat(name, "'s Resume</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, " (").concat(degree, ")</p>\n        <p><strong>Experience:</strong></p>\n        <p>").concat(experience, "</p>\n        <p><strong>Skills:</strong></p>\n        <p>").concat(skills, "</p>\n      ");
        resumeDetails.innerHTML = resumeContent;
        resumeOutput.classList.remove("hidden");
        form.classList.add("hidden");
    });
    resetButton.addEventListener("click", function () {
        resumeOutput.classList.add("hidden");
        form.classList.remove("hidden");
        form.reset();
    });
});
