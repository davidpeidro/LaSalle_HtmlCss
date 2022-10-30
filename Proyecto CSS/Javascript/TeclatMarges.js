/*
function MostrarHora() {
    const currentTime = new Date()
    return alert(currentTime)
}

function DibuixarEfectesAlsMargeDelsDivs() {
    const divsWeb = document.querySelectorAll('div, section')   
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
} */

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


function CapturarOpcioTeclat()
{    
    document.onkeydown = EvaluarCaracter;
}


// MAIN


CarregaInicial()

function CarregaInicial()
{     
    CapturarOpcioTeclat();   
}