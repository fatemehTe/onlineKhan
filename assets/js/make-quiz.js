
// The array of student names in first tabs list
var studentNamesInList = [];
// The array of studentGroups names in second tabs list
// var studentNamesInListGroup = [];
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
var studentGroupConfirmData = document.getElementById("studentGroupConfirmData")
var studentGroupConfirmDataParent = document.getElementById("studentGroupConfirmDataParent")
var finalConfirmButton = document.getElementById("finalConfirmButton")





function addLevel(x) {
    var str = dropdownMenuLink.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    if (x.checked) {
        str += ', ' + x.value
    } else {
        str.includes(', ' + x.value + ',') ?//vasate string
            str = str.replace(', ' + x.value + ',', ',') :
            str.endsWith(', ' + x.value) ?//akhar e string
                str = str.substring(0, str.length - x.value.length - 2) :
                str.startsWith(x.value + ',') ?//aval e string
                    str = str.substring(x.value.length, str.length) :
                    str == x.value ?//tanha dar string
                        str = 'انتخاب کنید' :
                        null

    }
    str.substring(0, 2) === ', ' ? str = str.substring(2, str.length) : null
    dropdownMenuLink.textContent = str
}

function addName(x) {
    var str = dropdownMenuLinkname.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    if (x.checked) {
        str += ', ' + x.value
    } else {
        str.includes(', ' + x.value + ',') ?//vasate string
            str = str.replace(', ' + x.value + ',', ',') :
            str.endsWith(', ' + x.value) ?//akhar e string
                str = str.substring(0, str.length - x.value.length - 2) :
                str.startsWith(x.value + ',') ?//aval e string
                    str = str.substring(x.value.length, str.length) :
                    str == x.value ?//tanha dar string
                        str = 'انتخاب کنید' :
                        null

    }
    str.substring(0, 2) === ', ' ? str = str.substring(2, str.length) : null
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
            i.name = item
            li.appendChild(i);
            list.appendChild(li);
            studentNamesInList.push(item)
        }
        createStGroup.classList.remove('disabled')
        createStGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentNamesInList = studentNamesInList.filter(function (f) { return f !== i.parentNode.innerText })
            i.parentNode.parentNode.removeChild(i.parentNode);
            studentCount = studentNamesInList.length
            studentCount == 0 ? (createStGroup.classList.add('disabled'), createStGroup.disabled = true) : null
            updateNameList(studentCount, stLevel)
        })
        studentCount = studentNamesInList.length
    })

    var stLevel = document.getElementsByName('st-name');
    for (var checkbox of stLevel) {
        checkbox.checked = false;
    }
    persainArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    updateNameList(studentCount, stLevel)


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
    finalConfirmButton.addEventListener('click', e => {
        e.preventDefault()
        let ul = document.createElement('ul')
        ul.classList.add('list-group', 'overflow-hidden', 'pe-0')
        let divUP = document.createElement('div')
        divUP.innerText = 'گروه های دانش آموزی:'
        let divDown = document.createElement('div')
        divDown.innerText = 'برای این آزمون, با موفقیت انتخاب شدند.'
        let div = document.createElement('div')
        div.classList.add('w-100', 'c-06a971')

        studentGroupConfirmDataParent.innerHTML = ''
        studentGroupConfirmDataParent.appendChild(divUP)
        ul.appendChild(div)

        studentGroupObjArray.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = item.groupName
            div.appendChild(li)
        })
        studentGroupConfirmDataParent.appendChild(div)
        studentGroupConfirmDataParent.appendChild(divDown)
    })

}
function addLevelGroup(x) {
    var str = dropdownMenuLinkGroup.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    if (x.checked) {
        str += ', ' + x.value
    } else {
        str.includes(', ' + x.value + ',') ?//vasate string
            str = str.replace(', ' + x.value + ',', ',') :
            str.endsWith(', ' + x.value) ?//akhar e string
                str = str.substring(0, str.length - x.value.length - 2) :
                str.startsWith(x.value + ',') ?//aval e string
                    str = str.substring(x.value.length, str.length) :
                    str == x.value ?//tanha dar string
                        str = 'انتخاب کنید' :
                        null

    }
    str.substring(0, 2) === ', ' ? str = str.substring(2, str.length) : null
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
        str.includes(', ' + x.value + ',') ?//vasate string
            str = str.replace(', ' + x.value + ',', ',') :
            str.endsWith(', ' + x.value) ?//akhar e string
                str = str.substring(0, str.length - x.value.length - 2) :
                str.startsWith(x.value + ',') ?//aval e string
                    str = str.substring(x.value.length, str.length) :
                    str == x.value ?//tanha dar string
                        str = 'انتخاب کنید' :
                        null
        keyValueArray = keyValueArray.filter(function (f) { return f !== x.value })
    }
    str.substring(0, 2) === ', ' ? str = str.substring(2, str.length) : null
    dropdownMenuLinknameGroup.textContent = str
}


