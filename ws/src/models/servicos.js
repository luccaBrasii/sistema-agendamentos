import mongoose from 'mongoose'
const Schema = mongoose.Schema

const servicoSchema = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    comissao:{
        type: Number, // % de comissão sobre o preço
        required: true
    },
    duracao:{
        type:Number, // duração em minutos
        required: true
    },
    recorrencia:{
        type:Number, // em dias
        required: true
    },
    descricao:{
        type:String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Ativo', 'Inativo', 'Excluido'],
        default: 'Ativo'
    },
    dataCadasto:{
        type: Date,
        default: Date.now
    }
})



export default mongoose.model('Servico', servicoSchema)

