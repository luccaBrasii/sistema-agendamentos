import mongoose from 'mongoose'
const URI = 'mongodb+srv://luccabrasies:KksK8dIxngpVsjKs@agendamentos.zw0tk.mongodb.net/agendamentos'

/*
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
*/

function connectDB(){
    mongoose.connect(URI)
    .then(()=> console.log('DB --ON--'))
    .catch(()=> console.log('DB --OFF--'))
}

export default connectDB