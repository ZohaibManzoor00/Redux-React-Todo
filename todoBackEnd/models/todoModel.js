const db = require('../db/db');

class ToDo {
    static getToDosFromDB = () => db.select().from('todo');
    static postToDoFromDB = (description) => db('todo').insert({description, completed: false}).returning('*');
    static updateToDoFromDB = (id) => db('todo').update({completed: true}).where({id}).returning('*');
    static deleteToDoFromDB = (id) => db.select().from('todo').where({id}).del();
}

module.exports = ToDo;