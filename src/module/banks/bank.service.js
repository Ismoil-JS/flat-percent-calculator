import { BankModel } from "./bank.model.js";

class BankService {
    #model;

    constructor(){
        this.#model = new BankModel();
    }

    async getBanks(){
        const banks = await this.#model.getBanks();
        return banks;
    }

    async createBank(bank, rent, duration, starting_payment, service){
        const banks = await this.#model.createBank(bank, rent, duration, starting_payment, service);
        return banks;
    }

    async updateBank(id, bank, rent, duration, starting_payment, service){
        const banks = await this.#model.updateBank(id, bank, rent, duration, starting_payment, service);
        return banks;
    }

    async deleteBank(id){
        const bank = await this.#model.deleteBank(id);
        return bank;
    }

    async getBankById(id){
        const bank = await this.#model.getBankById(id);
        return bank;
    }

    async getBankByDuration(duration){
        const bank = await this.#model.getBankByDuration(duration);
        return bank;
    }
}

export default new BankService;