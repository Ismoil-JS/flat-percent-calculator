import { HouseModel } from "./house.model.js"; 

class HouseService{
    #model;

    constructor(){
        this.#model = new HouseModel();
    }

    async getCompanies(){
        const companies = await this.#model.getCompanies();
        return companies;
    }

    async createCompany(name){
        const company = await this.#model.createCompanies(name);
        return company;
    }

    async updateCompany(id, name){
        const company = await this.#model.updateCompanies(id, name);
        return company;
    }

    async deleteCompany(id){
        const company = await this.#model.deleteCompany(id);
        return company;
    }

    async getCompanyById(id){
        const company = await this.#model.getCompaniesById(id);
        return company;
    }

    async getCompanyByName(name){
        const company = await this.#model.getCompaniesByName(name);
        return company;
    }

    // THIS PART IS FOR BRANCHES

    async getBranches(){
        const branches = await this.#model.getBranches();
        return branches;
    }

    async createBranch(name, company_id){
        await this.#model.createBranch(name, company_id);
        return null;
    }

    async updateBranch(id, name){
        await this.#model.updateBranch(id, name);
        return null;
    }

    async deleteBranch(id){
        await this.#model.deleteBranch(id);
        return null;
    }

    async getBranchById(id){
        const branch = await this.#model.getBranchById(id);
        return branch;
    }

    async getBranchByName(name){
        const branch = await this.#model.getBranchByName(name);
        return branch;
    }


    // THIS PART IS FOR ROOMS

    async getRooms(){
       const rooms = await this.#model.getRooms();
       return  rooms;
    }

    async createRoom(name, pricePM, meterCount, location, branch_id){
        await this.#model.createRoom(name, pricePM, meterCount, location, branch_id);
        return null;
    }

    async updateRoom(id, name, pricePM, meterCount, location, branch_id){
        await this.#model.updateRoom(id, name, pricePM, meterCount, location, branch_id);
        return null;
    }

    async deleteRoom(id){
        await this.#model.deleteRoom(id);
        return null;
    }

    async verifyRoom(id){
        const room = await this.#model.verifyRoom(id);
        return room;
    }
}

export default new HouseService();