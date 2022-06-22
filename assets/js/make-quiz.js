var globalStudentSelectCount = 0;
var globalStudentGroupCount = 0;
// The array of student names in first tabs list
var studentNamesInList = [];
// The array of studentGroups names in second tabs list
var studentNamesInListGroup = [];
// The array of objects of students with group names used in second tab
var studentGroupObjArray = [];
// The array of objects of students with group names in list used in second tab
var studentGroupObjArrayInList = []
//key value for the index of the student group we choose
var keyValueArray = []
//to convert
persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

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
var parent = document.getElementById("ulMenueLinkname-group")
var childDiv = document.getElementById("ulMenueLinkname-group-overflow")
var seeModal = document.getElementById("seeModal")
var reportCountStudent = document.getElementById("report-count-student")



function addLevel(x) {
    var str = dropdownMenuLink.innerText;
    var clear;
    str == 'انتخاب کنید' ? clear = true : clear = false
    if (x.checked) {
        clear ? str = '' : str = str + ', '
        str += x.value
    } else {
        var comma = str.indexOf(',') > -1;
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
            studentNamesInList.pop(i.parentNode.innerText)
            studentCount = studentNamesInList.length
            globalStudentSelectCount = studentCount
            studentCount == 0 ? (createStGroup.classList.add('disabled'), createStGroup.disabled = true) : null
            reportCount.textContent = `تا کنون انتخاب ${persainArray[studentCount]} دانش آموز از ${persainArray[stLevel.length]} دانش آموز`
            i.parentNode.parentNode.removeChild(i.parentNode);
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

})
createStGroup.addEventListener('click', e => {
    let studentGroupObj = {
        groupName: '',
        studentArray: ''
    }
    e.preventDefault()
    var groupName = createStGroupInput.value
    var studentArrayEach = studentNamesInList.toString()
    studentGroupObj.groupName = groupName;
    studentGroupObj.studentArray = studentArrayEach;

    const found = studentGroupObjArray.some(el => el.groupName === groupName);
    if (!found) studentGroupObjArray.push(studentGroupObj);


    childDiv.innerHTML = ''
    makeStudentGroupList()
})


// for second tabsecond

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
        input.value = studentGroupObjArray[i].groupName
        input.id = i
        label.for = 'st-name-group'
        label.innerText = studentGroupObjArray[i].groupName

        div.appendChild(input)
        div.appendChild(label)
        childDiv.appendChild(div)
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
        str = str.includes(', ' + x.value) ?
            str.replace(', ' + x.value, '') :
            str.includes(x.value) ? str.replace(x.value + ', ', '') : null
        if (!comma) str = 'انتخاب کنید';
    }
    dropdownMenuLinkGroup.textContent = str
}

function addNameGroup(x) {
    var keyValue = {
        key: 0,
        value: ''
    }
    var str = dropdownMenuLinknameGroup.innerText;
    var clear;
    str == 'انتخاب کنید' ? clear = true : clear = false
    if (x.checked) {
        if (clear === true) {
            str = '';
            keyValueArray = []
        } else {
            str = str + ', ';
        }
        str += x.value
        keyValue.key = x.id
        keyValue.value = x.value
        keyValueArray.push(keyValue)
    } else {
        var comma = str.indexOf(',') > -1;
        str = str.includes(', ' + x.value) ?
            str.replace(', ' + x.value, '') :
            str.includes(x.value) ? str.replace(x.value + ', ', '') : null
        if (!comma) str = 'انتخاب کنید';
        removeElementFromArray(x.value, keyValueArray)

    }
    dropdownMenuLinknameGroup.textContent = str
}

