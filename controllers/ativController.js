const Atividade = require("../models/Atividade");

exports.incluir = async (req, res) => {
  try {
    const { usuarioId, tipo, descricao, duracao, calorias } = req.body;
    const atividade = await Atividade.create({
      tipo,
      descricao,
      duracao,
      calorias,
      usuarioId,
    });
    res.status(201).json({ sucesso: true, atividade });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

exports.pegarPeloId = async (req, res) => {
  try {
    const atividade = await Atividade.findByPk(req.params.id);
    if (!atividade) {
      return res
        .status(404)
        .json({ sucesso: false, mensagem: "Atividade não encontrada." });
    }
    res.status(200).json({ sucesso: true, atividade });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

exports.alterar = async (req, res) => {
  try {
    const { usuarioId, tipo, descricao, duracao, calorias } = req.body;

    const atividade = await Atividade.findByPk(req.params.id);

    if (!atividade) {
      return res
        .status(404)
        .json({ sucesso: false, mensagem: "Atividade não encontrada." });
    }

    await atividade.update({
      tipo,
      descricao,
      duracao,
      calorias,
      usuarioId,
    });

    res.status(200).json({ sucesso: true, atividade });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

exports.excluir = async (req, res) => {
  try {
    const atividade = await Atividade.findByPk(req.params.id);
    if (!atividade) {
      return res
        .status(404)
        .json({ sucesso: false, mensagem: "Atividade não encontrada." });
    }
    await atividade.destroy();
    res.status(200).json({ sucesso: true, mensagem: "Atividade excluída." });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};
