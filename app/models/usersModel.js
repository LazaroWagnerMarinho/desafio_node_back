module.exports = function(){

    this.getUsers = function(connection, callback){
        connection.query('select * from users', callback)
    };

    return this;
}