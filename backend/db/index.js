import chalk from "chalk";
import { Sequelize, DataTypes } from "sequelize";

import loadFixtures from "./loadFixtures.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: false },
);

const Group = sequelize.define(
  "Group",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { timestamps: false },
);

const UserGroup = sequelize.define("UserGroup", {}, { timestamps: false });

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

const models = { sequelize, User, Group, UserGroup };

console.log(chalk.yellow("Initializing database..."));
await sequelize.sync({ force: true });
await loadFixtures(models);
console.log(chalk.green(" ... database initialization complete"));

export default models;
