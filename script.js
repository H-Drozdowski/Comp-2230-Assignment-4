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
        console.log("Validation failed.")
    }
})

const validateForm = () => {
    let isValid = true

    // Clear error messages
    clearErrorMessages()

    // Elements to check validation
    const name = document.getElementById("name")
    const favCharactersList = document.getElementsByName("favCharacter")
    const favEpisode = document.getElementById("favoriteEpisode")
    const email = document.getElementById("email")

    // For when I want the error to display on a specific location
    const nameContainer = document.getElementById("nameInputContainer")

    // Name validation.
    isValid = checkValueIsEmpty(name.value, nameContainer) && isValid

    // Validates that a radio element has been checked.
    isValid = checkRadiosListValid(favCharactersList) && isValid

    // Validates favorite episode is within the range of episodes.
    isValid = checkEpisodeRange(favEpisode.value) && isValid

    // Validates email.
    isValid = checkEmail(email.value) && isValid

    return isValid
} 



const checkValueIsEmpty = (value, errorContainer) => {
    let isValid = true
    if (value === ""){
        isValid = false
        addInputError(errorContainer, "Cannot be blank.")
    }

    return isValid
}

const checkEpisodeRange = (value) => {
    let isValid = true
    const favEpisodeContainer = document.getElementById("favoriteEpisodeContainer")
    isValid = checkValueIsEmpty(value, favEpisodeContainer)

    if (!isValid){
        // Makes sure both errors are not displayed at the same time.
    }
    else if (value <= 0 || value > 148){
        isValid = false
        addInputError(favEpisodeContainer, "Favorite episode must be between in the range of existing episodes (1 - 148)")
    }

    return isValid
}

const checkEmail = (value) => {
    let isValid = true
    const emailContainer = document.getElementById("emailContainer")

    // Regular expression for email validation 
    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    isValid = checkValueIsEmpty(value, emailContainer)

    if (!isValid){
        isValid = false
    }

    else if(!complexEmailPattern.test(value)){
        isValid = false
        addInputError(emailContainer, "Must be a valid email address.")
    }

    return isValid
}

// Checks all of the radios from an input list of radios to see
// if at least one has been selected.
const checkRadiosListValid = (list) => {
    let radioIsValid = false
    const radioErrorContainer = document.getElementById("radioErrorContainer")
    
    for (let radio of list){
        if (radio.checked){
            radioIsValid = true
        }
    }

    if (!radioIsValid){
        addInputError(radioErrorContainer, "A selection must be made to continue.")
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