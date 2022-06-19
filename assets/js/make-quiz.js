var checkboxes = document.getElementsByName('lv-name');
const dropdownMenuLink = document.getElementById("dropdownMenuLink")
const dropdownMenuLinkname = document.getElementById("dropdownMenuLinkname")
const selects = document.getElementById("selects")
var list = document.getElementById("list-group")
var studentList = document.getElementById("student-list")
var reportCount = document.getElementById("report-count")
var stNames = document.getElementsByName("st-name")
var createStGroup = document.getElementById("create-st-group")
var submitGroup = document.getElementById("submit-group")


function addLevel(x) {
    var str = dropdownMenuLink.innerText;
    var clear;
    str == 'انتخاب کنید' ? clear = true : clear = false
    if (x.checked) {
        clear ? str = '' : str = str + ', '
        str += x.value
    } else {
        var comma = str.indexOf(',') > -1;
        console.log(comma)
        str = str.includes(', ' + x.value) ?
            str.replace(', ' + x.value, '') :
            str.includes(x.value) ? str.replace(x.value + ', ', '') : null
        if (!comma) str = 'انتخاب کنید';
    }
    dropdownMenuLink.textContent = str
}

function addName(x) {
    var str = dropdownMenuLinkname.innerText;
    var clear;
    str == 'انتخاب کنید' ? clear = true : clear = false
    if (x.checked) {
        clear ? str = '' : str = str + ', '
        str += x.value
    } else {
        var comma = str.indexOf(',') > -1;
        console.log(comma)
        str = str.includes(', ' + x.value) ?
            str.replace(', ' + x.value, '') :
            str.includes(x.value) ? str.replace(x.value + ', ', '') : null
        if (!comma) str = 'انتخاب کنید';
    }
    dropdownMenuLinkname.textContent = str
}

selects.addEventListener('click', (e) => {
    e.preventDefault();
    var studentCount = 0;
    studentList.style = 'display:block'
    submitGroup.style = 'display:block'
    var data = []
    var str = dropdownMenuLinkname.innerText
    str !== 'انتخاب کنید' ?
        (
            data = dropdownMenuLinkname.innerText.split(', ')
        ) : data = []
    data.forEach((item) => {
        let li = document.createElement("li");
        let i = document.createElement("i")
        li.innerText = item;
        li.classList.add('list-group-item', 'pe-4', 'd-flex', 'flex-row', 'justify-content-between')
        i.classList.add('fa', 'fa-trash', 'text-dark', 'fs-5')
        li.appendChild(i);
        list.appendChild(li);
        createStGroup.classList.remove('disabled')
        createStGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentCount = data.length - 1
            console.log(studentCount)
            studentCount == 0 ? (createStGroup.classList.add('disabled'), createStGroup.disabled = true) : null
            reportCount.textContent = `تا کنون انتخاب ${persainArray[studentCount]} دانش آموز از ۲۵ دانش آموز`
            i.parentNode.parentNode.removeChild(i.parentNode);
            data = data.filter(function (f) { return f !== item })
        })
        studentCount = data.length
    })

    persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    reportCount.textContent = `تا کنون انتخاب ${persainArray[studentCount]} دانش آموز از ۲۵ دانش آموز`
    dropdownMenuLinkname.textContent = 'انتخاب کنید'
    var checkboxes = document.getElementsByName('st-name');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
})




