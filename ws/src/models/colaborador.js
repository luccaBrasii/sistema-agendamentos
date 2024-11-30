import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Colaborador = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    telefone: {
        type: String,
        required: [true, 'telefone é obrigatório']
    },
    dataNascimento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
    status: {
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



export default mongoose.model('Colaborador', Colaborador)

