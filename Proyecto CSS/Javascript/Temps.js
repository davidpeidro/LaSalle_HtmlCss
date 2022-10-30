
const link = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=01d9e7b4d713c38aec39e45459f44833&units=metric&lang=ca'

let temps = {
    nom:"",
    main: "",
    descripcio: "",
    icon: "",
    urlIcon: "", 
    //Patró imatge:"http://openweathermap.org/img/wn/" + icon +"@2x.png"   
    temperatura: "",
    sensacio: "",
    temp_min: "",
    temp_max: "",
    pressioAt: "",
    humitat: ""
};

//Funcions assíncrones

async function ObtenirTemps() {
    const response = await fetch(link);
    const data = await response.json();   
    if (response.status === 200) {
        temps.main = data.weather[0].main;
        temps.descripcio = data.weather[0].description;
        temps.icon = data.weather[0].icon;
        temps.urlIcon = "http://openweathermap.org/img/wn/" + temps.icon + "@2x.png"
        temps.temperatura = data.main.temp;
        temps.sensacio = data.main.feels_like;
        temps.temp_min = data.main.temp_min;
        temps.temp_max = data.main.temp_max;
        temps.pressioAt = data.main.pressure;
        temps.humitat = data.main.humidity;
        temps.nom = data.name;
        return temps
    }
    else {
        console.error("HTTP-Error, càrrega temps: " + response.status);
    }
}

async function MostrarImatge(vdades) {
    const divTemperaturaImatge = document.getElementById("divTemperaturaImatge")
    const response = await fetch(vdades["urlIcon"])

    if (response.status === 200) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const iImage = document.createElement('img');
        iImage.src = imageObjectURL;
        iImage.style.display = "inline";
        divTemperaturaImatge.append(iImage);
    }
    else {
        console.error("HTTP-Error, càrrega imatge: " + response.status);
    }   
}



function MostrarBannerTemps(visible)
{
    const divContainer = document.getElementById('divMeteoPare');
    if(visible=== false)
    {
        divContainer.style.display = "none"
    }else{
        divContainer.style.display = "inline-flex";
    }
}


/* ------------------------------------------------------------------------------------------------------------ */

function MostrarDadesCarrousel(vdades)
{
    const divLocation = document.getElementById('divLocation');
    const pLocation = document.createElement('p');
    pLocation.innerText = 'Lloc: ' +vdades["nom"];
    divLocation.appendChild(pLocation);

    const divTemperatura = document.getElementById('divTemperatura');
    const pTemperatura = document.createElement('p');
    pTemperatura.innerText = 'Temperatura: ' + vdades["temperatura"] +'º';
    divTemperatura.appendChild(pTemperatura);

    const divTempMin = document.getElementById('divTempMin');
    const pMin = document.createElement('p');
    pMin.innerText = 'Min: ' + vdades["temp_min"] + 'º';
    divTempMin.appendChild(pMin);

    const divTempMax = document.getElementById('divTempMax');
    const pMax = document.createElement('p');
    pMax.innerText = 'Max: ' + vdades["temp_max"] + 'º';
    divTempMax.appendChild(pMax);

    const divHumitat = document.getElementById('divHumitat');
    const pHumitat = document.createElement('p');
    pHumitat.innerText = 'Humitat: ' + vdades["humitat"] + '%';
    divHumitat.appendChild(pHumitat);
}

async function MostrarImatgeCarrousel(vdades) {
    const divImatge = document.getElementById("divImatge")
    const response = await fetch(vdades["urlIcon"])

    if (response.status === 200) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const iImage = document.createElement('img');
        iImage.src = imageObjectURL;
        iImage.style.display = "inline";
        divImatge.append(iImage);
    }
    else {
        console.error("HTTP-Error, càrrega imatge: " + response.status);
    }   
}

/*  MAIN */

document.addEventListener("DOMContentLoaded", async () => {
    try {       
        const dades = await ObtenirTemps();
        if (dades !== null)
        {
            MostrarBannerTemps(true);
            MostrarDadesCarrousel(dades);
            MostrarImatgeCarrousel(dades);
        }
        else
        {
            MostrarBannerTemps(false);
        }
    } catch (e) {
        console.error('ERROR:' + e);        
        MostrarBannerTemps(false);
    }
});

window.onload = function () {
    document.getElementById('closeCarrousel').onclick = function () {
        this.parentNode.parentNode.remove();
        return false;
    };    

};