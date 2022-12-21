const custom = document.querySelector("#flexRadioDefault3");
const customgender = document.querySelector("#customgender");
const genderopt = document.querySelector("#genderopt");
const closebtnmodel = document.querySelector("#close-btn-modal")

custom.addEventListener("change", function(){
    customgender.classList.remove("d-none");
    genderopt.classList.remove("d-none");
})

closebtnmodel.addEventListener("click", function(){
    customgender.classList.add("d-none");
    genderopt.classList.add("d-none");
})