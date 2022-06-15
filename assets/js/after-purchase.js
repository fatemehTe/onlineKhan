/*fateme tekrar*/
console.log('hellllooooo')
const main = document.getElementById("main");
const popUpPage = document.getElementById("popUp-page");
const question_send1 = document.getElementById("question-send1");
const question_send2 = document.querySelector("#question-send2");
const popUpImg = document.getElementById("popUpImg");

popUpImg.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(0px)';
    popUpPage.style = 'display:none';
})
question_send1.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
question_send2.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log('hellllooooo')
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
/*fateme tekrar*/