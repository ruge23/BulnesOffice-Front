//---------service worker
// funcionan de manera asincrona y se utilizan listener a los eventos que la sv esta pendiente de
//--eventos
//install: para la primera vez que se instala (descargar y guardar los archivos iniciales)
//activate: hace referencia al momento qe la sv se actualiza (mantener actualizado el repositorio de archivos)
//fetch: se evalua cada vez que se hace una peticion al servidor remoto es un evento para cada peticion


const CACHE_NAME = 'STORIES_CACHE-V1'
//todos los eventos o metodos se ejecutan a traves del objeto self representa las sv
self.addEventListener('install',()=>{
    // Guardar los archivos iniciales en el Cache
    caches.open('CACHE_NAME').then((cache)=>{
        //agregar archivo
        cache.addAll(['/index.html'])//envia un arreglo con todos los archivos que queres que se guarden
    })
});

//actualizar el cache
self.addEventListener('activate', (ev)=>{
    ev.waitUntil(
        caches.keys().then((cacheNames)=>{
            
            let promises = cachesNames.map(cacheName =>{
                if(CACHE_NAME !== cacheName) return caches.delete(cacheName);
            });

            return Promise.all(promises)
        })
    )
})
