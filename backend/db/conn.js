const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
  })

async function check(){
    await client.connect()
    // const res = await client.query('SELECT * from blogs')
    // console.log(res.rows[0]) // Hello world!
    // await client.end()
}

check();
module.exports = client;