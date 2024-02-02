import pg from "pg"

export class Postgres{
    #pg;

    constructor(){
        this.#pg = new pg.Pool({
            connectionString: 'postgres://ncyjbueu:SAq2roGXrGu_-cZ6o5NT3weS9EOh2hO4@rosie.db.elephantsql.com/ncyjbueu',
            // port: 5432,
            // host: 'localhost',
            // user: 'postgres',
            // password: '#Ismoil1705',
            // database: 'exam4'
        });
    }

    async fetch(SQL, ...params){
        const client = await this.#pg.connect();
        try{
            const {rows} = await client.query(SQL, params.length ? params : null);
            return rows;
        }catch(e){
            console.log(e);
        }finally{
            client.release();
        }
    }
}