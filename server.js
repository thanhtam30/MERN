const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const app=express();
//BodyPaser
app.use(bodyParser.json());
//DB config
const db=require('./config/key').mongoURL;

app.use('/api/items', require('./routes/api/items'))

//connect mongoose
mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('Ket noi thanh cong'))
.catch(err=>console.log(err))
const port=process.env.PORT||3001;


app.listen(port,()=>console.log(`server start is port ${port}`));