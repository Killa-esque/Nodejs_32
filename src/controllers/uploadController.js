const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, process.cwd() + "/public/img"),
  filename: (req, file, callback) => {

    // datetime
    // milisecond
    let newName = Date.now() + "_" + file.originalname;
    // 165323912839_file.jpg

    callback(null, newName);
  }
})

// file System
const fs = require('fs');

const upload = multer({ storage }) // object literals
