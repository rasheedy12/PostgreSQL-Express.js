const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',              
  host: 'localhost',             
  database: 'api_db',            
  password: '68824341',     
  port: 5432,                    
});

module.exports = pool;
