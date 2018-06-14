const pg = require('pg');
const Pool = pg.Pool;
const DATABASE_NAME = 'time_tracker';

const config = {
    database: DATABASE_NAME,  
    host: 'localhost',     
    port: 5432,            
    max: 10,                 
    idleTimeoutMillis: 30000
}

const pool = new Pool(config);

//successful connection
pool.on('connect', (client) => {
    console.log(`Connected to database ${DATABASE_NAME} from ${client}`);   
});

//error connection for clients that have been waiting too long
pool.on('error', (err, client) => {
    console.log(`Error with database connection from ${client}. Error: ${err}`);
    process.exit(-1); //used to exit process
});

module.exports = pool;