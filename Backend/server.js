import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// app config
const app = express();
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json());
app.use(cors())

//api endpoints

//localhost:4000/api/admin/add-doctor
app.use('/api/admin', adminRouter)


app.get('/', (req, res) => {
    res.send('API WORKING PROPERLY');
})

app.listen(PORT, () => {
    console.log("server is running on",PORT)
})