//name
let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('nameOutput');
nameInput.onfocus = onFocusName;
nameInput.onblur = onBlurName;

function onFocusName() {
    nameOutput.innerHTML = "Hello there! What's your name?";
}

function onBlurName() {
    if (nameInput.value == ("")) {
        nameOutput.innerHTML = "Please enter your name!";
    } else {
        nameOutput.innerHTML = "Hi, " + nameInput.value + "!";
    }
}

//birthday
let ageInput = document.getElementById('date');
let ageOutput = document.getElementById('ageOutput');
ageInput.onfocus = onFocusAge;
ageInput.onblur = onBlurAge;

function onFocusAge() {
    ageOutput.innerHTML = "Lemme guess, your age is...";
}

function onBlurAge() {
    if (ageInput.value == "") {
        ageOutput.innerHTML = "Would you mind entering your birthday!";
    } else {
        let birthday = new Date(ageInput.value);
        let age = (new Date()).getFullYear() - birthday.getFullYear();
        ageOutput.innerHTML = "Your age is " + age + " years old!";
    }
}

//theme
let lightThemeInput = document.getElementById('light');
let darkThemeInput = document.getElementById('dark');
let themeOutput = document.getElementById('themeOutput');

lightThemeInput.onclick = onChangeMode;
darkThemeInput.onclick = onChangeMode;

function onChangeMode(e) {
    let el = document.getElementById('panel');
    console.log(el.className);
    if (e.target.value == "Light") {
        themeOutput.innerHTML = "You chose light mode!";
        el.className = "panel bg-light text-black"
    } else {
        themeOutput.innerHTML = "You chose dark mode!";
        el.className = "panel bg-dark text-white"
    }
}

//skills
let htmlButton = document.getElementById('html');
let cssButton = document.getElementById('css');
let jsButton = document.getElementById('javascript');
htmlButton.onclick = changeLocation;
cssButton.onclick = changeLocation;
jsButton.onclick = changeLocation;

function changeLocation(e) {
    if (e.target.parentNode.id == "left") {
        let doc = document.getElementById('skillsOutput');
        e.target.style.marginRight = "3px";
        doc.appendChild(e.target);
    } else {
        //appending back in original positions
        let doc = document.getElementById('left');
        if (e.target.id == "html") {
            if (doc.contains(cssButton)) {
                doc.insertBefore(e.target, cssButton);
            } else if (doc.contains(jsButton)) {
                doc.insertBefore(e.target, jsButton);
            } else {
                doc.appendChild(e.target);
            }
        } else if (e.target.id == "css") {
            if (doc.contains(jsButton)) {
                doc.insertBefore(e.target, jsButton);
            } else {
                doc.appendChild(e.target);
            }
        } else {
            doc.appendChild(e.target);
        }  
    }
}

htmlButton.onmouseover = changeRed;
cssButton.onmouseover = changeRed;
jsButton.onmouseover = changeRed;

function changeRed(e) {
   if (e.target.parentNode.id == "skillsOutput") {
    document.getElementById(e.target.id).className = "btn btn-danger btn-sm";
   }
}

htmlButton.onmouseout = changeGreen;
cssButton.onmouseout = changeGreen;
jsButton.onmouseout = changeGreen;

function changeGreen(e) {
    document.getElementById(e.target.id).className = "btn btn-success btn-sm";
 }