import Food from "../models/Food.js";

const getFood = async (req, res) => {
  let data = await Food.findAll();
  res.send(data);
}

const getFoodById = async (req, res) => {
  let { food_id } = req.params;

  let data = await Food.findOne({ where: food_id });
  res.send(data);
}

const createFood = async (req, res) => {
  let { food_name, image, price, desc, type_id } = req.body
  const newData = { food_name, image, price, desc, type_id }
  await Food.create(newData);
  res.send("Thêm thành công");
}


const updateFood = async (req, res) => {
  let { food_id } = req.params;
  let { food_name, image, price, desc, type_id } = req.body
  const newData = { food_name, image, price, desc, type_id }
  await Food.update(newData, { where: { food_id } });
  res.send("Cập nhật thành công");
}

const deleteFood = async (req, res) => {
  let { food_id } = req.params;
  await Food.destroy({ where: { food_id } });
  res.send("Xóa thành công");
}

export { getFood, createFood, updateFood, deleteFood, getFoodById }
