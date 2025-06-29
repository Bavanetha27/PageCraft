const express = require("express");
const path = require("path");
const authRoutes = express.Router();
const User = require("../models/user");
const {hashGenerate} = require("../helper/hashing");
const {hashValidator} = require("../helper/hashing");
const {tokenGenerator} = require("../helper/tokens");
const authVerify = require("../helper/authVerify");
const Book = require("../models/book"); // Ensure correct path
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });




// Define storage for uploading PDF files
/*const storage = multer.memoryStorage();
const upload = multer({ storage: storage });*/


authRoutes.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/admin.html"));
})

authRoutes.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/index.html"));
})

authRoutes.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/login.html"));
})

authRoutes.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/signup.html"));
})

authRoutes.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/home.html"));
})



authRoutes.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/about.html"));
})

authRoutes.get("/resource",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/mainResource.html"));
})

authRoutes.get("/resource1",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/resource.html"));
})

authRoutes.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/contact.html"));
})

//for books pages
authRoutes.get("/book1",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book1.html"));
})

authRoutes.get("/book2",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book2.html"));
})

authRoutes.get("/book3",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book3.html"));
})

authRoutes.get("/book4",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book4.html"));
})

authRoutes.get("/book5",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book5.html"));
})

authRoutes.get("/book6",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book6.html"));
})

authRoutes.get("/book7",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book7.html"));
})

authRoutes.get("/book8",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book8.html"));
})

authRoutes.get("/book9",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book9.html"));
})

authRoutes.get("/book10",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book10.html"));
})

authRoutes.get("/book11",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book11.html"));
})

authRoutes.get("/book12",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book12.html"));
})

authRoutes.get("/book13",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book13.html"));
})

authRoutes.get("/book14",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book14.html"));
})

authRoutes.get("/book15",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book15.html"));
})

authRoutes.get("/book16",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book16.html"));
})

authRoutes.get("/book17",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book17.html"));
})

authRoutes.get("/book18",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book18.html"));
})

authRoutes.get("/book19",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book19.html"));
})

authRoutes.get("/book20",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book20.html"));
})

authRoutes.get("/book21",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book21.html"));
})

authRoutes.get("/book22",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book22.html"));
})

authRoutes.get("/book23",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book23.html"));
})

authRoutes.get("/book24",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/book24.html"));
})

authRoutes.get("/profile",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/profile.html"));
})


authRoutes.post("/signup",async (req,res)=>{
    try{
        const hashPassword = await hashGenerate(req.body.password);
        const user = new User({
           
            email:req.body.email,
            password:hashPassword,
            confirmPassword:hashPassword
        });
    
        //const savedUser = 
        await user.save();
        //await collection.insertMany([data]);
       
        res.redirect("/auth/home");
        //res.json({ email: user.email });
        
    }
    catch(err){
        res.send(err);
    }
   
});


authRoutes.post("/login",async (req,res)=>{

    try{
        const existingUser = await User.findOne({email:req.body.email});
        if(!existingUser){
            res.send("Email is invalid");
        
        }
        else{
            const checkUser = await hashValidator(req.body.password,existingUser.password);
            if(!checkUser){
                res.send("Invalid");
            }
            else{
                const token = await tokenGenerator(existingUser.email);
                res.cookie("jwt",token);
                //res.send("Login successful");
                if(existingUser.email == "admin@gmail.com")
                    res.redirect("/auth/admin");
                else
                    res.redirect("/auth/home");
                //res.sendFile(path.join(__dirname,"../templates/home.html"));
            }
        }
    }
    catch(error){
        res.send(error);
    }
    
});

authRoutes.get("/protected",authVerify ,async (req,res)=>{
    res.send("protected route");

    
});

authRoutes.get('/api/test', (req, res) => {
    res.send('Server is running');
});

authRoutes.post('/api/books', upload.single('pdf'), async (req, res) => {
    try {
        const { title, author, description } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            pdf: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to add book.' });
    }
});

/*authRoutes.post("/api/books", upload.single("pdf"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No PDF file uploaded.' });
        }

        const { title, author, description } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            pdf: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to add book.' });
    }
});

authRoutes.get("/download/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book || !book.pdf || !book.pdf.data) {
            return res.status(404).json({ message: 'Book or PDF not found.' });
        }

        res.set({
            'Content-Type': book.pdf.contentType,
            'Content-Disposition': `attachment; filename=${book.title}.pdf`
        });

        res.send(book.pdf.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to download PDF.' });
    }
});
*/
/*authRoutes.post("/api/books", upload.single('pdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No PDF file uploaded.' });
        }

        const { title, author, description } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            pdf: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to add book.' });
    }
});

// Route to handle book download
authRoutes.get('/download/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.set({
            'Content-Type': book.pdf.contentType,
            'Content-Disposition': `attachment; filename=${book.title}.pdf`
        });

        res.send(book.pdf.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to download book.' });
    }
});
*/


module.exports = authRoutes;

