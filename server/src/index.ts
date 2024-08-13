import express, {Express} from 'express';
import mongoose from 'mongoose';
import financialRecordRouter  from './routes/financial-records';
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
// app.use(cors());
app.use(cors({
    // origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type']
}));


const mongoURI: string = 
    "mongodb+srv://username:password@personalfinancetracker.fehu9.mongodb.net/";

mongoose
.connect(mongoURI)
.then(()=> console.log(`CONNECTED TO MONGODB`))
.catch((err)=>console.error(`Failed to Connect MongoDB: `, err));

app.use("/financial-records",financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
}) 