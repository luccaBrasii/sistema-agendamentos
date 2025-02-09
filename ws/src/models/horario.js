import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Horario = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    especialidades: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Servico',
            required: true
        }
    ],
    colaboradores: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Colaborador',
            required: true
        }
    ],
    dias: {
        type: [Number],
        required: true
    },
    inicio:{
        type: Date,
        required: true
    },
    fim:{
        type: Date,
        required: true
    },
    dataCadasto:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Horario', Horario)