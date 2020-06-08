import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async create(req: Request, res: Response) {
        try {
          const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
          } = req.body
      
          const trx = await knex.transaction()
      
          const pointId = await trx('points').returning('id').insert({
            image: "image-fake",
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
          })
        
          const pointItems = items.map((item_id: number ) => {
           return {
              item_id,
              point_id: Number(pointId)
            }
          })
        
          await trx('points_items').insert(pointItems)
        
          return res.json("create success")
      
        } catch(err){
          const message = err.message
          if(message.includes('violates foreign key constraint')){
             return res.json("Item não existe")
          }
          return res.json({
            message: err.message,
            stack: err.stack
          })
        }
      }
}

export default new PointsController