import Knex from 'knex'

export async function seed(knex: Knex): Promise<any> {
    await knex('items').insert([
        {title: "Lãmpadas", image: "lampadas.svg"},
        {title: "Pilhas e baterias", image: "baterias.svg"},
        {title: "Papeis e papelão", image: "papeis-papelao.svg"},
        {title: "Residuos eletrônicos", image: "eletronicos.svg"},
        {title: "Residuos organicos", image: "organicos.svg"},
        {title: "Óleo de cozinha", image: "oleo.svg"}
    ])
}