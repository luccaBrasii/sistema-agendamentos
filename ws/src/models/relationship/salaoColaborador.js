import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SalaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['Ativo', 'Inativo'],
        default: 'Ativo'
    },
    dataCadasto:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('SalaoColaborador', SalaoColaborador)