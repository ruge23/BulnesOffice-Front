const CACHE_NAME3 = 'STORIES_CACHE-V3' //=>//install
//todos los eventos o metodos se ejecutan a traves del objeto self representa las sv
self.addEventListener('install',()=>{
    // Guardar los archivos iniciales en el Cache
    caches.open('CACHE_NAME3').then((cache)=>{
        //agregar archivo
        cache.addAll(['/index.html', '/dist/javascript/bundle.js'])//envia un arreglo con todos los archivos que queres que se guarden
    })
});

//actualizar el cache
self.addEventListener('activate', (ev)=>{
    ev.waitUntil(
        caches.keys().then((cacheNames)=>{
            
            let promises = cacheNames.map(cacheName =>{
                if(CACHE_NAME3 !== cacheName) return caches.delete(cacheName);
            });

            return Promise.all(promises)
        })
    )
});

self.addEventListener('fetch', (ev)=>{
    ev.respondWith(
        caches.match(ev.request)
            .then((response)=>{
                //console.log(response);
                return searchInCacheOrMakeRequeste(ev.request);
            }).catch((err)=>{
                //validar que el tipo de peticion sea de navegacion
                if(ev.request.mode == "navigate")
                    return caches.match(ev.request);
            })
    )
});

//funcion para hacer una peticion nueva y actualizar el cache
function searchInCacheOrMakeRequeste(request){
    //abrir el cache => Promesa
    const cachePromise = caches.open(CACHE_NAME3);
    //tratar de buscar lo que se me solicito en el cache
    const matchPromise = cachePromise.then((cache)=>{
        return cache.match (request);
    });

    //esperar a que ambas promesas se terminen
    return Promise.all([cachePromise, matchPromise]).then(([cache, cacheResponse])=>{

        const fetchPromise = fetch(request).then((fetchResponse)=>{
            //actualizar el cache    
            cache.put(request, fetchResponse.clone());
            
            return fetchResponse;
        })
        return cacheResponse || fetchPromise;
    })
}

//---------service worker
// funcionan de manera asincrona y se utilizan listener a los eventos que la sv esta pendiente de
//--eventos
//install: para la primera vez que se instala (descargar y guardar los archivos iniciales)
//activate: hace referencia al momento qe la sv se actualiza (mantener actualizado el repositorio de archivos)
//fetch: se evalua cada vez que se hace una peticion al servidor remoto es un evento para cada peticion

