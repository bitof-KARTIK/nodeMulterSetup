const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/multerdbtest');
const userSchema=new mongoose.Schema({
    name:String,
    userName:String,
    image:String
})
mongoose.model('user',userSchema);