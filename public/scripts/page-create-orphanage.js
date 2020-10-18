const map = L.map('mapid').setView([-22.902637,-49.6342586], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criando icone
    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize:[58, 68],
        iconAnchor:[29, 68],
    })

let marker;

// Adicionar um novo local
    map.on('click', function(event){
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lng;


        // removendo o icone
        marker && map.removeLayer(marker)

        //adiciondo o icon ao mapa
        marker = L.marker([lat , lng],{ icon }).addTo(map)
    })

//adicionar o campo de fotos
function addPhotofield(){
    //pegando o container de fotos
        const container = document.querySelector('#images')
    
    //pegar o container para duplicar
        const fieldContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adiconada
        const newFieldContainer = fieldContainer[fieldContainer.length -1]
            .cloneNode(true)

    //verificar se esta vazio
        const input = newFieldContainer.children[0]
        if(input.value == ""){
            return
        }
    //limpar o campo antes de adicionar ao container de imagens
        input.value = ""

    // adicionar o clone ao container de imagem
        container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')

    if (fieldContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove()


}

// selecionar o sim e nao
function toggleSelect(event) {
    //retirar a classe active do botao clicado
        document.querySelectorAll('.button-select button')
            .forEach(function(button){
                button.classList.remove('active')
        })

    //colocar a classe active
        
    
    //pegar o botao clicado
        const button = event.currentTarget

        button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')

        input.value = button.dataset.value
}

// function validate(event){
//     //validar os lat e lng

//     event.preventDefault()
//     alert("preencha os campos dos mapas")
// }