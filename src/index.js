// yarn init => tạo ra được package.json

// yarn add express

import cors from 'cors';
import rootRouter from './routers/rootRouter.js';
import express from 'express';

const app = express();

// middle ware => những dòng lệnh, hàm chính giữa để xử lý một vấn đề gì đó
app.use(express.json()) // middleware giúp BE đọc được cấu trúc JSON

app.use(cors()); // middleware chấp nhận cho tất cả domain FE truy cập vào BE này


app.listen(8080); // tạo server BE với port = 8080

app.use("/api", rootRouter)

// node index.js => khởi chạy server bằng môi trường node

// yarn add nodemon => auto reset server khi save



// tạo API => EndPoint, method
// GET: /demo
// GET: localhost:8080/demo
// app.post("/demo/:id2", (req, res) => {

//   // request
//   // params: lấy data trên url
//   // - query string: /demo?id=1&hoTen=abc
//   let { id, hoTen } = req.query;

//   // - query params: localhost:8080/demo/1
//   let { id2 } = req.params;

//   // body: lấy data thông qua cấu trúc JSON => thường POST, PUT, DELETE
//   let { userId, userName, email, phone } = req.body;

//   // data trả từ BE về FE
//   res.status(201).json({
//     userId,
//     userName,
//     email,
//     phone
//   }); // string, object, list object,.... trừ number
// });

// // SELECT * FROM nguoi_dung
// import mysql from 'mysql2';
// const connect = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: "3308",
//   database: "db_node32"
// })

// quy tắc đặt tên endpoint: viết thường cách nhau bởi gạch ngangc

