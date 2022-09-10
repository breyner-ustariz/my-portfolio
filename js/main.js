let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


/*botones*/
const btnClose = document.getElementById('btn-close');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const imgs = document.querySelectorAll('.galeriajs img');
const imgs1 = document.querySelectorAll('.galeriadesign img');
const lightbox = document.getElementById('contenedor-imagenes');
const lightbox1 = document.getElementById('contenedor-img');
const imagenActiva = document.getElementById('img-activa');
const imagenActiva1 = document.getElementById('img-activa1');
const btnCerrar = document.getElementById('btn-close2'); 
const btnAtras = document.getElementById('btn-atras'); 
const btnSiguiente = document.getElementById('btn-siguiente'); 
let indiceImagen = 0;
let indiceImagen1 = 0;

// open lightbox
const openLightbox = (event) => {
    
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imgs).indexOf(event.target);
    
}
const openLightbox1 = (event) => {
    
    imagenActiva1.src = event.target.src;
    lightbox1.style.display = 'flex';
    indiceImagen1 = Array.from(imgs1).indexOf(event.target);
}

imgs1.forEach((imagenes) =>{
    
    imagenes.addEventListener('click', openLightbox1)
})
imgs.forEach((imagen)=> {
    
    imagen.addEventListener('click', openLightbox)
})

// button close
btnClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
})
// button close
btnCerrar.addEventListener('click', () => {
    lightbox1.style.display = 'none';
})


// button next img
const nextImg = () => {
    
    if (indiceImagen === imgs.length - 1){
        indiceImagen = -1;
    }
    imagenActiva.src = imgs[indiceImagen + 1].src;
    indiceImagen++;
};
btnNext.addEventListener('click',nextImg);
// button siguiente

const siguiente = () => {
    console.log('click')
    if (indiceImagen1 === imgs1.length - 1){
        indiceImagen1 = -1;
    }
    imagenActiva1.src = imgs1[indiceImagen1 + 1].src;
    indiceImagen1++;
};
btnSiguiente.addEventListener('click', siguiente);

// button back img
const backImg = () => {
    
    if (indiceImagen === 0){
        indiceImagen = imgs.length;
    }
    imagenActiva.src = imgs[indiceImagen - 1].src;
    indiceImagen--;
};
btnBack.addEventListener('click',backImg);