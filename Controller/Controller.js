const List = require("../Model/list");

// GET - Lisata todas as tarefas
exports.getFindList = async (req, res) => {
  await List.find({})
    .then((list) => {
      res.status(200).send(list);
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado", err);
    });
};

// GET - Busca as tarefas por ID
exports.getFindById = async (req, res) => {
  await List.findById({ _id: req.params.id })
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// GET - Busca as tarefas por título
exports.getFindByTitle = async (req, res) => {
  await List.find({ title: req.params.title })
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// GET - Busca as tarefas por prioridade
exports.getFindByPriority = async (req, res) => {
  await List.find({ priority: req.params.priority })
    .then((list) => {
      res.status(200).send(list);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// POST - Adiciona tarefa
exports.postAddTask = async (req, res) => {
  const task = req.body;
  if (!Object.keys(task).length) {
    res.status(400).send("O objeto está em branco");
  } else {
    await List.create(task)
      .then((task) => {
        res.status(200).send({ 
          Cadastrado: {task},
          Messeger: "Cadastro Realizado"
        });
      })
      .catch((err) => {
        res.status(400).send(err, {
          Messeger: "Cadastro não realizado"
        });
      });
  }
};

// PUT - Atualiza tarefa
exports.putUpdateTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body;
  if (!task) {
    res.status(400).send("Error: É necessário passar ao menos uma chave.");
  } else {
    await List.updateOne({ _id: id }, req.body)
      .then(async () => {
        const task = await List.find({ _id: id });
        res.status(200).send(task);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

// DELETE - Deleta tarefa
exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await List.findOne({ _id: id });
  if (!task) {
    res.status(404).send("Tarefa não encontrada!");
  } else {
    await List.deleteOne({ _id: id })
    .then(() => {
        res.status(200).send({status: {task}})
    })
    .catch((err) => {
        res.status(400).send({status: "Error", error: err})
    })
  }
};
