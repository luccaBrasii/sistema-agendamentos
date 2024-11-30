import express from 'express'
import SalaoSchema from '../models/salao.js';
import servicoSchema from '../models/servicos.js';
const router = express.Router()


router.post('/', async (req, res)=>{
      try{
          const salao = await new SalaoSchema(req.body).save()
          res.json({salao})
      } catch(err){
          res.json({error: true, message: err.message})
      }
})

router.get('/servicos/:salaoId', async (req, res) =>{

    try{
        const { salaoId } = req.params
        const servicos = await servicoSchema.find({
          salaoId,
          status: 'Ativo'
        }).select('_id titulo')

        res.json({
          servicos: servicos.map(s=>({
            label: s.titulo,
            value: s._id
          }))
        })

    } catch(err){
        res.json({error: true, message: err})
    }
})

export default router;