export default class Preloader {
    //metodos esticos
    static preloadImages({images, completed}){//va a precargar un arreglo de imagenes 
        //imagenes => |arreglo con todas la imagenes|
        const promises = images.map(imagePath => Preloader.preloadImage({imagePath}));
        
        //enviar un arreglo con muchas promesas
        Promise.all(promises).then(completed);
    }

    static preloadImage({imagePath}){//precargar una imagen individula | argumento => ruta donde se encuentra la imagen |
        //Promesa para saber cuando termina de precargar la imagen
        return new Promise((res, rej)=> {
            let image = new Image();
            image.src = imagePath;
            image.onload = res;
            // esta promesa se cumple hasta que el metodo onload se termina y ejecuta fn res.
        })
    }
}