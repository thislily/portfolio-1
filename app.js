function toggleMode() {
    const toggleThemes = document.querySelectorAll(".mode-option");
    // Define an array with all possible mode class names
    const allModeClasses = ['light-mode', 'dark-mode', 'party-mode'];


    toggleThemes.forEach((theme) => {
        theme.addEventListener("click", function () {
            // First, remove the "selected-mode" class from all options
            toggleThemes.forEach((otherTheme) => {
                otherTheme.classList.remove("selected-mode");
            });

            // Add "selected-mode" class to the clicked option
            theme.classList.add("selected-mode");

            // Get the mode value
            const modeValue = document.querySelector(`#${theme.getAttribute('for')}`).value;

            // Remove all mode classes from the body before adding the new one
            document.body.classList.remove(...allModeClasses);

            // Add the selected mode as a class to the body
            document.body.classList.add(modeValue);

            if (modeValue === "party-mode"){
                document.querySelector(".profile-pic").src = "images/heart-glasses.jpg"
            } else {
                document.querySelector(".profile-pic").src = "images/glasses.jpg"
            }
        });
    });
}

toggleMode();
