import { Request, Response } from "express"
import knex from '../database/connection'

class ItemsController {
    async getAll (req: Request, res: Response) {
        try {
            const item = await knex('items').select('*')
      
            const serializedItems = item.map((item: any )=> {
                return {
                    id: item.id,
                    title: item.title,
                    imageUrl: `http://localhost:3333/uploads/${item.image}`
                }
        })
            return res.json(serializedItems)
        } catch(err){
            return console.error(err)
        }
    }
}

export default new ItemsController