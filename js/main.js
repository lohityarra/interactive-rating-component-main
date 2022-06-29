const submit = document.querySelector('.submit-btn');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const buttons = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');

let stars = 3;

submit.addEventListener('click', function atsubmitclick() {
    card1.classList.add('hide');
    card2.classList.remove('hide');
});

buttons.forEach(btn=> btn.addEventListener('click',atselection));

function atselection(event) {
    buttons.forEach(btn=>{ 
        btn.classList.remove('active');
          
    });
    
    event.target.classList.add('active');


    stars = event.target.textContent;
    score.textContent = stars;
   
}


