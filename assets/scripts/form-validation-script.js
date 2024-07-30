//=====================================================================
//-------------VALIDATING FORMS (TICKING TERMS OF SERVICE)-------------
//=====================================================================

document.getElementById("gridCheck").addEventListener('change', function () {
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = !this.checked;
});

document.getElementById("contactForm").addEventListener('submit', function (event) {
    var checkBox = document.getElementById("gridCheck");
    if (!checkBox.checked) {
        alert("Please agree to the Terms of Service.");
        event.preventDefault(); // Prevent form submission
    }
});