function removeElementFromArray(value, arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].value === value) {
            arr.splice(i, 1)
        }
    }
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
            studentNamesInDropDown = str.split(', ')
        ) : studentNamesInDropDown = []

    studentNamesInDropDown.forEach((item) => {

        let li = document.createElement("li");
        let i = document.createElement("i")
        let iEye = document.createElement("i")
        let div = document.createElement("div")
        if (!studentNamesInListGroup.includes(item)) {
            div.classList.add('d-flex', 'flex-row', 'justify-content-between')
            div.style = 'width:50px'
            li.innerText = item;
            li.classList.add('list-group-item', 'pe-4', 'd-flex', 'flex-row', 'justify-content-between')
            i.classList.add('fa', 'fa-trash', 'text-dark', 'fs-5')
            iEye.classList.add('fa', 'fa-eye', 'text-dark', 'fs-5')

            iEye.setAttribute('aria-hidden', 'true')
            iEye.setAttribute('data-bs-toggle', 'modal')
            iEye.setAttribute('data-bs-target', '#seeStudentModal')
            let key = linkIconAndKeyValue(item, keyValueArray)

            iEye.name = `${key}`
            iEye.setAttribute('onClick', `eyeClicked(this)`)

            div.appendChild(iEye);
            div.appendChild(i);
            li.appendChild(div);
            listGroup.appendChild(li);
            studentNamesInListGroup.push(item)
        }

        createStGroupGroup.classList.remove('disabled')
        createStGroupGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentNamesInListGroup.pop(i.parentNode.parentNode.parentNode.innerText)
            studentCount = studentNamesInListGroup.length
            studentCount == 0 ? (createStGroupGroup.classList.add('disabled'), createStGroupGroup.disabled = true) : null
            reportCountGroup.textContent = `تا کنون ${persainArray[globalStudentSelectCount]} دانش آموز و ${persainArray[studentCount]} گروه انتخاب شده اند`
            i.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode);
            studentNamesInDropDown = studentNamesInDropDown.filter(function (f) { return f !== item })
        })
        studentCount = studentNamesInListGroup.length
    })

    var stLevelGroup = document.getElementsByName('st-name-group');
    for (var checkbox of stLevelGroup) {
        checkbox.checked = false;
    }
    persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    reportCountGroup.textContent = `تا کنون ${persainArray[globalStudentSelectCount]} دانش آموز و ${persainArray[studentCount]} گروه انتخاب شده اند`
    dropdownMenuLinknameGroup.textContent = 'انتخاب کنید'
})


function eyeClicked(x) {
    seeModal.innerHTML = ''
    var str = '';
    var studentCount = 0;
    var eyeArray = []

    str = studentGroupObjArray[x.name].studentArray;
    eyeArray = str.length > 0 ? str.split(',') : []
    studentCount = eyeArray.length
    reportCountStudent.innerText = `${persainArray[studentCount]} دانش آموز در این گروه وجود دارند`

    let div = document.createElement('div')

    eyeArray.forEach((item) => {
        let icon = document.createElement('i')
        let li = document.createElement('li')

        li.innerText = item;
        li.classList.add('list-group-item', 'pe-4', 'd-flex', 'flex-row', 'justify-content-between');
        icon.classList.add('fa', 'fa-trash', 'text-dark', 'fs-5');
        icon.name = item
        li.appendChild(icon);
        div.appendChild(li)

        icon.addEventListener('click', (e) => {
            e.preventDefault()
            var name = icon.name
            icon.parentNode.parentNode.removeChild(icon.parentNode);
            str = str.replace(',', ' ')

            if (!str.replace(/\s/g, '').length) {
                studentGroupObjArray[x.name].studentArray = ''
                eyeArray = []
            }
            if (str.includes(name)) {
                studentGroupObjArray[x.name].studentArray =
                    studentGroupObjArray[x.name].studentArray.replace((studentGroupObjArray[x.name].studentArray.includes(",") ? "," + name : name), '')
            }
            eyeArray.splice(name, 1)
            studentCount = eyeArray.length
            reportCountStudent.innerText = `${persainArray[studentCount]} دانش آموز در این گروه وجود دارند`
        })
    })
    seeModal.appendChild(div);
    reportCountStudent.innerText = `${persainArray[studentCount]} دانش آموز در این گروه وجود دارند`
}

function linkIconAndKeyValue(value, arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].value === value) {
            return arr[i].key
        }
    }
    return -1
}
