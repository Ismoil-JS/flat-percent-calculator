import {UserModel} from "./user.model.js"
import {SignMethod} from "../../helpers/jwt.helper.js"

class UserService{
#userModel;

    constructor(){
        this.#userModel = new UserModel();
    }


    async SignUp( username, password, accesToken){
        const data = await this.#userModel.SignUp( username, password, accesToken);
        return data;
    }

    async SignIn(username, password, accesToken){
        const data = await this.#userModel.SignIn(username, password, accesToken);
        return data;
    }

    async GetUsers(username, password){
        const data = await this.#userModel.GetUsers(username, password);
        return data;
    }
}

export default new UserService;