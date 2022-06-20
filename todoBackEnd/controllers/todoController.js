const ToDo = require('../models/todoModel');

const getToDos = async (req, res) => {
    const todos = await ToDo.getToDosFromDB();
    return res.status(200).json(todos);
};

const postToDo = async (req, res) => {
    const { description } = req.body;
    if (!description) return res.status(404).json("No Description");
    const posted = await ToDo.postToDoFromDB(description);
    return res.status(201).json(posted);
};

const updateToDo = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(404).json("Todo Does Not Exist");
    const updated = await ToDo.updateToDoFromDB(id);
    return res.status(201).json(updated);
}

const deleteToDo = async (req, res) => {
    const id = req.params.id;
    const deleted = await ToDo.deleteToDoFromDB(id);
    return res.status(202).json(deleted);
}

module.exports = {
    getToDos,
    postToDo,
    updateToDo,
    deleteToDo
}