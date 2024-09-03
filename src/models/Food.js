import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "./index.js";

class Food extends Model { }

Food.init({
  food_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type_id: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },

  
}, {
  sequelize: sequelize,
  modelName: 'Food',
  tableName: 'food',
  timestamps: false
})

export default Food;
