var { createPool } = require('mysql');

var pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port:"3306",
  database: "Company"
});

pool.getConnection((err)=> {
  if (err) throw err;
  console.log("Connected!");
});
const executeQuery = (query,arraparams)=>{
    return new Promise((resolve,reject)=>{
        try{
            pool.query(query, arraparams,(err, data)=>{
                if(err){
                    console.log("ERROR EXECUTING QUERY");
                    reject(err);
                }
                resolve(data);
            });
        }catch(err){
            reject(err);
        }
    });
};
module.exports = {executeQuery};
