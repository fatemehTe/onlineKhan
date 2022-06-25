//lesson question key value array
var lessonBasedOnLevel = []
//level array
var levelArray = []
//lesson array
var lessonArray = []

levelNames = [{ name: 'اول دبیرستان', id: 1 }, { name: 'دوم دبیرستان', id: 2 }, { name: 'سوم دبیرستان', id: 3 }]
lessonNames = [
    { name: 'ریاضی ۱', id: 1, levelNameId: 1 },
    { name: 'ریاضی ۲', id: 2, levelNameId: 2 },
    { name: 'ریاضی ۳', id: 3, levelNameId: 3 },
    { name: 'فیزیک ۱', id: 4, levelNameId: 1 },
    { name: 'فیزیک ۲', id: 5, levelNameId: 2 },
    { name: 'فیزیک ۳', id: 6, levelNameId: 3 },
    { name: 'زیست ۱', id: 7, levelNameId: 1 },
    { name: 'زیست ۲', id: 8, levelNameId: 2 },
    { name: 'زیست ۳', id: 9, levelNameId: 3 },
]
questions = [
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 1, lessonNameId: 1 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 2, lessonNameId: 2 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 3, lessonNameId: 3 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 4, lessonNameId: 4 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 5, lessonNameId: 5 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 6, lessonNameId: 6 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 7, lessonNameId: 7 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 8, lessonNameId: 8 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 9, lessonNameId: 9 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 10, lessonNameId: 1 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 11, lessonNameId: 2 },
    { questions: [{ name: 'Q1' }, { name: 'Q2' }, { name: 'Q3' }], id: 12, lessonNameId: 3 },
]

var stLevel = document.getElementsByName('lv-name');
const dropdownMenuLink = document.getElementById("dropdownMenuLink")
const dropdownMenuLinkname = document.getElementById("dropdownMenuLinkname")
const selects = document.getElementById("selects")
var list = document.getElementById("list-group")
var studentList = document.getElementById("student-list")
var reportCount = document.getElementById("report-count")
var stNames = document.getElementsByName("st-name")
var levelNameID = document.getElementById("level-name")
var lessonNameID = document.getElementById("lesson-name")

window.onload =
    function makeLevel() {

        levelNames.forEach((item) => {
            let div = document.createElement('div')
            let input = document.createElement('input')
            let label = document.createElement('label')

            div.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center')
            input.classList.add('mx-1', 'my-1')
            input.type = "checkbox"
            input.name = "lv-name"
            input.setAttribute('onclick', 'addLevel(this)')
            label.for = "lv-name"
            label.classList.add("font-14")

            input.value = item.name
            input.id = item.id
            label.innerText = item.name
            div.appendChild(input)
            div.appendChild(label)
            levelNameID.appendChild(div)
        })

    }
function addLevel(x) {
    var str = dropdownMenuLink.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    let keyValue = { key: 0, value: '' }
    if (x.checked) {
        keyValue.key = x.id;
        keyValue.value = x.value
        !levelArray.includes(x.value) ?
            levelArray.push(keyValue) : null
        updateLevelString()
    } else {
        levelArray = levelArray.filter(function (f) {
            return f.key !== x.id
        })
        lessonArray = lessonArray.filter(function (f) {
            return f.parentKey !== x.id
        })
        updateLevelString()
        updateLessonString()
    }
    updateLevelString()
}

function updateLevelString() {
    let temp = []
    levelArray.forEach((item) => {
        temp.push(item.value)
    })
    temp.length === 0 ? str = 'انتخاب کنید' :
        str = temp.toString()
    dropdownMenuLink.textContent = str
    addLesson()
    makeLesson()
}

