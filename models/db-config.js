const mysql = require('mysql');
let methods = {};

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "192.168.10.68",
    user: "kentoes",
    password: "enter",
    database: "database_BP4"
})

let query = (sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, conn) => {
            if (error) reject(JSON.stringify(error))
            else {
                conn.query(sql, (err, result, fields) => {
                    if (err) reject(JSON.stringify(error))
                    else {
                        resolve(JSON.stringify(result))
                    }
                    conn.release();
                })
            }
        })
    })
}

let insert=(tbName, data)=>{
    
}

let getFieldName=(data)=>{
    for(x in data){
        
    }
}

let sql = "SELECT * FROM tbnoantri LIMIT 5"

query(sql)
    .then(
        result => {
            let r = JSON.parse(result)
            console.log(result)
        }, errResult => {
            console.log(errResult)
        }
    )