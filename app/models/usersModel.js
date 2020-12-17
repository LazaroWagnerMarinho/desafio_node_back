function Usuario(connection){
    this._connection = connection;
}

Usuario.prototype.getUsers = function(callback){
    this._connection.query('select * from users', callback)
};

Usuario.prototype.getUserId = function(userId, callback){        
    const queryString = "SELECT * FROM users WHERE id = ?"
    this._connection.query(queryString, [userId], callback)
};

Usuario.prototype.saveUser = function(usuario, callback){
    this._connection.query('insert into users set ?', usuario, callback)
}

module.exports = function(){
    return Usuario;
}