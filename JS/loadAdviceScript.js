const adviceIdText = document.querySelector('[advice-id]');
const adviceText = document.querySelector('[advice]');
const generateAdviceButton = document.querySelector('[generate-advice-button]');

loadAdvice();

generateAdviceButton.addEventListener('click', loadAdvice);

function loadAdvice() {

    if (navigator.onLine) {

        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(adviceData => {

            adviceText.classList.remove('network-error')
            adviceIdText.textContent = `Advice # ${adviceData.slip.id}`;
            adviceText.textContent = `“${adviceData.slip.advice}”`;
        });
    }
    else {

        adviceText.classList.add('network-error');
        adviceText.textContent = 'Something went wrong, check your internet connection';
    }
    
}