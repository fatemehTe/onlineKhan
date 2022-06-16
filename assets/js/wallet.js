/*fateme tekrar*/
const deleteFromBasket1 = document.getElementById("deleteFromBasket1")
const deleteFromBasket2 = document.getElementById("deleteFromBasket2")
const chevron = document.getElementById("chevron")


deleteFromBasket1.addEventListener("click", (e) => {
    e.stopPropagation();
    book1.style = 'display: none';
})
deleteFromBasket2.addEventListener("click", (e) => {
    e.stopPropagation();
    book2.style = 'display: none';
})
chevron.addEventListener("click", (e) => {
    e.stopPropagation();
    this.classList.toggle("fa-chevron-up");
})
/*fateme tekrar*/
