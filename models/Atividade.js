const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const Usuario = require("./Usuario");

const Atividade = sequelize.define(
  "Atividade",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.ENUM("exercício", "refeição", "água", "sono"),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    calorias: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id", 
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "atividade",
    timestamps: false, // ou true se quiser Sequelize gerenciando createdAt/updatedAt
  }
);

// Define a associação
Atividade.belongsTo(Usuario, {
  foreignKey: "usuarioId",
  targetKey: "id", 
});

module.exports = Atividade;

