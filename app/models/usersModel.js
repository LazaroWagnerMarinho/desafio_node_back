function Usuario(){

}

Usuario.prototype.getUsers = function(connection, callback){
    connection.query('select * from users', callback)
};

Usuario.prototype.getUserId = function(userId, connection, callback){        
    const queryString = "SELECT * FROM users WHERE id = ?"
    connection.query(queryString, [userId], callback)
};

Usuario.prototype.saveUser = function(usuario, connection, callback){
    connection.query('insert into users set ?', usuario, callback)
}

module.exports = function(){
    return Usuario;
}