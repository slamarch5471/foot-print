javascript
document.querySelector("form").addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
        "Thank you for contacting Foot-Print! We will get back to you soon."
    );

    this.reset();

});
