import { SignMethod } from "../../helpers/jwt.helper.js";
import userService from "./user.service.js";

class UserController{

    async SignUp(req, res){
        const {username, password} = req.body;
        const accesToken = SignMethod({id: 1});
        console.log(accesToken);
        const user = await userService.GetUsers(username, password);

        if(user.length > 0){
            res.status(409).json({
                message: "User already exist",
            });
            return;
        }
        const data = await userService.SignUp(username, password, accesToken);
        res.status(201).json({
            accesToken
        });
    }

    async SignIn(req, res){
        const {username, password} = req.body;
        const user = userService.GetUsers(username, password);
        const accesToken = SignMethod({id: user.id });

        if(user){

        await userService.SignIn(username, password, accesToken);
        res.status(201).json({
            accesToken
            }
          )
        } 
        
        else {
            res.status(404).json({
                message: "User not found",
            });
        }
    }

}

export default new UserController;