var checkboxes = document.getElementsByName('lv-name');
const dropdownMenuLink = document.getElementById("dropdownMenuLink")


for (var checkbox of checkboxes) {
    if (checkbox.checked) {
        dropdownMenuLink.append(checkbox.value + ' ');
    }
}


function myFunction(x) {
    var str = dropdownMenuLink.textContent
    var comma = false
    str === 'انتخاب کنید' ? (null) : comma = true
    if (x.checked) {
        
        str = str + (x.value)
        dropdownMenuLink.append(x.value + (comma && ','))
    } else {
        str = str.replace(x.value + ',', '');
        console.log(str)
        dropdownMenuLink.textContent = str
    }

}
