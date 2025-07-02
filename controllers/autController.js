const Usuario = require("../models/Usuario");

exports.criar = async (req, res) => {
  try {
    const { apelido, email, senha } = req.body;
    const usuario = await Usuario.create({ apelido, email, senha });
    res.status(201).json({ sucesso: true, usuario });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

exports.entrar = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findByPk(email);

    if (!usuario) {
      return res
        .status(404)
        .json({ sucesso: false, mensagem: "Usuário não encontrado." });
    }

    if (usuario.senha !== senha) {
      return res
        .status(401)
        .json({ sucesso: false, mensagem: "Senha incorreta." });
    }

    res.status(200).json({ sucesso: true, mensagem: "Entrou com sucesso." });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};
