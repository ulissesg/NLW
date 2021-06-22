import {getCustomRepository} from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest{
    name:string;
    email:string;
    admin?: boolean
}

class CreateUserService{
    async execute({name, email, admin}:IUserRequest){
        const UserRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("email incorrect");
        }

        const userAlredyExist = await UserRepository.findOne({email});

        if (userAlredyExist){
            throw new Error ("User alredy exist");
        }

        const user= UserRepository.create({name,email, admin});

        await UserRepository.save(user);

        return user;
    }
}

export {CreateUserService}