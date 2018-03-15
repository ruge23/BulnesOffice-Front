import styles from './maps/styles';


function initMap(){
    
    const coords = {
        lat: -34.581544,
        lng: -58.406364,
    }
    
    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: coords,
        zoom:17,
        styles: styles,
    })
    
    let marker = new google.maps.Marker({
        position : coords,
        map,
        title: 'Office Bulnes',
    })
}

initMap();