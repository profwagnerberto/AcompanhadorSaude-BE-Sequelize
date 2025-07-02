const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/db.sqlite",
  logging: false, // opcional: remove logs no console
});

console.log("Conectado ao SQLite");

sequelize.sync({ force: false }).then(() => {
  console.log("Tabelas sincronizadas com sucesso.");
});

module.exports = sequelize;
