const db = require('../db/db');

class ToDo {
    static getToDosFromDB = () => db.select().from('reduxtodo').orderBy('id');
    static postToDoFromDB = (description) => db('reduxtodo').insert({description, completed: false}).returning('*');
    static updateToDoFromDB = (id) => db('reduxtodo').update({completed: true}).where({id}).returning('*');
    static deleteToDoFromDB = (id) => db.select().from('reduxtodo').where({id}).del();
}

module.exports = ToDo;