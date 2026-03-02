/*
    Hudson Drozdowski
    March 01, 2026
    Assignment 4
*/

const form = document.getElementById("surveyForm")
const rating = document.getElementById("rating")
const ratingDisplay = document.getElementById("ratingDisplay")

// Changes the rating to be displayed anytime the value has changed.
rating.addEventListener("input", () =>{
    const ratingValue = rating.value

    ratingDisplay.textContent = `(${ratingValue}/10)`
})

form.addEventListener("submit", (event) => {

    event.preventDefault()

    if (validateForm()){
        form.submit()
    }
    else{
        console.error("Validation failed.")
    }
})

const validateForm = () => {
    isValid = true

    // Clear error messages
    clearErrorMessages()

    // Elements to check validation
    const name = document.getElementById("name")
    const favCharactersList = document.getElementsByName("favCharacter")
    const favEpisode = document.getElementById("favoriteEpisode")

    // For when I want the error to display on a specific location
    const radioErrorContainer = document.getElementById("radioErrorContainer")
    const nameContainer = document.getElementById("nameInputContainer")
    const favEpisodeContainer = document.getElementById("favoriteEpisodeContainer")

    // Name validation
    if(name.value === ""){
        isValid = false
        addInputError(nameContainer, "Name cannot be empty.")
    } 

    // Validates that a radio element has been checked
    if (!checkRadiosListValid(favCharactersList)){
        isValid = false
        addInputError(radioErrorContainer, "A selection must be made to continue.")
    }

    // Validates favorite episode is within the range of episodes.
    if (favEpisode.value <= 0 || favEpisode.value > 148){
        isValid = false
        addInputError(favEpisodeContainer, "Favorite episode must be between in the range of existing episodes (1 - 148)")
    }

    return isValid
} 

// Checks all of the radios from an input list of radios to see
// if at least one has been selected.
const checkRadiosListValid = (list) => {
    radioIsValid = false
    for (let num in list){
        if (list[num].checked){
            radioIsValid = true
        }
    }
    return radioIsValid
}

// Clears all error messages from the website.
const clearErrorMessages = () => {
    const errorMessages = document.querySelectorAll(".error")
    for (const error of errorMessages){
        error.remove()
    }
}

// Adds an error display for the user.
const addInputError = (inputElement, message) => {
    const errorDisplay = document.createElement("span")
    errorDisplay.innerText = message
    errorDisplay.className = "error"
    errorDisplay.setAttribute("role", "alert")
    inputElement.appendChild(errorDisplay)
}