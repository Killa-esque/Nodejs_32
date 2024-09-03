const getUser = (req, res) => {

  res.send("get người dùng");
}

const createUser = (req, res) => {
  res.send("Create user")
}

export { getUser, createUser }
