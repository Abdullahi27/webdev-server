const { v4: uuidv4 } = require("uuid");

function UsersDao(db) {
  let { users } = db;

  const findUserByCredentials = (
    username,
    password
  ) =>
    users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

  const findUserByUsername = (username) =>
    users.find(
      (user) =>
        user.username === username
    );

  const findUserById = (userId) =>
    users.find(
      (user) =>
        user._id === userId
    );

  const createUser = (user) => {
    const newUser = {
      ...user,
      _id: uuidv4(),
    };

    users = [
      ...users,
      newUser,
    ];

    return newUser;
  };

  const updateUser = (
    userId,
    user
  ) => {
    users = users.map((u) =>
      u._id === userId
        ? user
        : u
    );

    return users;
  };

  return {
    findUserByCredentials,
    findUserByUsername,
    findUserById,
    createUser,
    updateUser,
  };
}

module.exports = UsersDao;