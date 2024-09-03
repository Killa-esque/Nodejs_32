// B1: tạo file index.js
// B2: Chạy lệnh yarn init => tạo ra file package.json
// B3: Cập nhật file package.json
//  + "type": "module"
//  + "script": "nodemon index.js"
// B4: yarn add express dotenv nodemon
// B5: setup như bên dưoi

// Cài prisma: yarn add prisma @prisma/client 

import express from "express";

const app = express();
app.listen(8080);


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


app.get("/demo", async (req, res) => {
  let data = await prisma.food.findMany({
    // where: {
    //   food_name: {
    //     contains: "a"
    //   }
    // }
    include: {
      food_type: true
    }
  });

  await prisma.food.findMany() // list object
  await prisma.food.findUnique() //  object
  await prisma.food.findFirst() //  object
  res.send(data)
})


app.post("/create-food/:food_id", async (req, res) => {

  let { food_id } = req.params;

  let { food_name, image, price, desc, type_id, color } = req.body;

  let newData = { food_name, image, price, desc, type_id, color };

  await prisma.food.create({ data: newData });
  await prisma.food.update({ data: newData, where: { food_id: Number(food_id) } });
  await prisma.$queryRaw("SELECT * FROM food")
})


import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";


const schemaGraphql = new buildSchema(`
  type User{
    user_id: Int
    full_name: String
    email: String
    pass_word: String
  }

  type RootQuery{
    getUser: String
    getListUser(user_id: Int, email: String): [User]
  }
  
  type RootMutation{
    createUser: String
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

`);

const resolver = {
  getUser: () => {
    return "HI"
  },
  getListUser: async ({ user_id, email }) => {
    let data = await prisma.user.findMany({
      where: {
        user_id,
        email
      }
    })
    return data;
  }

}


app.use("/graphql", graphqlHTTP({
  schema: schemaGraphql, // định nghĩa và quản lí các object
  rootValue: resolver, // định nghĩa và quản lí hàm để gán data cho objecy
  graphiql: true
}))
