const option = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}

const map = L.map('mapid',option).setView([-22.902637,-49.6342586], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criando icone

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

//criando a marca no mapa
L.marker([-22.902637,-49.6342586], {icon})
    .addTo(map)


//GALERIA DE IMAGEM
function selectImage(event){
    const button = event.currentTarget

    //remover as classes active
        const buttons = document.querySelectorAll('.images button')
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove("active")
        }

    //selecionar a imagem clicada
        const image = button.children[0]
        const imageConatainer = document.querySelector('.orphanage-details > img')

    //atualizar o container de imagem
        imageConatainer.src = image.src
    //adicionar a classe .active para o botao

    button.classList.add("active")

}