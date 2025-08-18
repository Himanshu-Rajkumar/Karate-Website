const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
dotenv.config()


const app=express()
app.use(express.json())

app.use(cors());


const dbConnection=async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to database sucessfully')
    
  } catch (error) {
    console.log('database connection failed',error)
  }
}
// User Schema
const UserSchema=mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  message:{type:String,required:true}
})

// User Model
const UserModel=mongoose.model('karateUser',UserSchema);

app.get('/',(req,res)=>{
  res.send('Hello world')
})

// Add users
app.post("/addUser", async (req,res)=>{
  const newUser=req.body;
  try {
    await UserModel.create(newUser)
    res.status(200).send('User added sucessfully')
    
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(process.env.PORT,()=>{
  dbConnection()
  console.log(`Server is running on the port 8080`)
})