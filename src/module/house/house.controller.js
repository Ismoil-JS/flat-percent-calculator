import  HouseService  from "./house.service.js";

class ProductController{

    async getCompanies(_, res){
        const companies = await HouseService.getCompanies();
        res.json(companies);
    }

    async createCompany(req, res){
        const { name } = req.body;

        const findCompany = await HouseService.getCompanyByName(name);
        if(findCompany.length){
            return res.status(409).json({
                message: `Company with name "${name}" already exists`,
            });
        }
        const company = await HouseService.createCompany(name);
        res.json(company);
    }

    async updateCompany(req, res){
        const { id } = req.params;
        const { name } = req.body;

        const findCompany = await HouseService.getCompanyById(id);

        if(findCompany.length === 0){  
            return res.status(404).json({
                message: `Company with id ${id} not found`,
            });
        }
        await HouseService.updateCompany(id, name);
        res.status(200).json();
    }

    async deleteCompany(req, res){
        const {id} = req.params;

        const findCompany = await HouseService.getCompanyById(id);

        if(findCompany.length === 0){
            return res.status(404).json({
                message: `Company with id ${id} not found`,
            });
        }
        await HouseService.deleteCompany(id);
        res.status(200).json({
            message: `Company with id ${id} is deleted successfully`,
        });
    }



    // THIS PART IS FOR BRANCHES

    async getBranches(_, res){
        const branches = await HouseService.getBranches();
        res.json(branches);
    }

    async createBranch(req, res){
        const { name, company_id } = req.body;

        const findBranch = await HouseService.getBranchByName(name);

        if(findBranch.length){
            return res.status(409).json({
                message: `Branch with name ${name} already exists`,
            });
        }

        const findCompany = await HouseService.getCompanyById(company_id);

        if(findCompany.length === 0){
            return res.status(404).json({
                message: `Company with id ${company_id} not found`,
            });
        }
        await HouseService.createBranch(name, company_id);
        res.status(201).json();
    }

    async updateBranch(req, res){
        const { id } = req.params;
        const { name } = req.body;

        const findBranch = await HouseService.getBranchById(id);

        if(findBranch.length === 0){
            return res.status(404).json({
                message: `Branch with id ${id} not found`,
            });
        }

        await HouseService.updateBranch(id, name);
        res.status(200).json();
    }

    async deleteBranch(req, res){
        const {id} = req.params;

        const findBranch = await HouseService.getBranchById(id);

        if(findBranch.length === 0){
            return res.status(404).json({
                message: `Branch with id ${id} not found`,
            });
        }
        await HouseService.deleteBranch(id);
        res.status(200).json({
            message: `Branch with id ${id} is deleted successfully`,
        });
    }

    // THIS PART IS FOR ROOMS

    async getRooms(_, res){
        const rooms = await HouseService.getRooms();
        res.json(rooms);
    }

    async createRoom(req, res){
        const { name, pricePM, meterCount, location, branch_id } = req.body;
        await HouseService.createRoom(name, pricePM, meterCount, location, branch_id);
        res.status(201).json({
            message: `Room with name ${name} is created successfully`,
        });
    }
     
    async updateRoom(req, res){
        const { id } = req.params;
        const { name, pricePM, meterCount, location, branch_id } = req.body;
        
        const findRoom = await HouseService.verifyRoom(id);
        if(findRoom.length === 0){
            return res.status(404).json({
                message: `Room with id ${id} not found`,
            });
        }

        await HouseService.updateRoom(id, name, pricePM, meterCount, location, branch_id);
        res.status(200).json();
    }

    async deleteRoom(req, res){
        const {id} = req.params;

        const findRoom = await HouseService.verifyRoom(id);

        if(findRoom.length === 0){
            return res.status(404).json({
                message: `Room with id ${id} not found`,
            });
        }

        await HouseService.deleteRoom(id);
        res.status(200).json({
            message: `Room with id ${id} is deleted successfully`,
        });
    }
}

export default new ProductController();