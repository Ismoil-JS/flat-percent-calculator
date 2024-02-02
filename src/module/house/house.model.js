import  {Postgres} from "../../config/postgres.js"

export class HouseModel{
    #postgres;

    constructor(){
        this.#postgres = new Postgres();
    }

    async getCompanies(){
        const query = `SELECT * FROM companies`;
        const companies = await this.#postgres.fetch(query);
        return companies;
    }

    async createCompanies(name){
        const query = `INSERT INTO companies(name) VALUES($1) RETURNING *`;
        const company = await this.#postgres.fetch(query, name);
        return company;
    }

    async updateCompanies(id, name){
        const query = `UPDATE companies SET name = $1 WHERE id = $2 RETURNING *`;
        const company = await this.#postgres.fetch(query, name, id);
        return company;
    }

    async deleteCompany(id){
        const query = `DELETE FROM companies WHERE id = $1 RETURNING *`;
        const company = await this.#postgres.fetch(query, id);
        return company;
    }

    async getCompaniesById(id){
        const query = `SELECT * FROM companies WHERE id = $1`;
        const company = await this.#postgres.fetch(query, id);
        return company;
    }

    async getCompaniesByName(name){
        const query = `SELECT * FROM companies WHERE name = $1`;
        const company = await this.#postgres.fetch(query, name);
        return company;
    }

    // THIS PART IS FOR BRANCHES

    async getBranches(){
        const query = `SELECT * FROM branches`;
        const branches = await this.#postgres.fetch(query);
        return branches;
    }

    async createBranch(name, company_id){
        const query = `INSERT INTO branches(name, company_id) VALUES($1, $2)`;
        const branches = await this.#postgres.fetch(query, name, company_id);
        return branches;
    }

    async updateBranch(id, name){
        const query = `UPDATE branches SET name = $1 WHERE id = $2 RETURNING *`;
        const branches = await this.#postgres.fetch(query, name, id);
        return branches;
    }

    async deleteBranch(id){
        const query = `DELETE FROM branches WHERE id = $1 RETURNING *`;
        const branches = await this.#postgres.fetch(query, id);
        return branches;
    }

    async getBranchById(id){
        const query = `SELECT * FROM branches WHERE id = $1`;
        const branches = await this.#postgres.fetch(query, id);
        return branches;
    }

    async getBranchByName(name){
        const query = `SELECT * FROM branches WHERE name = $1`;
        const branches = await this.#postgres.fetch(query, name);
        return branches;
    }


    //  THIS PART IS FOR ROOMS

    async getRooms(){
        const query = `SELECT * FROM rooms`;
        const rooms = await this.#postgres.fetch(query);
        return rooms;
    }

    async createRoom(name, pricePM, meterCount, location, branch_id){
        const query = `
        INSERT INTO 
            rooms(
                name,
                price_per_meter, 
                meter_count, 
                location, 
                branch_id) 
        VALUES
            ($1, $2, $3, $4, $5)`;
        const room = await this.#postgres.fetch(query, name, pricePM, meterCount, location, branch_id);
        return room;
    }

    async updateRoom(id, name, pricePM, meterCount, location, branch_id){
        const queryForUpdate = `SELECT * FROM rooms WHERE id = $1`

        const roomForUpdate = await this.#postgres.fetch(queryForUpdate, id);

        const query = `
        UPDATE 
            rooms 
        SET 
            name = $1, 
            price_per_meter = $2, 
            meter_count = $3, 
            location = $4, 
            branch_id = $5
            WHERE id = $6 
            RETURNING *`;
        const room = await this.#postgres.fetch(query, 
            name || roomForUpdate[0].name, 
            pricePM || roomForUpdate[0].price_per_meter, 
            meterCount || roomForUpdate[0].meter_count, 
            location || roomForUpdate[0].location, 
            branch_id || roomForUpdate[0].branch_id, 
            id);
        return room;
    }

    async deleteRoom(id){
        const query = `DELETE FROM rooms WHERE id = $1 RETURNING *`;
        const room = await this.#postgres.fetch(query, id);
        return room;
    }

    async verifyRoom(id){
        const query = `SELECT * FROM rooms WHERE id = $1`;
        const room = await this.#postgres.fetch(query, id);
        return room;
    }
}