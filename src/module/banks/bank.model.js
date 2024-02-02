import { Postgres } from "../../config/postgres.js";

export class BankModel {
    #postgres;

    constructor(){
        this.#postgres = new Postgres();
    }

    async getBanks(){
        const query = `SELECT * FROM banks`;
        const banks = await this.#postgres.fetch(query);
        return banks;
    }

    async createBank(bank, rent, duration, starting_payment, service){
        const query = `
        INSERT INTO 
            banks(
                bank, 
                rent, 
                duration, 
                starting_payment, 
                service) 
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`;
        const banks = await this.#postgres.fetch(query, bank, rent, duration, starting_payment, service);
        return banks;
    }

    async updateBank(id, bank, rent, duration, starting_payment, service){
        const queryForBank = `SELECT * FROM banks WHERE id = $1`;
        const bankForUpdate = await this.#postgres.fetch(queryForBank, id);

        const query = `
        UPDATE 
            banks 
        SET 
            bank = $1, 
            rent = $2, 
            duration = $3, 
            starting_payment = $4, 
            service = $5 
        WHERE 
            id = $6
        RETURNING *`;
        const banks = await this.#postgres.fetch(query, 
            bank || bankForUpdate[0].bank, 
            rent || bankForUpdate[0].rent, 
            duration || bankForUpdate[0].duration, 
            starting_payment || bankForUpdate[0].starting_payment, 
            service || bankForUpdate[0].service, 
            id);
        return banks;
    }

    async deleteBank(id){
        const query = `DELETE FROM banks WHERE id = $1 RETURNING *`;
        const bank = await this.#postgres.fetch(query, id);
        return bank;
    }

    async getBankById(id){
        const query = `SELECT * FROM banks WHERE id = $1`;
        const bank = await this.#postgres.fetch(query, id);
        return bank;
    }

    async getBankByDuration(duration){
        const query = `SELECT * FROM banks WHERE duration = $1`;
        const banks = await this.#postgres.fetch(query, duration);
        return banks;
    }
}