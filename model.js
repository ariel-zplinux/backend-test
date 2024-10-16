import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('postgres://user_name:password@localhost:5432/db_name');
await sequelize.authenticate();

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

// create table
await sequelize.sync();

async function getUsers(ctx) {
  const users = await User.findAll();

  ctx.body = users;
}

export default User;

export {
  getUsers
};