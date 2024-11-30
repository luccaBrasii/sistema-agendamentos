import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Agendamento = new Schema({
    
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
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
    comissao:{
        type: Number,
        required: true
    },
    valor:{
        type: Number,
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

export default mongoose.model('Agendamento', Agendamento) 