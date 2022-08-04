'use strict';
const rating_input = document.querySelectorAll('input');
const submit_btn = document.getElementById('btn_submit');
const rating_container = document.querySelector('.rating_container');
const thank_container = document.querySelector('.thank_container');
const rating = document.querySelector('.rating');

rating_input.forEach((input) => {
    input.addEventListener('click', () => {
        rating.textContent = `You selected ${input.value} out of 5`;
    });
});
submit_btn.addEventListener('click', () => {
    rating_container.classList.add('hidden_container');
    thank_container.classList.add('show_container');
});