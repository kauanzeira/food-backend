import mysql from "mysql2";

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'mysql',
    database: "food"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
});

function query(comamnd, params, method = 'query'){
    return new Promise(function(resolve, reject){
        con[method](comamnd, params, function(error, result){
            if(error)
                reject(error)
            else
                resolve(result)
        });
    });
}u7

export {con}; 