function addLesson() {
    lessonBasedOnLevel = []
    for (i = 0; i < levelArray.length; i++) {
        for (j = 0; j < lessonNames.length; j++) {
            if (lessonNames[j].levelNameId == levelArray[i].key) {
                let keyValue = { key: 0, value: '', parentKey: 0 }
                keyValue.key = lessonNames[j].id
                keyValue.value = lessonNames[j].name
                keyValue.parentKey = lessonNames[j].levelNameId
                lessonBasedOnLevel.push(keyValue)
            }
        }
    }
}
function makeLesson() {
    lessonNameID.innerHTML = ''
    lessonBasedOnLevel.length > 0 ?
        lessonBasedOnLevel.forEach((item) => {

            let div = document.createElement('div')
            let input = document.createElement('input')
            let label = document.createElement('label')

            div.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center')
            input.classList.add('mx-1', 'my-1')
            input.type = "checkbox"
            input.name = "st-name"
            input.setAttribute('onclick', 'addName(this)')
            label.for = "st-name"
            label.classList.add("font-14")

            input.value = item.value
            input.id = item.key

            input.alt = item.parentKey
            label.innerText = item.value
            div.appendChild(input)
            div.appendChild(label)
            lessonNameID.appendChild(div)
        }) : null
}

function addName(x) {
    var str = dropdownMenuLinkname.innerText;
    str == 'انتخاب کنید' ? str = '' : null
    let keyValue = { key: 0, value: '', parentKey: 0 }
    if (x.checked) {
        keyValue.key = x.id;
        keyValue.value = x.value;
        keyValue.parentKey = x.alt
        !str.includes(x.value) ?
            lessonArray.push(keyValue) : null
        updateLessonString()

    } else {
        lessonArray = lessonArray.filter(function (f) { return f.value !== x.value })
        updateLessonString()
    }
    updateLessonString()
    finalConfirmButton.addEventListener('click', e => {

        studentGroupConfirmDataParent.innerHTML = ''

        let lessonArr = []
        let levelArr = []
        let lessonStr = ''
        let levelStr = ''

        let lessonPic;
        let levelPic;
        let verbPic;

        let lesson = 'درس'
        let lessons = 'دروس'
        let verb = 'با موفقیت انتخاب شد.'

        let level = 'مقطع'
        let levels = 'مقاطع'
        let verbs = 'با موفقیت انتخاب شدند.'


        lessonArray.length > 1 ?
            lessonPic = lessons : lessonArray.length == 1 ? lessonPic = lesson : lessonArray.length == 0 ? lessonPic = 'هیچ درسی' : null

        levelArray.length > 1 ?
            lessonPic = "از " + levels : levelArray.length == 1 ? levelPic = "از " + level : levelArray.length == 0 ? levelPic = 'هیچ مقطعی' : null

        lessonPic === 'درس' ? verbPic = verb : verbPic = verbs

        e.preventDefault()

        let divUP = document.createElement('div')
        divUP.innerText = lessonPic
        studentGroupConfirmDataParent.appendChild(divUP)

        let div = document.createElement('div')
        div.classList.add('w-100', 'c-06a971')
        lessonArray.forEach((e => {
            lessonArr.push(e.value)
        }))
        lessonStr = lessonArr.toString()
        div.textContent = lessonStr
        studentGroupConfirmDataParent.appendChild(div)

        let divDown = document.createElement('div')
        divDown.innerText = levelPic
        studentGroupConfirmDataParent.appendChild(divDown)

        let div2 = document.createElement('div')
        div2.classList.add('w-100', 'c-06a971')
        studentGroupConfirmDataParent.appendChild(div2)
        levelArray.forEach((e => {
            levelArr.push(e.value)
        }))
        levelStr = levelArr.toString()
        div2.textContent = levelStr

        let divDowner = document.createElement('div')
        divDowner.innerText = verbPic
        studentGroupConfirmDataParent.appendChild(divDowner)
    })
}

function updateLessonString() {
    let temp = []
    lessonArray.forEach((item) => {
        temp.push(item.value)
    })
    reportCount.innerText = `تا کنون ${makePersian(lessonArray.length)} درس و ${makePersian(questionCountCalc())} سوال انتخاب شده اند.`
    temp.length === 0 ? str = 'انتخاب کنید' :
        str = temp.toString()
    dropdownMenuLinkname.textContent = str
}

function questionCountCalc() {
    let count = 0
    lessonArray.forEach((elem) => {
        count += questions[elem.key].questions.length
    })
    return count
}
