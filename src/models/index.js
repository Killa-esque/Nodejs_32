import { Sequelize } from "sequelize";

let sequelize = new Sequelize("db_food", "root", "1234", {
  host: 'localhost',
  dialect: 'mysql',
  port: '3308'
})


export default sequelize;
