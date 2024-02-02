import BankService from "./bank.service.js";

class BankController {
    async getBanks(_, res){
        const banks = await BankService.getBanks();
        res.json(banks);
    }

    async createBank(req, res){
        const { bank, rent, duration, starting_payment, service } = req.body;

        const banks = await BankService.createBank(bank, rent, duration, starting_payment, service);
        res.json(banks);
    }

    async updateBank(req, res){
        const { id } = req.params;
        const { bank, rent, duration, starting_payment, service } = req.body;

        const findBank = await BankService.getBankById(id);

        if(findBank.length === 0){  
            return res.status(404).json({
                message: `Bank with id ${id} not found`,
            });
        }
        await BankService.updateBank(id, bank, rent, duration, starting_payment, service);
        res.status(200).json();
    }

    async deleteBank(req, res){
        const {id} = req.params;

        const findBank = await BankService.getBankById(id);

        if(findBank.length === 0){
            return res.status(404).json({
                message: `Bank with id ${id} not found`,
            });
        }
        await BankService.deleteBank(id);
        res.status(200).json({
            message: `Bank with id ${id} is deleted successfully`,
        });
    }
}

export default new BankController;