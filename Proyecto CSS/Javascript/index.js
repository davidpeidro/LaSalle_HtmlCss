
function showTime() {

    const currentTime = new Date()
    return alert(currentTime)

}

document.addEventListener('DOMContentLoaded', showTime)

function borderEffects() {

    const divsWeb = document.querySelectorAll('div, section')
    console.log(divsWeb)

    for (const div of divsWeb) {

        div.addEventListener('mouseover', (event) => {
            if (event.altKey) {
                div.style.border = '1px solid red';
            }
        })

        div.addEventListener('mouseout', (event) => {
            if (event.altKey) {
                div.style.border = null;
            }
        })

    }
}

function EvaluarCaracter(evObject) {
    let Caracter = String.fromCharCode(evObject.which);
    switch (Caracter) {
        case "1":
            document.location.href="#Who whe are";
            break;
        case "2":
            document.location.href="#Services";
            break;
        case "3":
            document.location.href="#Portfolio";
            break;
        case "4":
            document.location.href="#Location";
            break;
        case "5":
            document.location.href="#EmailUs";
            break;
        default: break;
    }
}

window.onload = function () { document.onkeypress = EvaluarCaracter; }

document.addEventListener('DOMContentLoaded', borderEffects)

function showSection() {

    const selectedSection = document.addEventListener

}