selectsGroup.addEventListener('click', (e) => {
    e.preventDefault();
    var studentCount = 0;
    var totalstudentCount = 0;
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
        let contains = false;
        studentGroupObjArrayInList.forEach((elem) => {
            if (elem.groupName === item) {
                contains = true
            }
        })
        if (contains === false) {
            addToListGroup(item)
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
        }

        createStGroupGroup.classList.remove('disabled')
        createStGroupGroup.disabled = false
        i.addEventListener('click', e => {
            e.preventDefault()
            studentGroupObjArrayInList.forEach((elem) => {
                if (elem.groupName === item) {
                    studentGroupObjArrayInList = studentGroupObjArrayInList.filter(function (f) { return f !== elem })
                }
            })
            updateGroupList()
            dropdownMenuLinknameGroup.textContent = 'انتخاب کنید'
            studentCount == 0 ? (createStGroupGroup.classList.add('disabled'), createStGroupGroup.disabled = true) : null
            i.parentNode.parentNode.parentNode.removeChild(i.parentNode.parentNode);
            studentNamesInDropDown = studentNamesInDropDown.filter(function (f) { return f !== item })
        })
        studentCount = studentGroupObjArrayInList.length
    })

    var stLevelGroup = document.getElementsByName('st-name-group');
    for (var checkbox of stLevelGroup) {
        checkbox.checked = false;
    }
    updateGroupList()
    dropdownMenuLinknameGroup.textContent = 'انتخاب کنید'
})


function addToListGroup(item) {
    studentGroupObjArray.forEach((elem) => {
        if (elem.groupName === item) {
            studentGroupObjArrayInList.push(elem)
        }
    })
}


function calcTotalStCount() {
    let count = 0;
    let temp = []
    studentGroupObjArrayInList.forEach((item) => {
        temp = item.studentArray.split(',')
        temp.forEach((e) => {
            if (e === '') {
                temp = []
            }
        })
        count += temp.length
    })
    return count
}

function eyeClicked(x) {
    seeModal.innerHTML = ''
    var str = '';
    var studentCount = 0;
    var eyeArray = []
    let div = document.createElement('div')

    str = studentGroupObjArray[x.name].studentArray;
    eyeArray = str.length > 0 ? str.split(',') : []
    studentCount = eyeArray.length
    updatestudentArayList(studentCount)

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

            eyeArray = eyeArray.filter(function (f) { return f !== name })
            if (str.includes(name)) {
                studentGroupObjArray[x.name].studentArray = eyeArray.toString()
            }
            studentCount = eyeArray.length
            updatestudentArayList(studentCount)

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

function updateNameList(studentCount, stLevel) {
    reportCount.textContent = `تا کنون انتخاب ${makePersian(studentCount)} دانش آموز از ${makePersian(stLevel.length)} دانش آموز`
    dropdownMenuLinkname.textContent = 'انتخاب کنید'
}
function updateGroupList() {
    let studentCount = studentGroupObjArrayInList.length
    let totalstudentCount = calcTotalStCount()
    reportCountGroup.textContent = `تا کنون ${makePersian(totalstudentCount)} دانش آموز و ${makePersian(studentCount)} گروه انتخاب شده اند`

}
function updatestudentArayList(studentCount) {
    reportCountStudent.innerText = `${makePersian(studentCount)} دانش آموز در این گروه وجود دارند`
    updateGroupList()
}

function makePersian(number) {
    let array = number.toString().split('')
    let str = ''
    array.forEach((item) => {
        str += persainArray[item]
    })
    return str
}