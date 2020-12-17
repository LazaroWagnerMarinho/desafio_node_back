module.exports = function(){

    this.getUsers = function(connection, callback){
        connection.query('select * from users', callback)
    };

    this.getUserId = function(userId, connection, callback){        
        const queryString = "SELECT * FROM users WHERE id = ?"
        connection.query(queryString, [userId], callback)
    };

    this.saveUser = function(usuario, connection, callback){
        connection.query('insert into users set ?', usuario, callback)
    }

    return this;
}