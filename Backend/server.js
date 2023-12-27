const express = require('express');
const connectDB = require('./connection');
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(cors());

connectDB();

const router = require('./router')
app.use('/auth', router)
app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Welcome to the'
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));