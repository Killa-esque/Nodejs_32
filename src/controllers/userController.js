const iniModels = require('../models/init-models');
// import chuỗi kết nối CSDL
const sequelize = require('../models/index');

const { successCode, errorCode, failCode } = require('../config/response');
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const userLogin = async (req, res) => {

    try {

        //  username và password
        let { email, password } = req.body;

        // find user.email = email && user.pass_word=password
        let checkUser = await model.user.findOne({
            where: {
                email: email
            }
        })

        // user tồn tại > kiểm tra tiếp mật khẩu
        if (checkUser) {

            if (checkUser.pass_word == password) {

                successCode(res, "token", "Login success");
            } else {
                errorCode(res, "", "pass word not found");

            }

        } else {
            // user ko tồn tại > ko cho đăng nhập
            errorCode(res, "", "email not found");
        }

    }
    catch (err) {
        failCode(res, "Lỗi BE");
    }
}

const signUp = async (req, res) => {

    try {

        let { full_name, email, pass_word } = req.body;
        let data = { full_name, email, pass_word };

        // mã hóa password

        await model.user.create(data);

        successCode(res, data, "Sign up success");
    }
    catch (err) {
        failCode(res, "Lỗi BE");
    }
}


const getUser = (req, res) => {
    res.send("get user");
}

const createUser = (req, res) => {
    res.send("create user");
}


//commonjs 
module.exports = {
    getUser,
    createUser,
    userLogin,
    signUp
}