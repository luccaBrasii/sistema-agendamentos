import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SalaoSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório']
  },
  foto: String,
  capa: String,
  email: {
    type: String,
    required: [true, 'Email é obrigatório']
  },
  senha: {
    type: String,
    default: null
  },
  telefone: String,
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Salao', SalaoSchema);
