const{pool}=require('pg');
require('dotenv').config();

const pool=new pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    name:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    jwt_secret:process.env.JWT_SECRET,
    jwt_expires_int:process.env.JWT_EXPIRES_INT
});

pool.on('error',(err)=>{
    console. error('Erreur:',err)
});

module.exports=pool;
