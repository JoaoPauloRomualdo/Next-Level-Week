const Database = require('./db')

const saveOrphanages = require('./saveOphanage')

Database.then(async function (db) {
    //inserir dados na tabela 
    await saveOrphanages(db, {
        lat: "-22.8928242",
        
        lng: "-49.6392291",
        
        name: "Lar das meninas",

        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",

        whatsapp: "98989898",

        images: [
            "https://cdn.pixabay.com/photo/2020/10/05/20/03/boys-5630669__340.jpg",

            "https://cdn.pixabay.com/photo/2015/03/12/19/08/children-studying-670663__340.jpg",

            "https://cdn.pixabay.com/photo/2015/08/13/19/39/children-887393__340.jpg",

            "https://cdn.pixabay.com/photo/2018/05/13/14/52/boys-3396713__340.jpg",

            "https://cdn.pixabay.com/photo/2016/11/21/16/19/boy-1846236__340.jpg",

            "https://cdn.pixabay.com/photo/2015/02/01/12/31/feet-619399__340.jpg"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",

        opening_hours: "Horário de visitas Das 18h até 8h",

        open_on_weekends: "0"
        })

        //consultar dados na tabela
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")

        console.log(selectedOrphanages)

        //deletar dado da tabela
        // console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
    })