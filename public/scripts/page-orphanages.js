const map = L.map('mapid').setView([-22.902637,-49.6342586], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criando icone

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

//criando o popup
const popup = L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//criando a marca no mapa
L.marker([-22.902637,-49.6342586], {icon})
    .addTo(map)
    .bindPopup(popup)