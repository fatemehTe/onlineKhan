var globalStudentSelectCount = 0;
// The array of student names in first tabs list
var studentNamesInList = [];
// The array of objects of students with group names used in second tab
var studentGroupObjArray = [];
// The array of objects of students with group names in list used in second tab
var studentGroupObjArrayInList = []

var stLevel = document.getElementsByName('lv-name');
const dropdownMenuLink = document.getElementById("dropdownMenuLink")
const dropdownMenuLinkname = document.getElementById("dropdownMenuLinkname")
const selects = document.getElementById("selects")
var list = document.getElementById("list-group")
var studentList = document.getElementById("student-list")
var reportCount = document.getElementById("report-count")
var stNames = document.getElementsByName("st-name")
var createStGroup = document.getElementById("create-st-group")
var createStGroupInput = document.getElementById("create-st-group-input")
var submitGroup = document.getElementById("submit-group")

// for second tab
var stLevelGroup = document.getElementsByName('lv-name-group');
var stNamesGroup = document.getElementsByName("st-name-group")
const dropdownMenuLinkGroup = document.getElementById("dropdownMenuLink-group")
const dropdownMenuLinknameGroup = document.getElementById("dropdownMenuLinkname-group")
const selectsGroup = document.getElementById("selects-group")
var listGroup = document.getElementById("list-group-group")
var studentListGroup = document.getElementById("student-list-group")
var reportCountGroup = document.getElementById("report-count-group")
var createStGroupGroup = document.getElementById("create-st-group-group")
var submitGroupGroup = document.getElementById("submit-group-group")
var ulMenueLinknameGroup = document.getElementById("ulMenueLinkname-group-overflow")



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
    var studentNamesInDropDown = []
    var str = dropdownMenuLinkname.innerText
    str !== 'انتخاب کنید' ?
        (
            studentNamesInDropDown = dropdownMenuLinkname.innerText.split(', ')
        ) : studentNamesInDropDown = []
    studentNamesInDropDown.forEach((item) => {
        let li = document.createElement("li");
        let i = document.createElement("i")
        if (!studentNamesInList.includes(item)) {
            console.log(studentNamesInList.includes(item))
            console.log(studentNamesInList)
            li.innerText = item;
            li.classList.add('list-group-item', 'pe-4', 'd-flex', 'flex-row', 'justify-content-between')
            i.classList.add('fa', 'fa-trash', 'text-dark', 'fs-5')
            li.appendChild(i);
            list.appendChild(li);
            studentNamesInList.push(item)
        }
        createStGroup.classList.remove('disabled')
        createStGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentNamesInList.pop(i.value)
            studentCount = studentNamesInList.length
            globalStudentSelectCount = studentCount
            studentCount == 0 ? (createStGroup.classList.add('disabled'), createStGroup.disabled = true) : null
            reportCount.textContent = `تا کنون انتخاب ${persainArray[studentCount]} دانش آموز از ${persainArray[stLevel.length]} دانش آموز`
            i.parentNode.parentNode.removeChild(i.parentNode);
            studentNamesInDropDown = studentNamesInDropDown.filter(function (f) { return f !== item })
        })
        studentCount = studentNamesInList.length
        globalStudentSelectCount = studentCount
    })

    var stLevel = document.getElementsByName('st-name');
    for (var checkbox of stLevel) {
        checkbox.checked = false;
    }
    persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    reportCount.textContent = `تا کنون انتخاب ${persainArray[studentCount]} دانش آموز از ${persainArray[stLevel.length]} دانش آموز`
    dropdownMenuLinkname.textContent = 'انتخاب کنید'

    createStGroup.addEventListener('click', e => {
        var studentGroupObj = {
            groupName: '',
            studentArray: []
        }
        e.preventDefault()
        var groupName = createStGroupInput.value
        studentGroupObj.name = groupName;
        studentGroupObj.studentArray = studentNamesInList
        add(studentGroupObjArray, groupName, studentGroupObj);
    })
})
function add(arr, name, obj) {
    const found = arr.some(el => el.name === name);
    if (!found) arr.push(obj);
    return arr;
}

