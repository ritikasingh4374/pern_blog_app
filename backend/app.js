// This file (app.js) initializes the Express server 
//  defines API routes for managing blogs.
// It connects to a PostgreSQL database using pg, 
// handles file uploads with multer, and allows cross-origin requests with cors."


const express = require('express')
const app = express()
const port = 3000;
const client = require('./db/conn.js');
const cors = require('cors');

app.use(express.json());  //Enables JSON request parsing.
app.use(cors()); //Allows the frontend (React) to make API requests to this backend.
app.use('/uploads',express.static('uploads')); //Serves static image files uploaded by users.

const multer  = require('multer')
//defines the location (uploads/) and file naming convention (Date.now() + original name).
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });  
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.json({"message":'Hello World 123!'})
});


//Fetches blogs based on category. If all is passed as a category, it retrieves all blogs
app.get('/blog/:cat',async (req, res) => {
    const result = await client.query(
      req.params.cat != 'all' ? `SELECT * from blogs where category = '${req.params.cat}'` : 'SELECT * from blogs'
    );
    res.json({"data":result.rows})
});

//Fetches a single blog by its unique ID."
app.get('/blogbyid/:id',async (req, res) => {
  const result = await client.query(`SELECT * from blogs where id = ${req.params.id}`);
  res.json({"data":result.rows})
});


//Adds a new blog post to the database with fields: title, image, post content, and category."
app.post('/blog',async (req, res) => {
    const result = await client.query('INSERT INTO blogs (title,image,post,category) VALUES ($1,$2,$3,$4)',[
        req.body.title,req.body.image,req.body.post,req.body.category
    ]);
    res.json({"message":"Added new blog","desc":result.rowCount});
});

//Uploads an image file and returns its details."
app.post('/blogimage', upload.single('file'), function (req, res, next) {
    res.json(req.file);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})