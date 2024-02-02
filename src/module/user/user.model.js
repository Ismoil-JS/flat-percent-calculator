import {Postgres} from "../../config/postgres.js"

export class UserModel{
 #postgres;

    constructor(){
        this.#postgres = new Postgres();
    }

    async SignUp(username, password, accesToken){
        const query = `INSERT INTO users (username, password, accessToken) VALUES ($1, $2, $3) RETURNING id`;
        const data = await this.#postgres.fetch(query, username, password, accesToken);
        return data;
    }

    async SignIn(username, password, accesToken){
        const query = `UPDATE users
        SET 
            accessToken = $1
        WHERE 
            username = $2
        AND 
            password = $3;
        `;
        const data = await this.#postgres.fetch(query, accesToken, username, password);
        return data;
    }

    async GetUsers(username, password){
        const query = `SELECT * FROM users WHERE username = $1 AND password = $2`;
        const data = await this.#postgres.fetch(query, username, password);
        return data;
    }
    
}