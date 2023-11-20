const selectButton = document.querySelector('.select-btn');
const optionsList = document.querySelector('.options');
const chevronIcon = document.getElementById('chevron-icon');

let optionsVisible = false; 

selectButton.addEventListener('click', function () {
  if (optionsVisible) {
    optionsList.style.display = 'none'; // Hide the options
  } else {
    optionsList.style.display = 'block'; // Show the options
  }
  optionsVisible = !optionsVisible; // Toggle the visibility state
});

optionsList.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('option')) {
    // Get the selected option text
    const selectedOption = event.target.innerText;

    // Update the text within the span element
    const sBtnText = document.querySelector('.sBtn-text');
    sBtnText.innerText = selectedOption;

    // Hide the options
    optionsList.style.display = 'none';
    optionsVisible = false;
  }
});

optionsList.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('option-text')) {
  
    const selectedOption = event.target.innerText;

    
    const sBtnText = document.querySelector('.sBtn-text');
    sBtnText.innerText = selectedOption;

    // Hide the options
    optionsList.style.display = 'none';
    optionsVisible = false;
  }
});

// Close the options when clicking outside of the select menu
document.addEventListener('click', function (event) {
  if (event.target !== selectButton && event.target !== chevronIcon) {
    optionsList.style.display = 'none';
    optionsVisible = false;
  }
});

// Prevent the click event on the options list from closing the menu
optionsList.addEventListener('click', function (event) {
  event.stopPropagation();
});