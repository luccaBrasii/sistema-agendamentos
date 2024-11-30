import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ColaboradorServico = new Schema({
    
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    },
    ServicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
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

export default mongoose.model('ColaboradorServico', ColaboradorServico)