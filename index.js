document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    hamburguesaMenu();
    darkMode();
    crearGaleria();
    scrollNavegacion();
}
//Objeto Global
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

// Seleccionar HTML
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

// escuchar eventos
nombre.addEventListener('input', capturar);
email.addEventListener('input', capturar);
mensaje.addEventListener('input', capturar);

//DarkMode
function darkMode () {
    const btnOscuro = document.querySelector('.fa-moon');
    btnOscuro.addEventListener('click', function () {
        if(document.body.classList.contains('modoOscuro')) {
            document.body.classList.remove('modoOscuro');
        } else {
            document.body.classList.add('modoOscuro');
        }
    })
}

//Menu de Hamburguesa
function hamburguesaMenu () {
    const mobileMenu = document.querySelector('.fa-bars');
    mobileMenu.addEventListener('click', navegacionResponsive)
}

function navegacionResponsive () {
    const navegacion = document.querySelector('.navegacion');
    if(navegacion.classList.contains('visible')) {
        navegacion.classList.remove('visible')
    } else {
        navegacion.classList.add('visible')
    }
}


//Validar Formulario 
formulario.addEventListener ('submit', (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = datos 

    if (nombre === "" || email === "" || mensaje === "") {
        Swal.fire({
            icon: 'error',
            title: 'Complete los Campos',
            text: 'Todos los campos son obligatorios',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return;
    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado con Exito!',
        showConfirmButton: false,
        timer: 1500
      })

})

//Capturar datos 
function capturar(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos)
}

// Dar efecto de Scroll (Api de JavaScript)
function scrollNavegacion () {
    const enlaces = document.querySelectorAll('.navegacion a')
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior : "smooth"});
        } ) 

    })
}

//Crear Galeria
function crearGaleria () {
    const galeria = document.querySelector('.galeria');
    
    for(let i = 1; i <= 6 ; i++) {
        const imagen = document.createElement('div');
        imagen.innerHTML = `
        <img src="img/proyectos/${i}.jpg" alt="imagen galeria"> 
        `
        imagen.onclick = function () {
            mostrarPagina(i)
        }

        galeria.appendChild(imagen);
    }

}

// Mostrar mis proyectos en otra ventana
function mostrarPagina(id) {
if(id ==1) {
    window.open("https://appsalonbelleza-proyecto.netlify.app/");
} else if (id == 2){
    window.open("https://miproyecto-festivaldemusica.netlify.app/");
}
else if (id == 3) {
    window.open("https://castrellon1erproyecto.netlify.app/");
}
else if(id == 4) {
    window.open("https://modelodetiendavirtual.netlify.app/");
} 
else if (id == 5) {
    window.open("https://3erproyectocafe.netlify.app/");
}
else if (id == 6) {
    window.open("https://todoxelmate.netlify.app/");
}
}

