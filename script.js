document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
  
      if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please fill in both first name and last name fields.");
      } else {
        // Form is valid, you can perform additional actions here
        alert("Form submitted successfully!");
  
        // Example: You can submit the form data to a server using AJAX or fetch
        const formData = new FormData(form);
        // Replace the URL with the actual server endpoint
        fetch("https://example.com/submit", {
          method: "POST",
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            console.log("Server response:", data);
          })
          .catch(error => {
            console.error("Error submitting data:", error);
          });
      }
    });
  });
  