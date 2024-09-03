const express = require('express');
const foodRouter = express.Router();

const { getFood, createFood, updateFood, removeFood } = require('../controllers/foodController');


// API POST method upload
// yarn add multer
foodRouter.post("/upload", upload.single("file"), (req, res) => {

    // lưu image :  file.filename
    let file = req.file;

    fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {

        // => băm base64 => load hoặc lưu dự liệu
        let fileBase = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
        
        // => xóa hình
        //xóa file
        fs.unlink(process.cwd() + "/public/img/" + file.filename, (err) => { });

        res.send(fileBase);
    })

    // tạo file
    // fs.writeFileSync(process.cwd() + "/public/file/data.txt", "Hello node29", (err) => { });
    // 1 hình = 1Mb : 10000 => 10Gb

    // tối ưu hóa file
    // 1 hình = 1Kb : 10000 => 10Mb

    // width, height
    // giảm mật độ điểm ảnh

})



// tạo API 
// API get food
foodRouter.get("/get-food", getFood);

// API create food
foodRouter.post("/create-food", createFood);

// API update food
foodRouter.put("/update-food/:food_id", updateFood);

// API delete food
foodRouter.put("/remove-food/:food_id", removeFood);

module.exports = foodRouter;