// for second tab

function makeStudentGroupList() {

    for (i = 0; i < studentGroupObjArray.length; i++) {
        var div = document.createElement('div')
        var input = document.createElement('input')
        var label = document.createElement('label')

        div.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center')
        input.classList.add('mx-1', 'my-1')
        input.name = 'st-name-group'
        input.type = "checkbox"
        input.setAttribute('onclick', 'addNameGroup(this)')
        input.value = studentGroupObjArray[i].name
        input.id = i
        label.for = 'st-name-group'
        label.innerText = studentGroupObjArray[i].name

        div.appendChild(input)
        div.appendChild(label)
        ulMenueLinknameGroup.appendChild(div)
    }


}

function addLevelGroup(x) {
    var str = dropdownMenuLinkGroup.innerText;
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
    dropdownMenuLinkGroup.textContent = str
}

function addNameGroup(x) {
    console.log(x.value)
    var str = dropdownMenuLinknameGroup.innerText;
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
    dropdownMenuLinknameGroup.textContent = str
}

selectsGroup.addEventListener('click', (e) => {
    e.preventDefault();
    var studentCount = 0;
    studentListGroup.style = 'display:block'
    submitGroupGroup.style = 'display:block'
    var studentNamesInDropDown = []
    var str = dropdownMenuLinknameGroup.innerText
    str !== 'انتخاب کنید' ?
        (
            studentNamesInDropDown = dropdownMenuLinknameGroup.innerText.split(', ')
        ) : studentNamesInDropDown = []
    studentNamesInDropDown.forEach((item) => {
        let li = document.createElement("li");
        let i = document.createElement("i")
        let iEye = document.createElement("i")
        let div = document.createElement("div")

        div.classList.add('d-flex', 'flex-row', 'justify-content-between')
        div.style = 'width:50px'
        li.innerText = item;
        li.classList.add('list-group-item', 'pe-4', 'd-flex', 'flex-row', 'justify-content-between')
        i.classList.add('fa', 'fa-trash', 'text-dark', 'fs-5')
        iEye.classList.add('fa', 'fa-eye', 'text-dark', 'fs-5')

        iEye.setAttribute('aria-hidden', 'true')
        iEye.setAttribute('studentNamesInDropDown-bs-toggle', 'modal')
        iEye.setAttribute('studentNamesInDropDown-bs-target', '#seeStudentModal')

        div.appendChild(iEye);
        div.appendChild(i);
        li.appendChild(div);
        listGroup.appendChild(li);
        createStGroupGroup.classList.remove('disabled')
        createStGroupGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentCount = studentNamesInDropDown.length - 1
            console.log(studentCount)
            studentCount == 0 ? (createStGroupGroup.classList.add('disabled'), createStGroupGroup.disabled = true) : null
            reportCountGroup.textContent = `تا کنون ${persainArray[globalStudentSelectCount]} دانش آموز و ${persainArray[studentCount]} گروه انتخاب شده اند`
            i.parentNode.parentNode.removeChild(i.parentNode);
            studentNamesInDropDown = studentNamesInDropDown.filter(function (f) { return f !== item })
        })
        studentCount = studentNamesInDropDown.length
        iEye.addEventListener('click', e => {
            e.preventDefault()
            console.log(3)
        })
    })

    var stLevelGroup = document.getElementsByName('st-name-group');
    for (var checkbox of stLevelGroup) {
        checkbox.checked = false;
    }
    persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    reportCountGroup.textContent = `تا کنون ${persainArray[globalStudentSelectCount]} دانش آموز و ${persainArray[studentCount]} گروه انتخاب شده اند`
    dropdownMenuLinknameGroup.textContent = 'انتخاب کنید'
})



