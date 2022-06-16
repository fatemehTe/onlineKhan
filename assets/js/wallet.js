/*fateme tekrar*/
const chevron = document.getElementById("chevron")
const dropDown = document.getElementById("dropDown")
const deleteFromُTable1 = document.getElementById("deleteFromُTable1")
const deleteFromُTable2 = document.getElementById("deleteFromُTable2")
const tr1 = document.getElementById("tr1")
const tr2 = document.getElementById("tr2")



dropDown.addEventListener("click", (e) => {
    e.stopPropagation();
    chevron.classList.toggle("fa-chevron-up");
})
deleteFromُTable1.addEventListener("click", (e) => {
    e.stopPropagation();
    tr1.textContent = 'کسر شد';
    tr1.style='color:#ff0048'
})
deleteFromُTable2.addEventListener("click", (e) => {
    e.stopPropagation();
    tr2.textContent = 'کسر شد'
    tr2.style='color:#ff0048'
})
/*fateme tekrar*/
