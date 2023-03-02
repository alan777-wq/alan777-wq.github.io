function skills() {
    let text = document.getElementById('text');
    let tit = document.getElementById('tit');
    text.innerHTML = "Transmitir información de forma eficaz y comunicar opiniones con seguridad, confianza y convicción. Esto es una habilidad importante, que permite que sean valoradas las opiniones del trabajador e incluso logre convencer a los demás. Dentro de las capacidades para comunicarse, los reclutadores consideran las escucha activa, la habilidad para interactuar con asertividad, empatía y además de relaciones sociales cordiales, recíprocas y cálidas con su entorno y red de contacto. El fin es favorecer a los proyectos dentro y fuera de la empresa."
    tit.innerHTML = "Skills";
}


function experiencia() {
    let text = document.getElementById('text');
    let tit = document.getElementById('tit');
    tit.innerHTML = "Experiencia";
    text.innerHTML = "Llamamos experiencia laboral en el currículum (o experiencia profesional) a la sección del currículum donde detallas todas aquellas actividades, conocimientos y aptitudes que has adquirido con el trabajo en una o más organizaciones y que te permiten mostrar tu cualificación como candidato a un nuevo puesto de trabajo."
}

function enviar() {
    let nom = document.getElementById("nom");
    let cognom = document.getElementById("cognom");
    let area = document.getElementById("area");
    if (nom.value !=""&&cognom.value !=""&&area.value !="") {
        alert("Mensaje enviado corrctamente")
        
    }
    else{

    }
}