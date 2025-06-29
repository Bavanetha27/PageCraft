/*const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const fs = require('fs');
const Book = require('D:/backend works/project3/modles/book.js');

dotenv.config();

const publicPath = path.join(__dirname, "public");



app.use(express.static(publicPath));

app.use(express.json());//accept the json format values
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./routes/authroutes");

app.use(cookieParser());


mongoose.connect(process.env.DB_URL)
              .then(() => {
                console.log('Connected to MongoDB');
              })
              .catch(err => {
                console.error('Error connecting to MongoDB: ' + err.message);
              });


              
//app.use("/api/user",authRoutes);

app.use('/auth', authRoutes);

app.listen(5000,()=>{
    console.log("server installed...");
})*/

/*const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Book = require('./models/book'); // Ensure correct path
const gridfsStream = require('gridfs-stream');
const Grid = require('gridfs-stream');

// Connection to MongoDB




dotenv.config();

const publicPath = path.join(__dirname, "public");



app.use(express.static(publicPath));

app.use(express.json());//accept the json format values
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./routes/authroutes");

app.use(cookieParser());


app.use('/auth', authRoutes);

// MongoDB connection setup
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        
    })
    .catch(err => {
        console.error('Error connecting to MongoDB: ' + err.message);
    });

// Multer setup
/*const storage = new GridFsStorage({
    url: process.env.DB_URL,
    file: (req, file) => {
        return {
            bucketName: 'uploads',
            filename: `${Date.now()}-${file.originalname}`
        };
    }
});
const upload = multer({ storage });


// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route setup
app.post('/api/books', upload.single('pdf'), async (req, res) => {
    try {
        const { title, author, description } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            pdf: {
                data: req.file.buffer, // Buffer containing the binary data of the uploaded PDF
                contentType: req.file.mimetype // MIME type of the uploaded PDF
            }
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to add book.' });
    }
});




app.listen(5000, () => {
    console.log("Server started on port 5000...");
});
*/
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");


dotenv.config();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authRoutes = require("./routes/authroutes");

app.use('/auth', authRoutes);

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB: ' + err.message);
    });




app.listen(5000, () => {
    console.log("Server started on port 5000...");
});

