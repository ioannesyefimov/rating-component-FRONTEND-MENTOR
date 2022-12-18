const submitBtn = document.querySelector('#submitbtn');
const submitAgain = document.querySelector("#submit-again")
const ratingBtn = document.querySelectorAll('.rating-btn')
const unSubmittedCard = document.querySelector('.unsubmitted')
const submittedCard = document.getElementById('submitted-card')
const rating = document.getElementById('rate-number')

submitBtn.addEventListener("click", () => {
   

            submittedCard.classList.remove('hidden')
             unSubmittedCard.classList.add('hidden')
             e.classList.toggle('picked')
})

submitAgain.addEventListener('click', () => {
    submittedCard.classList.add('hidden')
    unSubmittedCard.classList.remove('hidden')
})

ratingBtn.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML
        rate.classList.toggle('picked')

    }
    
    )
});