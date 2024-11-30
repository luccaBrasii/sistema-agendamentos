import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Cliente = new Schema({
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
    
    dataCadasto:{
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Cliente', Cliente)

